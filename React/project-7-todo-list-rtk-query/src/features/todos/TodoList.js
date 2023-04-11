import React, { useState } from "react";
import {
  useGetTodosQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} from "../api/apiSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faUpload } from "@fortawesome/free-solid-svg-icons";

export default function TodoList() {
  const [newTodo, setNewTodo] = useState("");

  const {
    data: todos,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetTodosQuery();

  const [addTodo] = useAddTodoMutation();
  const [updateTodo] = useUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo({ userId: 1, title: newTodo, complete: false });
    setNewTodo("");
  };

  const addForm = (
    <form className="row g-4" onSubmit={handleSubmit}>
      <div className="col-auto">
        <input
          id="new-todo"
          className="form-control"
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter a new todo"
        />
      </div>
      <div className="col-auto">
        <button className="btn btn-primary" type="submit">
          <FontAwesomeIcon icon={faUpload} />
        </button>
      </div>
    </form>
  );

  let content;
  if (isLoading) {
    content = <div>Loading ...</div>;
  } else if (isSuccess) {
    content = todos.map((todo) => {
      return (
        <div key={todo.id}>
          <div className="todo">
            <div className="form-check d-flex align-items-center border-top pt-2 mt-3">
              <input
                className="form-check-input me-2"
                type="checkbox"
                value=""
                id={todo.id}
                checked={todo.completed}
                onChange={() =>
                  updateTodo({ ...todo, completed: !todo.completed })
                }
              />
              <label className="form-check-label" htmlFor={todo.id}>
                {todo.title}
              </label>
              <button
                className="btn btn-danger ms-auto"
                onClick={() => deleteTodo({ id: todo.id })}
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </div>
        </div>
      );
    });
  } else if (isError) {
    content = <p>{error}</p>;
  }

  return (
    <div className="card">
      <h5 className="card-header">Todo List</h5>
      <div className="card-body">
        {addForm}
        {content}
      </div>
    </div>
  );
}
