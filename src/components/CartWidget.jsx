import "./CartWidget.css";
import "materialize-css/dist/css/materialize.min.css";

export const CartWidget = () => {
  return (
    <div className="cart">
      <p className="material-icons cartIcon">shopping_cart</p>
      <p>4</p>
    </div>
  );
};
