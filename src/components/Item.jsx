import "./Item.css";
import { ItemCount } from "./ItemCount";

export const Item = (props) => {
  return (
    <div className="cardProduct">
      <img src={props.img} alt="Foto Prueba" />

      <h5>{props.title}</h5>

      <button className="detail">Detalle</button>

      <ItemCount stock={props.stock} initial={props.initial} />

      <button className="addProduct">Agregar</button>
    </div>
  );
};
