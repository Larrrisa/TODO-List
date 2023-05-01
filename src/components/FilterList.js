function FilterList({ handleFilterChange, countItems, handleClear }) {
  return (
    <div div className="filter-info">
      <p className="filter-info__counter">{countItems()} </p>

      <button onClick={() => handleFilterChange("all")}>All</button>
      <button
        onClick={() => {
          handleFilterChange("active");
        }}
      >
        Active
      </button>
      <button onClick={() => handleFilterChange("completed")}>Completed</button>
      <button onClick={() => handleClear()}>Clear completed</button>
    </div>
  );
}

export default FilterList;
