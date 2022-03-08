import React from "react";
import TodoFilter from "./TodoFilter";
import TodoListItems from "./TodoListItem";
import { ALL, DONE } from "./filterOptions";
import TodoAdd from "./TodoAdd";

function TodoList() {
  const [filterValue, setFilterValue] = React.useState(ALL);

  return (
    <>
      <h1>Todo List</h1>
      <TodoFilter filterValue={filterValue} setFilterValue={setFilterValue} />
      <TodoListItems filterValue={filterValue} />
      {filterValue !== DONE && <TodoAdd />}
    </>
  );
}

export default TodoList;
