import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

//timing 1:28 min

const Content = () => {
  //array of an item
  //we have an array that contains three objects & each object is an item and item has some properties like id, clicked, item
  const [items, setItems] = useState([
    {
      id: 1,
      clicked: true,
      item: " item 1",
    },
    {
      id: 2,
      clicked: false,
      item: "item 2",
    },
    {
      id: 3,
      clicked: false,
      item: "item 3",
    },
  ]);

  const handleCheck = (id) => {
    // console.log(`key: ${id}`)
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    //console.log(id);
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("shoppinglist", JSON.stringify(listItems));
  };

  return (
    <main>
      <ul>
        {items.map((item) => (
          <li className="item" key={item.id}>
            <input
              type="checkbox"
              onChange={(item) => handleCheck(item.id)}
              checked={item.checked}
            />

            <label
              style={item.checked ? { textDecoration: "line-through" } : null}
              onDoubleClick={(item) => handleCheck(item.id)}
            >
              {" "}
              {item.item}{" "}
            </label>
            <FaTrashAlt
              onClick={() => handleDelete(item.id)}
              role="button"
              tabIndex="0"
            />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Content;
