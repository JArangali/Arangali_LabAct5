function Item({ itemList, onDeleteItem, onCheckedItem }) {
  return (
    <div className="todo darker-todo">
      <li className="todo-item">{itemList.quantity + " " + itemList.name}</li>
      <button
        className="delete-btn darker-button"
        onClick={() => onDeleteItem(itemList.id)}
      >
        Delete
      </button>
      <button
        className="check-btn darker-button"
        onClick={() => onCheckedItem(itemList.id)}
      >
        {itemList.isChecked ? "check" : "uncheck"}{" "}
      </button>
    </div>
  );
}
export default Item;
