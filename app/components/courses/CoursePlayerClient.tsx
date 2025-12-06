// app/components/courses/CoursePlayerClient.tsx
"use client";

import { useMemo, useState } from "react";
import type { CoursePlayerData, Lesson } from "@/app/lib/types";

interface CoursePlayerClientProps {
  course: CoursePlayerData;
}

export default function CoursePlayerClient({ course }: CoursePlayerClientProps) {
  // Flatten modules → first lesson as default
  const allLessons: Lesson[] = useMemo(
    () => course.modules.flatMap((m) => m.lessons),
    [course.modules]
  );

  const [selectedLessonId, setSelectedLessonId] = useState<string | null>(
    allLessons[0]?.id ?? null
  );

  const selectedLesson =
    allLessons.find((l) => l.id === selectedLessonId) ?? allLessons[0];

  const progress = course.progressPercent ?? 0;

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-3 py-4 sm:px-4 sm:py-6 lg:flex-row">
        {/* LEFT: playlist */}
        <aside className="w-full rounded-2xl border border-slate-200 bg-white shadow-sm lg:w-80 lg:shrink-0">
          {/* Header */}
          <div className="border-b border-slate-100 px-4 py-3">
            <p className="text-xs font-bold text-slate-700 line-clamp-2">
              {course.title}
            </p>
          </div>

          {/* Modules / lessons list */}
          <div className="max-h-[70vh] overflow-y-auto px-2 py-2 text-xs sm:text-[13px]">
            {course.modules
              .sort((a, b) => a.ord - b.ord)
              .map((module) => (
                <div key={module.id} className="mb-2 rounded-xl">
                  <div className="px-2 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                    {module.title}
                  </div>
                  <div className="space-y-1">
                    {module.lessons
                      .slice()
                      .sort((a, b) => a.ord - b.ord)
                      .map((lesson, idx) => {
                        const isActive = lesson.id === selectedLesson?.id;
                        return (
                          <button
                            key={lesson.id}
                            type="button"
                            onClick={() => setSelectedLessonId(lesson.id)}
                            className={`flex w-full items-center justify-between rounded-lg px-2.5 py-2 text-left transition-colors ${
                              isActive
                                ? "bg-orange-50 text-orange-700 border border-orange-200"
                                : "text-slate-700 hover:bg-slate-50"
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <span className="text-[11px] text-slate-400">
                                {idx + 1}.
                              </span>
                              <span className="line-clamp-2">
                                {lesson.title}
                              </span>
                            </div>
                            {lesson.duration_min && (
                              <span className="ml-2 text-[11px] text-slate-400">
                                {lesson.duration_min} min
                              </span>
                            )}
                          </button>
                        );
                      })}
                  </div>
                </div>
              ))}
          </div>
        </aside>

        {/* RIGHT: main content */}
        <section className="flex-1 rounded-2xl bg-white shadow-sm border border-slate-200">
          {selectedLesson ? (
            <div className="flex flex-col gap-4 px-3 py-3 sm:px-5 sm:py-5">
              {/* Lesson title */}
              <div className="space-y-1">
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Leçon
                </p>
                <h1 className="text-lg font-bold text-slate-900 sm:text-xl">
                  {selectedLesson.title}
                </h1>
              </div>

              {/* Video */}
              <div className="overflow-hidden rounded-xl bg-black">
                    <div className="aspect-video w-full">
                        {selectedLesson.video_url ? (
                            (() => {
                            const embedUrl = getYouTubeEmbedUrl(selectedLesson.video_url);

                            // If it's a YouTube link → use iframe with /embed/ID
                            if (embedUrl) {
                                return (
                                <iframe
                                    src={embedUrl}
                                    className="h-full w-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                                );
                            }

                            // Otherwise treat it as a normal video file (Supabase storage / mp4 etc.)
                            return (
                                <video
                                controls
                                className="h-full w-full"
                                src={selectedLesson.video_url}
                                />
                            );
                            })()
                        ) : (
                            <div className="flex h-full w-full items-center justify-center text-xs text-slate-300">
                            Vidéo non disponible
                            </div>
                        )}
                    </div>
                </div>

              {/* Summary */}
              <div className="mt-2 space-y-2">
                <h2 className="text-sm font-semibold text-slate-900">
                    📌 Cours
                </h2>
                {selectedLesson.body_md
                    ? renderLessonBody(selectedLesson.body_md)
                    : !selectedLesson.body_md && (
                        <p className="text-sm text-slate-500">
                        Le contenu de cette leçon sera bientôt disponible.
                        </p>
                    )}
                </div>
            </div>
          ) : (
            <div className="flex h-full min-h-[60vh] items-center justify-center text-sm text-slate-500">
              Aucune leçon trouvée pour ce cours.
            </div>
          )}
        </section>
      </div>
    </div>
  );
}


function getYouTubeEmbedUrl(url: string): string | null {
  try {
    const u = new URL(url);

    // youtu.be/<id>
    if (u.hostname.includes("youtu.be")) {
      const id = u.pathname.replace("/", "");
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }

    // youtube.com/watch?v=<id>
    if (u.hostname.includes("youtube.com")) {
      const v = u.searchParams.get("v");
      if (v) return `https://www.youtube.com/embed/${v}`;
      // already embed?
      if (u.pathname.startsWith("/embed/")) return url;
    }

    return null;
  } catch {
    return null;
  }
}

function renderLessonBody(raw?: string) {
  if (!raw) return null;

  // Convert escaped newlines "\n" and "/n" to real line breaks
  const normalized = raw
    .replace(/\\n/g, "\n")
    .replace(/\/n/g, "\n");

  const lines = normalized
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);

  return (
    <div className="space-y-2 text-sm leading-relaxed text-slate-700">
      {lines.map((line, idx) => {
        if (line.startsWith("## ")) {
          return (
            <h3
              key={idx}
              className="mt-3 text-base font-semibold text-slate-900"
            >
              {line.replace(/^##\s*/, "")}
            </h3>
          );
        }
        if (line.startsWith("# ")) {
          return (
            <h2
              key={idx}
              className="mt-4 text-lg font-bold text-slate-900"
            >
              {line.replace(/^#\s*/, "")}
            </h2>
          );
        }
        return <p key={idx}>{line}</p>;
      })}
    </div>
  );
}
