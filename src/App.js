import { useCallback, useState } from "react";
import Todo from "./components/Todo.jsx";

function App() {
  const [todo, setTodo] = useState([
    "Learn React",
    "Learn Redux",
    "Learn Redux Toolkit",
  ]);
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1);
  };
  const handleAdd = useCallback(() => {
    setTodo([...todo, "Learn React Testing Library"]);
  }, [todo]);

  return (
    <>
      <Todo todo={todo} handleAdd={handleAdd} />

      <button
        className="border border-black py-1 px-5 mt-3"
        onClick={handleCount}
      >
        increment
      </button>
      <span> {count} </span>
    </>
  );
}

export default App;
