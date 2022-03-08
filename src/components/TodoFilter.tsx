import { ALL, DONE, UNDONE } from "./filterOptions";

type localProps = {
  filterValue: string;
  setFilterValue: (value: string) => void;
};

function TodoFilter({ filterValue, setFilterValue }: localProps) {

  return (
    <div className="todo-filter-wrapper">
      <label>
        <p>Filter Tasks :</p>
        <select
          value={filterValue}
          onChange={(e: { target: { value: string } }) =>
            setFilterValue(e.target.value)
          }
        >
          <option value={DONE}>Show Finished Tasks</option>
          <option value={UNDONE}>Show Tasks that Continues</option>
          <option value={ALL}>Show All Tasks</option>
        </select>
      </label>
    </div>
  );
}

export default TodoFilter;
