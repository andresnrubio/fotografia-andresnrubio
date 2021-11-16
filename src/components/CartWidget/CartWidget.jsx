import "./CartWidget.css";
import { useCart } from "../../Contexts/CartContext";

export const CartWidget = () => {
  const { cart } = useCart();

  console.log(cart);

  if (cart.length !== 0) {
    return (
      <div className="cart">
        <p className="material-icons cartIcon">shopping_cart</p>
        <p>{cart.length}</p>
      </div>
    );
  } else {
    return <></>;
  }
};
