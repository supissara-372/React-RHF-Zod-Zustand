import { useState } from "react";
import { useCourseStore } from "../../store/courseStore";

const CourseForm = () => {
  const addCourse = useCourseStore((state) => state.addCourse);
  const [course, setCourse] = useState({
    id: "",
    nameTH: "",
    nameEN: "",
    credit: 0,
    teacher: "",
    grade: "A",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (course.id.trim()) {
      addCourse(course);
      setCourse({ id: "", nameTH: "", nameEN: "", credit: 0, teacher: "", grade: "A" });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="รหัสวิชา" value={course.id}
        onChange={(e) => setCourse({ ...course, id: e.target.value })} />
      <input placeholder="ชื่อวิชา (ไทย)" value={course.nameTH}
        onChange={(e) => setCourse({ ...course, nameTH: e.target.value })} />
      <input placeholder="ชื่อวิชา (อังกฤษ)" value={course.nameEN}
        onChange={(e) => setCourse({ ...course, nameEN: e.target.value })} />
      <input type="number" placeholder="หน่วยกิต" value={course.credit}
        onChange={(e) => setCourse({ ...course, credit: +e.target.value })} />
      <input placeholder="อาจารย์ผู้สอน" value={course.teacher}
        onChange={(e) => setCourse({ ...course, teacher: e.target.value })} />
      <select value={course.grade}
        onChange={(e) => setCourse({ ...course, grade: e.target.value })}>
        <option value="A">A</option>
        <option value="B+">B+</option>
        <option value="B">B</option>
        <option value="C+">C+</option>
        <option value="C">C</option>
        <option value="D+">D+</option>
        <option value="D">D</option>
        <option value="F">F</option>
      </select>
      <button type="submit">เพิ่มรายวิชา</button>
    </form>
  );
};

export default CourseForm;
