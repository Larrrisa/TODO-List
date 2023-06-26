import { useDispatch } from "react-redux";
import { setFilter } from "../redux/slice";

function FilterList({ handleFilterChange, countItems, handleClear }) {
  const dispatch = useDispatch();
  return (
    <div div className="filter-info">
      <p className="filter-info__counter">{countItems()} </p>

      <button onClick={() => dispatch(setFilter("all"))}>All</button>
      <button
        onClick={() => {
          dispatch(setFilter("active"));
        }}
      >
        Active
      </button>
      <button onClick={() => dispatch(setFilter("completed"))}>
        Completed
      </button>
      <button onClick={() => handleClear()}>Clear completed</button>
    </div>
  );
}

export default FilterList;
