import { useCourseStore } from "../../store/courseStore";
import DropButton from "./DropButton";

const CourseList = () => {
  const courses = useCourseStore((state) => state.courses);

  return (
    <div>
      <h2>รายวิชาที่ลงทะเบียน</h2>
      <ul> {courses.map((course) => (
            <li key={course.id}>
            {course.id} - {course.nameTH} ({course.credit} หน่วยกิต) | เกรด: {course.grade}
            <DropButton id={course.id} /></li>))}
      </ul>
    </div>
  );
};

export default CourseList;
