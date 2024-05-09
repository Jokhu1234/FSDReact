import React from "react";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Main = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      item: "Bread",
    },
    {
      id: 2,
      checked: true,
      item: "Eggs",
    },
    {
      id: 3,
      checked: false,
      item: "Milk",
    },
    {
      id: 4,
      checked: false,
      item: "Butter",
    },
    {
      id: 5,
      checked: false,
      item: "Chicken",
    },
    {
      id: 6,
      checked: false,
      item: "Potatoes",
    },
    {
      id: 7,
      checked: false,
      item: "Asparagus",
    },
    {
      id: 8,
      checked: false,
      item: "Avocado",
    },
    {
      id: 9,
      checked: false,
      item: "Strawberries",
    },
    {
      id: 10,
      checked: false,
      item: "Salmon",
    },
  ]);

  const handleCheck = (id) => {
    const listItems = items.map(
      (item) => 
        item.id === id ? { ...item, checked: !item.checked } : item
    );

    setItems(listItems);
    localStorage.setItem("grocerylist", JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
   
   const listItems = items.filter((item) => item.id !== id
   );
   setItems(listItems);
   localStorage.setItem("grocerylist", JSON.stringify(listItems));

  };

  return (
    <main>

    {

      items.length ? ( <ul>
        
        {items.map((item) => (
          <li className="item" key={item.id}>
            <input
              onChange={() => handleCheck(item.id)}
              type="checkbox"
              checked={item.checked}
            />
            <label 
            style={item.checked ? { textDecoration: "line-through" } : null}
            
            onDoubleClick={() => handleCheck(item.id)}>
              {item.item}
              </label>
            <FaTrashAlt 
             onClick={() => handleDelete(item.id)}
             role="button" tabIndex="0" />
          </li>
        ))}
      </ul>) : (<p>Your list is empty</p>)
        }
     
    </main>
  );
};

export default Main;