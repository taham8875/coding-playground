import React, { useState, useEffect, useRef } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

const LOCAK_STORAGE_KEY = "todolist";

export default function App() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();

  useEffect(() => {
    const oldItems = JSON.parse(localStorage.getItem(LOCAK_STORAGE_KEY));
    if (oldItems) {
      setTodos(oldItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAK_STORAGE_KEY, JSON.stringify(todos));
    console.log(localStorage.getItem(LOCAK_STORAGE_KEY));
  }, [todos]);

  function handleAddTodo(e) {
    const newTodo = inputRef.current.value;
    if (newTodo === "") return;
    setTodos((previousTodo) => {
      return [
        ...previousTodo,
        { id: uuidv4(), name: newTodo, complete: false },
      ];
    });
    inputRef.current.value = null;
  }

  function handleTodoClick(id) {
    let newTodos = [...todos];
    let TodoToggeled = newTodos.find((element) => element.id === id);
    TodoToggeled.complete = !TodoToggeled.complete;
    setTodos(newTodos);
  }

  function handleClearTodos() {
    const newTodos = todos.filter((todo) => !todo.complete);
    setTodos(newTodos);
  }

  return (
    <>
      <TodoList todos={todos} handleTodoClick={handleTodoClick} />
      <input ref={inputRef} className="d-block" type="text" />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleClearTodos}>Clear Complete</button>
      <div>{todos.filter((todo) => !todo.complete).length} left todos</div>
    </>
  );
}
