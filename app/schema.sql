-- ===== COURSES (catalogue) =====
create table if not exists public.courses (
  id          uuid primary key default gen_random_uuid(),
  slug        text unique not null,
  title       text not null,
  category    text not null,          -- 'Blockchain' | 'IA' | 'Web 3' | ...
  duration    integer not null,       -- en heures
  bullets      text[],
  description text,
  thumbnail   text,                   -- URL publique (Storage) ou externe
  level       text,                   -- 'Débutant' | 'Intermédiaire' | 'Avancé'
  created_at  timestamptz default now()
);

create index if not exists idx_courses_category on public.courses(category);

-- ===== MODULES (ordre dans le cours) =====
create table if not exists public.modules (
  id          uuid primary key default gen_random_uuid(),
  course_id   uuid not null references public.courses(id) on delete cascade,
  title       text not null,
  ord         integer not null default 1,  -- ordre d’affichage
  summary     text,
  created_at  timestamptz default now()
);

create index if not exists idx_modules_course on public.modules(course_id);
create index if not exists idx_modules_ord    on public.modules(course_id, ord);

-- ===== LEÇONS (ordre dans le module) =====
create table if not exists public.lessons (
  id            uuid primary key default gen_random_uuid(),
  module_id     uuid not null references public.modules(id) on delete cascade,
  title         text not null,
  ord           integer not null default 1,     -- ordre d’affichage

  -- Vidéo principale (au choix: URL externe OU fichier Storage)
  video_url     text,                            -- ex: VOD/YouTube
  storage_path  text,                            -- ex: 'vod/intro-blockchain/ch1.mp4'
  duration_min  integer,

  -- Corps de la leçon (contenu)
  body_md       text,                            -- Markdown/texte (description + explications)
  subtitles     jsonb,                           -- [{start:0.0,end:2.3,text:'...',lang:'fr'}, …]

  created_at    timestamptz default now()
);

create index if not exists idx_lessons_module on public.lessons(module_id);
create index if not exists idx_lessons_ord    on public.lessons(module_id, ord);

-- Utilisateur inscrit à un cours
create table if not exists public.enrollments (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid not null references auth.users(id) on delete cascade,
  course_id  uuid not null references public.courses(id) on delete cascade,
  created_at timestamptz default now(),
  unique (user_id, course_id)
);

-- Progression par leçon
create table if not exists public.progress (
  id         uuid primary key default gen_random_uuid(),
  user_id    uuid not null references auth.users(id) on delete cascade,
  lesson_id  uuid not null references public.lessons(id) on delete cascade,
  status     text not null check (status in ('started','completed')),
  updated_at timestamptz default now(),
  created_at timestamptz default now(),
  unique (user_id, lesson_id)
);

create index if not exists idx_enroll_user    on public.enrollments(user_id);
create index if not exists idx_enroll_course  on public.enrollments(course_id);
create index if not exists idx_progress_user  on public.progress(user_id);
create index if not exists idx_progress_lesson on public.progress(lesson_id);

-- Policies
create policy  "courses_read_public"
on public.courses for select to public using (true);

create policy  "modules_read_public"
on public.modules for select to public using (true);

create policy  "lessons_read_public"
on public.lessons for select to public using (true);


-- Activer RLS sur lessons/enrollments/progress
alter table public.enrollments enable row level security;
alter table public.progress   enable row level security;
alter table public.lessons    enable row level security;

drop policy if exists "lessons_read_public" on public.lessons;

create policy "lessons_read_if_enrolled" on public.lessons
for select to authenticated
using (
  exists (
    select 1
    from public.modules m
    join public.courses c on c.id = m.course_id
    join public.enrollments e on e.course_id = c.id
    where m.id = lessons.module_id
      and e.user_id = auth.uid()
  )
);

-- Policies utilisateur = ne voir/écrire que ses propres lignes
create policy if not exists "enrollments_select_own"
on public.enrollments for select to authenticated
using (auth.uid() = user_id);

create policy if not exists "enrollments_insert_self"
on public.enrollments for insert to authenticated
with check (auth.uid() = user_id);

create policy if not exists "progress_select_own"
on public.progress for select to authenticated
using (auth.uid() = user_id);

create policy if not exists "progress_upsert_self"
on public.progress for insert to authenticated
with check (auth.uid() = user_id);

create policy if not exists "progress_update_self"
on public.progress for update to authenticated
using (auth.uid() = user_id);

