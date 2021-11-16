import "./CartWidget.css";
// import { useCart } from "../../Contexts/CartContext";

export const CartWidget = () => {
  // const CartCount = useCart();

  // console.log(CartCount);

  return (
    <div className="cart">
      <p className="material-icons cartIcon">shopping_cart</p>
      <p>1</p>
    </div>
  );
};
