import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  addTodo,
  toggleComplete,
  deleteTodo,
  clearCompletedTodo,
} from "./redux/slice";
import { useSelector } from "react-redux";

import Header from "./components/Header";
import Input from "./components/Input";
import FilterList from "./components/FilterList";
import TaskList from "./components/TaskList";
import deleteLogo from "./images/icon-cross.svg";
import moonLogo from "./images/icon-moon.svg";

function App() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.list);
  const filter = useSelector((state) => state.todos.filter);

  function handleChange(i) {
    setInput(i.target.value);
  }

  function handleSubmit(i) {
    i.preventDefault();
    if (input) {
      dispatch(addTodo({ title: input }));
    }
    setInput("");
  }

  function handleChangeNewCheckbox(id, checked) {
    dispatch(toggleComplete({ id, checked: !checked }));
    console.log(todos);
  }

  const filteredTasks = todos.filter((item) => {
    if (filter === "completed") {
      return item.checked;
    } else if (filter === "active") {
      return !item.checked;
    } else {
      return true;
    }
  });

  function handleClear() {
    dispatch(clearCompletedTodo());
  }

  function countItems() {
    const count = todos.filter((item) => !item.checked);
    if (count.length === 1) {
      return `1 item left`;
    } else {
      return `${count.length} items left`;
    }
  }

  function handleDeleteButton(id) {
    dispatch(deleteTodo({ id }));
  }

  function handleSwitchThem() {
    document.body.classList.toggle("light");
  }

  return (
    <div>
      <Header moonLogo={moonLogo} handleSwitchThem={handleSwitchThem} />
      <Input
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        value={input}
      />
      <div className="item">
        {filteredTasks.map((item, id) => (
          <TaskList
            handleDeleteButton={handleDeleteButton}
            handleChangeNewCheckbox={handleChangeNewCheckbox}
            item={item}
            id={id}
            deleteLogo={deleteLogo}
          />
        ))}
      </div>
      <FilterList
        countItems={countItems}
        handleClear={handleClear}
      />
    </div>
  );
}
export default App;
