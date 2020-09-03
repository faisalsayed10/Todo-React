import React from "react";

let count = 0;

export default function Form({ todos, input, setInput, setTodos }) {
  const inputTextHandler = (e) => {
    setInput(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    count++;
    setTodos([...todos, { text: input, completed: false, id: count }]);
    setInput("");
  };

  return (
    <form onSubmit={submitTodoHandler}>
      <input
        value={input}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}
