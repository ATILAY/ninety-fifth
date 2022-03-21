import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Store, Todo } from "../store/types";
import { deleteTodo, toggleTodo, updateTodo } from "../store/actions";
import { ALL, DONE, UNDONE } from "./filterOptions";

type localProps = {
  filterValue: string;
};

const filterTodos = (todos: Todo[], filterValue: string) => {
  if (filterValue === ALL) {
    return todos;
  } else if (filterValue === DONE) {
    return todos.filter((todo) => todo.done);
  } else if (filterValue === UNDONE) {
    return todos.filter((todo) => !todo.done);
  }
};

export default function TodoListItems({ filterValue }: localProps) {
  const allTodos = useSelector((state: Store) => state.todos);
  const todos = filterTodos(allTodos, filterValue) || [];

  const dispatch = useDispatch();

  return (
    <ul>
      {todos.map((todo: { id: number; text: string; done: boolean }) => (
        <li
          className={`todo-item-wrapper ${todo.done ? "item-done" : ""}`}
          key={todo.id}
        >
          <div
            className="item-status"
            onClick={() => dispatch(toggleTodo(todo.id))}
          >
            <input type="checkbox" checked={todo.done} readOnly />
            <div className="status-text">
              {todo.done ? "Finished" : "Continue"}
            </div>
          </div>
          <input
            type="text"
            value={todo.text}
            onChange={(e) => dispatch(updateTodo(todo.id, e.target.value))}
          />
          <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
}
