import "./ItemDetail.css";
import { ItemCount } from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../Contexts/CartContext";

export const ItemDetail = (props) => {
  const { addItem } = useCart();

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
    <>
      <p className="breadcrumbs">
        {
          "  Home > Impresiones fotograficas > Continente > Pais > Ciudad > Titulo"
        }
      </p>
      <div className="miniatureOne">
        <img src={itemDetail.img1} alt="mini1" className="miniature" />
      </div>
      <div className="miniatureTwo">
        <img src={itemDetail.img2} alt="mini2" className="miniature" />
      </div>
      <div className="miniatureThree">
        <img src={itemDetail.img3} alt="mini3" className="miniature" />
      </div>
      <div className="miniatureFour"></div>
      <div className="itemImg ">
        <img
          src={itemDetail.img1}
          alt="ACA VA LA IMAGEN"
          className="miniature"
        />
      </div>

      <div className="detail">
        <h5>{itemDetail.title}</h5>

        <p className="description">{itemDetail.description}</p>
        <div className="line wv90" />
        <h4>$ {itemDetail.price}</h4>
        <br />
        <ul>
          <li>1x1</li>
          <li>2x2</li>
          <li>3x3</li>
        </ul>
        <br />
        {cartButton ? (
          <div className="BuyOrMore">
            <Link to="/carrito">
              <button className="detailButton">Terminar mi compra</button>
            </Link>

            <Link to="../">
              <button className="detailButton">Seguir comprando</button>
            </Link>
          </div>
        ) : (
          <ItemCount
            initial={qItemToAdd}
            stock={itemDetail.stock}
            onAdd={onAdd}
          />
        )}
      </div>
      <div className="itemFooter"></div>
    </>
  );
};
