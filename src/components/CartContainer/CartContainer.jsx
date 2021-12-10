import "./CartContainer.css";
import { Cart } from "../Cart/Cart";

export const CartContainer = () => {
  return (
    <>
      <div className="cartTitle">
        <p>Mi carrito</p>
      </div>
      <div className="wv100 line"></div>
      <section className="cartContainer">
        <Cart />
      </section>
    </>
  );
};
