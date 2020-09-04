import React from "react";

let count = 0;

export default function Form({ todos, input, setInput, setTodos, setStatus }) {
  const inputTextHandler = (e) => {
    setInput(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    count++;
    setTodos([...todos, { text: input, completed: false, id: count }]);
    setInput("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value)
  }

  return (
    <form onSubmit={submitTodoHandler}>
      <input
        value={input}
        autoFocus={true}
        placeholder='Create a Todo'
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
      />
      <button className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}
