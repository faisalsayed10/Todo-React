import React, { useState, useEffect } from "react";
import "./styles.css";
import Form from "./Components/Form";
import ToDoList from "./Components/ToDoList";

export default function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setfilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos()
  }, [])

  useEffect(() => {
    filterHandler();
    setLocalTodos()
  }, [todos, status]);


  const filterHandler = () => {
    switch (status) {
      case "completed":
        setfilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setfilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setfilteredTodos(todos);
        break;
    }
  };

  const setLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
    }

  const getLocalTodos = () => {
    if(localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]))
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'))
      setTodos(todoLocal)
    }
  }

  return (
    <div className="App">
      <header>
        <h1>TsiloDot</h1>
      </header>
      <Form
        input={input}
        todos={todos}
        setTodos={setTodos}
        setInput={setInput}
        setStatus={setStatus}
      />
      <ToDoList
        setTodos={setTodos}
        todos={todos}
        filteredTodos={filteredTodos}
      />
    </div>
  );
}
