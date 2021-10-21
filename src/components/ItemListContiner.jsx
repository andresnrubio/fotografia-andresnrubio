import './ItemListContainer.css'
import {ItemCard} from "./ItemCard.jsx";



export const ItemListContainer = (props) =>
{
return (
    <div>
    <p className="itemList">{props.greeting}</p>
    <ItemCard stock="5" initial="1"/>
    </div>
)
}