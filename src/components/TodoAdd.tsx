import { useSelector, useDispatch } from "react-redux";
import { Store } from "../store/types";
import { addTodo, setNewTodo } from "../store/actions";

function TodoAdd() {
  const newTodo = useSelector((state: Store) => state.newTodo);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (newTodo) {
      dispatch(addTodo())
    }
  }

  return (
    <div className="todo-add-upper-wrapper">
      <div className="todo-add-wrapper">
        <input
          type="text"
          placeholder="New todo"
          value={newTodo}
          onChange={(e) => dispatch(setNewTodo(e.target.value))}
        />
        <button disabled={!newTodo} onClick={handleAddTodo}>Add Todo</button>
      </div>
      <div className="todo-add-warning-wrapper"><span style={{visibility: newTodo ? "hidden":"visible"}}>Please type some words to add your new todo</span></div>
    </div>
  );
}

export default TodoAdd;
