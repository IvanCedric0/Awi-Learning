// app/dashboard/my_course/[slug]/page.tsx
import { createClient } from "@/app/lib/supabase/supabaseServer";
import { redirect } from "next/navigation";
import CoursePlayerClient from "@/app/components/courses/CoursePlayerClient";
import type { CoursePlayerData } from "@/app/lib/types";
import { FetchCourse } from "@/app/lib/data";

export default async function MyCoursePage({
  params,
}: {
   params: Promise<{ slug: string }>;
}) {
    const {slug} = await params;
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/auth");

  // 👉 adapte cette partie à ta structure de tables / vue
  const data = await FetchCourse(slug);
  const course: CoursePlayerData = data as any; // le temps de typer proprement

  return <CoursePlayerClient course={course} />;
}
