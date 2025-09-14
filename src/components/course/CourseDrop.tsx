import { useCourseStore } from "../../store/courseStore";

const CourseDrop = () => {
  const dropped = useCourseStore((state) => state.dropped);

  return (
    <div>
      <h2>รายวิชาที่ถอนแล้ว</h2>
      <ul>{dropped.map((course) => (
          <li key={course.id}>
            {course.id} - {course.nameTH}
          </li>))}
      </ul>
    </div>
  );
};

export default CourseDrop;
