import { useState } from "react";
import "./ItemCount.css";
import React from "react";

const QItems = ({ QItem }) => {
  return <p>{QItem}</p>;
};

export const ItemCount = () => {
  const [QItem, setQItem] = useState(1);

  const DecreaseOne = () => {
    setQItem(QItem - 1);
    console.log ("Hiciste click -");
  };

  const AddOne = () => {
    setQItem(QItem + 1);
    console.log ("Hiciste click +");
  };

  return (
    <div className="countProduct">
      <p onClick={DecreaseOne} className="material-icons buttonCard">
        remove_circle_outline
      </p>

      <QItems QItem={QItem}/>

      <p onClick={AddOne} className="material-icons buttonCard">
        add_circle_outline
      </p>
    </div>
  );
}
