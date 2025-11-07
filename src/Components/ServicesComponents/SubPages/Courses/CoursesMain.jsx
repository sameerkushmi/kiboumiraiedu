import CourseForm from "./CourseForm"
import CourseHero from "./CourseHero"
import CourseSection from "./CourseSection"

const CoursesMain = () => {
  return (
    <div className="py-10">
      <CourseHero/>
      <CourseSection/>
      <CourseForm/>      
    </div>
  )
}

export default CoursesMain
