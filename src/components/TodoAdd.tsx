import { useSelector, useDispatch } from "react-redux";
import { Store } from "../store/types";
import { addTodo, setNewTodo } from "../store/actions";

function TodoAdd() {
  const newTodo = useSelector((state: Store) => state.newTodo);
  const dispatch = useDispatch();

  return (
    <div className="todo-add-wrapper">
      <input
        type="text"
        placeholder="New todo"
        value={newTodo}
        onChange={(evt) => dispatch(setNewTodo(evt.target.value))}
      />
      <button onClick={() => dispatch(addTodo())}>Add Todo</button>
    </div>
  );
}

export default TodoAdd;
