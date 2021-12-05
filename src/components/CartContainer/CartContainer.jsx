import "./CartContainer.css";
import { Cart } from "../Cart/Cart";

export const CartContainer = () => {
  return (
    <section className="cartContainer">
      <div className="cartTitle">
        <p>Mi carrito</p>
      </div>
      <div className="wv100 line"></div>
      <Cart />
    </section>
  );
};
