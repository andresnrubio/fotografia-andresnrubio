import "./ItemCart.css";

import { ItemCartCount } from "../ItemCartCount/ItemCartCount";
import { useCart } from "../../Contexts/CartContext";

export const ItemCart = (props) => {
  const subtotalItem = (quantity, price) => {
    return quantity * price;
  };

  const { removeItem } = useCart();

  return (
    <div className="itemCart">
      <div className="itemCartDetail">
        <img src={props.img1} alt={props.title} />
        <p>{props.title}</p>
      </div>
      <div className="priceDetail">
        <p className="itemPrice">
          $<span>{subtotalItem(props.quantity, props.price)}</span>
        </p>
        <ItemCartCount stock={props.stock} initial={props.quantity} />
        <button onClick={() => removeItem(props.id)}> Quitar </button>
      </div>
    </div>
  );
};
