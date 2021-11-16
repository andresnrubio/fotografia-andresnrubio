import { useState } from "react";
import "./ItemCount.css";
import React from "react";

export const ItemCount = ({ stock, initial, onAdd }) => {

  const [QItem, setQItem] = useState(initial);


  const DecreaseOne = () => {
    console.log(QItem);
    if (QItem > initial) setQItem(QItem - 1);
  };

  const AddOne = () => {
    console.log(QItem);
    if (QItem < stock) setQItem(QItem + 1);
  };

  return (
    <div className="addProduct">
      <div className="countProduct">
        <p onClick={DecreaseOne} className="material-icons buttonCard">
          remove_circle_outline
        </p>
        <p className="qItem">{QItem}</p>
        <p onClick={AddOne} className="material-icons buttonCard">
          add_circle_outline
        </p>
        <div></div>
      </div>


      <button onClick={() => onAdd(QItem)} className="addProductButton">
        Agregar al carrito

      </button>
    </div>
  );
};
