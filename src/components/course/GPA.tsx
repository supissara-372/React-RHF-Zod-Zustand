import { useCourseStore } from "../../store/courseStore";

const GPA = () => {
  const courses = useCourseStore((state) => state.courses);

  const gradeToPoint: Record<string, number> = {
    A: 4.0, "B+": 3.5, B: 3.0, "C+": 2.5,
    C: 2.0, "D+": 1.5, D: 1.0, F: 0
  };

  const totalCredits = courses.reduce((sum, c) => sum + c.credit, 0);
  const totalPoints = courses.reduce((sum, c) => sum + gradeToPoint[c.grade] * c.credit, 0);
  const gpa = totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : "0.00";

  return <h3>GPA รวม: {gpa}</h3>;
};

export default GPA;
