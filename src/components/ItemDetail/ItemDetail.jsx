import "./ItemDetail.css";
import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = (props) => {
  return (
    <div className="ItemDetail">
      <div className="DetailShow">
        <img className="DetailImage" src={props.img} alt="ACA VA LA IMAGEN" />
        <div className="ContentMin">
          <img className="DetailImageMin" src={props.img1} alt="mini1" />
          <img className="DetailImageMin" src={props.img2} alt="mini2" />
          <img className="DetailImageMin" src={props.img3} alt="mini3" />
        </div>
      </div>
      <div className="LateralDetalles">
        <h2>{props.title}</h2>
        <p>{props.description}</p>

        <ul className="optionsList">
          Soy un menu de Opciones
          <li>Opcion3</li>
          <li>Opcion3</li>
          <li>Opcion3</li>
        </ul>
        <div className="ItemAdd">
          <ItemCount initial={props.initial} stock={props.stock} />
        </div>
      </div>
    </div>
  );
};
