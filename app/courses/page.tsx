import CoursesClient from "../components/courses/coursesClient";
import { FetchAllCourses } from "../lib/data";
export default async function CoursesPage() {
  const data = await FetchAllCourses();
  return (
    <CoursesClient courses={data} />
  );
}
