import "./ItemCard.css";
import { ItemCount } from "./ItemCount";

export const ItemCard = (props) => {
  return (
    <div className="cardProduct">
      <img src="./img/rojo.jpeg" alt="Foto Prueba" />

      <h5>Nombre del articulo</h5>

      <ItemCount stock={5} initial={1} />
      <button className="addProduct">Agregar</button>
    </div>
  );
};
