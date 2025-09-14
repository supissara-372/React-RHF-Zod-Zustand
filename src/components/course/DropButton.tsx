import { useCourseStore } from "../../store/courseStore";

const DropButton = ({ id }: { id: string }) => {
  const dropCourse = useCourseStore((state) => state.dropCourse);

  return <button onClick={() => dropCourse(id)}>ถอน</button>;
};

export default DropButton;
