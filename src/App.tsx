import "./App.css";

import TodoForm from "./components/todo/TodoForm";
import TodoList from "./components/todo/TodoList";

import CourseForm from "./components/course/CourseForm";
import CourseList from "./components/course/CourseList";
import CourseDrop from "./components/course/CourseDrop";
import GPA from "./components/course/GPA";

function App() {
  return (
    <div className="container">
      <h1>TodoList</h1>
      <TodoForm />
      <TodoList />
      <hr />
      <h1>ระบบถอนรายวิชา</h1>
      <CourseForm />
      <CourseList />
      <CourseDrop />
      <GPA />
    </div>
  );
}

export default App;
