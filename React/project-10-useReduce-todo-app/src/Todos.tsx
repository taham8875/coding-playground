import { useReducer } from "react";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

type Todos = Todo[];

type TodoAction =
  | { type: "add-todo"; text: Todo["text"] }
  | { type: "toggle-todo"; id: Todo["id"] }
  | { type: "remove-todo"; id: Todo["id"] }
  | { type: "edit-todo"; id: Todo["id"]; text: Todo["text"] };

const initialTodos = [
  { id: 1, text: "Buy milk", completed: false },
  { id: 2, text: "Buy eggs", completed: true },
  { id: 3, text: "Buy bread", completed: false },
  { id: 4, text: "Make french toast", completed: false },
];

function reducer(state: Todos, action: TodoAction): Todos {
  switch (action.type) {
    case "add-todo":
      return [
        ...state,
        {
          id: state.length + 1,
          text: action.text,
          completed: false,
        },
      ];
    case "toggle-todo":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case "remove-todo":
      return state.filter((todo) => todo.id !== action.id);
    case "edit-todo":
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, text: action.text } : todo
      );
    default:
      throw new Error();
  }
}

function Todos() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: "add-todo", text: e.target[0].value });
        }}
      >
        <input type="text" placeholder="Write a new todo" />
        <button>Add</button>
      </form>
      {todos.map((todo) => (
        <div key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch({ type: "toggle-todo", id: todo.id })}
          />
          <div>{todo.text}</div>
          <button
            onClick={() =>
              dispatch({
                type: "edit-todo",
                id: todo.id,
                text: prompt("Edit todo", todo.text) || todo.text,
              })
            }
          >
            Edit
          </button>
          <button
            onClick={() => dispatch({ type: "remove-todo", id: todo.id })}
          >
            Remove
          </button>
        </div>
      ))}
    </>
  );
}

export default Todos;
