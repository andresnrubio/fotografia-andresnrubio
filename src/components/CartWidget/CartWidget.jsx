import "./CartWidget.css";
import { useCart } from "../../Contexts/CartContext";

const totalItemsCart = (cart) => {
  let totalItems = 0;
  for (let i = 0; i < cart.length; i++) {
    totalItems = totalItems + cart[i].quantity;
    console.log(totalItems);
  }
  return totalItems;
};

export const CartWidget = () => {
  const { cart } = useCart();

  if (cart.length !== 0) {
    return (
      <div className="cart">
        <p className="material-icons cartIcon">shopping_cart</p>
        <p>{totalItemsCart(cart)}</p>
      </div>
    );
  } else {
    return <div className="emptyCart"></div>;
  }
};
