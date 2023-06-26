function TaskList({
  handleDeleteButton,
  handleChangeNewCheckbox,
  deleteLogo,
  item,
}) {
  return (
    <div key={item.id} className="item__content">
      <input
        id={item.id}
        type="checkbox"
        checked={item.checked}
        onChange={() => handleChangeNewCheckbox(item.id, item.checked)}
        className="item__content__checkbox"
      />
      <label className="item__content__title">{item.title}</label>
      <img
        onClick={() => handleDeleteButton(item.id)}
        src={deleteLogo}
        alt=""
        id={item.id}
        className="item__content__deletebtn"
      />
    </div>
  );
}

export default TaskList;
