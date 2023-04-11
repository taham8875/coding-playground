import React from "react";

export default function TodoList(props) {
  return props.todos.map((element) => {
    return (
      <label key={element.id} className="d-block">
        <input
          type="checkbox"
          checked={element.complete}
          onChange={() => props.handleTodoClick(element.id)}
        />
        {element.name}
      </label>
    );
  });
}
