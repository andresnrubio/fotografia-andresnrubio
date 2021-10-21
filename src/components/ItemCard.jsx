import "./ItemCard.css";
import { ItemCount } from "./ItemCount";

export const ItemCard = (props) => {

    return (
    
     <div className="cardProduct">
     
     <img src="prueba.jpg" alt="Foto Prueba" />
    
     <h5>Nombre del articulo</h5>

    <ItemCount/>
    <button className="addProduct">Agregar</button>
     </div>
    )
}
    