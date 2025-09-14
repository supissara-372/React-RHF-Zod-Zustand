import { useState } from "react";
import { useTodoStore } from "../../store/todoStore";

const TodoForm = () => {
  const [text, setText] = useState("");
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="เพิ่มงาน" value={text}
        onChange={(e) => setText(e.target.value)} />
      <button type="submit"  >เพิ่ม</button>
    </form>
  );
};

export default TodoForm;
