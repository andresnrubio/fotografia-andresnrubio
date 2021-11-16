import "./ItemCart.css";

import { ItemCartCount } from "../ItemCartCount/ItemCartCount";
import { useCart } from "../../Contexts/CartContext";

export const ItemCart = (props) => {
  const subtotalItem = (quantity, price) => {
    return quantity * price;
  };

  const { removeItem } = useCart();

  return (
    <div className="ItemCart">
      <div className="itemCartDetail">
        <img src={props.img1} alt={props.title} />
        <p>{props.title}</p>
      </div>
      <div className="priceDetail">
        <ItemCartCount stock={props.stock} initial={props.quantity} />

        <p>
          Subtotal $<span>{subtotalItem(props.quantity, props.price)}</span>
        </p>

        <button onClick={() => removeItem(props.id)}> X </button>
      </div>
    </div>
  );
};
