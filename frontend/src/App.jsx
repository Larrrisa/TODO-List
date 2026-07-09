import { useState } from "react";

import Header from "./components/Header";
import Input from "./components/Input";
import FilterList from "./components/FilterList";
import TaskList from "./components/TaskList";
import deleteLogo from "./images/icon-cross.svg";
import moonLogo from "./images/icon-moon.svg";

function App() {
  const [todo, setTodo] = useState([
    { id: Math.random() * 10, title: "Пример", checked: false },
  ]);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");

  function handleChange(i) {
    setInput(i.target.value);
  }

  function handleSubmit(i) {
    i.preventDefault();
    setTodo([
      { id: Math.random() * 10, title: `${input}`, checked: false },
      ...todo,
    ]);
    setInput("");
  }

  function handleChangeNewCheckbox(event, id) {
    const newTodo = [...todo];
    newTodo[id].checked = event.target.checked;

    setTodo(newTodo);
  }

  function handleFilterChange(filter) {
    setFilter(filter);
  }

  const filteredTasks = todo.filter((item) => {
    if (filter === "completed") {
      return item.checked;
    } else if (filter === "active") {
      return !item.checked;
    } else {
      return true;
    }
  });

  function handleClear() {
    setTodo(todo.filter((item) => !item.checked));
  }

  function countItems() {
    const count = todo.filter((item) => !item.checked);
    if (count.length === 1) {
      return `1 item left`;
    } else {
      return `${count.length} items left`;
    }
  }

  function handleDeleteButton(id) {
    const remainingItems = todo.filter((item) => item.id !== id);
    setTodo(remainingItems);
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
        handleFilterChange={handleFilterChange}
        countItems={countItems}
        handleClear={handleClear}
      />
    </div>
  );
}
export default App;
