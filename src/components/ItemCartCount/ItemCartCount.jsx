import "./ItemCartCount.css";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

export const ItemCartCount = ({ stock, initial, updateItem }) => {
  const [QItem, setQItem] = useState(initial);

  const DecreaseOne = () => {
    if (QItem > 1) setQItem(QItem - 1);
  };

  const AddOne = () => {
    if (QItem < stock) setQItem(QItem + 1);
  };

  useEffect(() => {
    updateItem(QItem);
  });

  return (
    <div className="countProductCart">
      <p onClick={DecreaseOne} className="material-icons buttonCard">
        remove_circle_outline
      </p>
      <p className="qItem">{QItem}</p>
      <p onClick={AddOne} className="material-icons buttonCard">
        add_circle_outline
      </p>
    </div>
  );
};
