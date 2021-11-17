import "./ItemCartCount.css";
import { useState } from "react";

export const ItemCartCount = ({ stock, initial }) => {
  const [QItem, setQItem] = useState(initial);

  const DecreaseOne = () => {
    if (QItem > initial) setQItem(QItem - 1);
  };

  const AddOne = () => {
    if (QItem < stock) setQItem(QItem + 1);
  };

  return (
    <div className="ItemCartCount">
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
    </div>
  );
};
