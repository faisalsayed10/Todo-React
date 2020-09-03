import React, { useState } from "react";
import "./styles.css";
import Form from "./Components/Form";
import ToDoList from "./Components/ToDoList";

export default function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all')
  const [filteredTodos, setfilteredTodos] = useState([])

  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <Form
        input={input}
        todos={todos}
        setTodos={setTodos}
        setInput={setInput}
        setStatus={setStatus}
      />
      <ToDoList setTodos={setTodos} todos={todos}/>
    </div>
  );
}
