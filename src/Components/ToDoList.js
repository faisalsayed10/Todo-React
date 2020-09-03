import React from "react";
import Todos from "./Todos";

export default function ToDoList({todos}) {
  console.log(todos)
  return (
    <div className="todo-container">
      <ul className="todo-list">
        <Todos />
      </ul>
    </div>
  );
}
