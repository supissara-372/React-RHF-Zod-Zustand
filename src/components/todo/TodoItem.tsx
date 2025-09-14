import { useTodoStore } from "../../store/todoStore";

const TodoItem = ({ id, text }: { id: number; text: string }) => {
  const removeTodo = useTodoStore((state) => state.removeTodo);

  return (
    <li>{text} <button onClick={() => removeTodo(id)}>ลบ</button></li>
  );
};

export default TodoItem;
