import { useState } from "react";
import "./ItemCount.css";
import React from "react";

export const ItemCount = ({ stock, initial, onAdd }) => {
  const [QItem, setQItem] = useState(initial);

  const DecreaseOne = () => {
    if (QItem > initial) setQItem(QItem - 1);
  };

  const AddOne = () => {
    if (QItem < stock) setQItem(QItem + 1);
  };

  return (
    <>
      <div className="countProduct">
        <p onClick={DecreaseOne} className="material-icons buttonCard reduce">
          remove_circle_outline
        </p>
        <p className="qItem" onChange={() => onAdd(QItem)}>
          {QItem}
        </p>
        <p onClick={AddOne} className="material-icons buttonCard">
          add_circle_outline
        </p>
        <div></div>
      </div>
    </>
  );
};
