import "./ItemDetail.css";
import { ItemCount } from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../Contexts/CartContext";

export const ItemDetail = (props) => {
  const { addItem, removeItem } = useCart();

  const [cartButton, setCartButton] = useState(false);

  const [qItemToAdd, setQItemToAdd] = useState(0);

  const itemDetail = props.item;

  const onAdd = (qItemToAdd) => {
    setQItemToAdd(qItemToAdd);
    if (qItemToAdd >= 1) {
      setCartButton(true);
      addItem(itemDetail, qItemToAdd);
    }
  };

  return (
    <div className="ItemDetail">
      <div className="DetailShow">
        <img
          className="DetailImage"
          src={itemDetail.img1}
          alt="ACA VA LA IMAGEN"
        />
        <div className="ContentMin">
          <img className="DetailImageMin" src={itemDetail.img1} alt="mini1" />
          <img className="DetailImageMin" src={itemDetail.img2} alt="mini2" />
          <img className="DetailImageMin" src={itemDetail.img3} alt="mini3" />
        </div>
      </div>
      <div className="LateralDetalles">
        <h2>{itemDetail.title}</h2>
        <p>{itemDetail.description}</p>

        {cartButton ? (
          <Link to="/cart">
            <button>Ir a carrito</button>
          </Link>
        ) : (
          <div className="ItemAdd">
            <ItemCount
              initial={qItemToAdd}
              stock={itemDetail.stock}
              onAdd={onAdd}
            />
          </div>
        )}
        <button onClick={() => removeItem(itemDetail.id)}>BORRAR</button>
      </div>
    </div>
  );
};
