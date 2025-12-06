'use server'
import { createClient } from "./supabase/supabaseServer";
import { Course } from "./types";





export async function FetchAllCourses(): Promise<Course[]> {
  
  const supabase = await createClient();

  const {data, error} = await supabase
  .from('courses')
  .select(`
    id,
    slug,
    title,
    category,
    description,
    thumbnail,
    level,
    duration,
    bullets,
    modules(id, title, ord, summary)
    `)
    if(error){
      console.log("Database error: ", error)
      return[]
    }
    return (data ?? []).map((course) => ({
    ...course,
    modules: course.modules ?? [],  // Set modules to an empty array if not available
  })) as Course[];
}

