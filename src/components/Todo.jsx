import React, { memo } from "react";

const Todo = ({ todo, handleAdd }) => {
  console.log("Effect runs");

  return (
    <div>
      <ul>
        {todo.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button
        onClick={handleAdd}
        className="border border-black rounded-md px-5 py-1 mt-3 hover:cursor-pointer"
      >
        Add
      </button>
    </div>
  );
};

export default memo(Todo);
