import "./ItemListContainer.css";
import { ItemCard } from "./ItemCard.jsx";

export const ItemListContainer = (props) => {
  return (
    <div>
      <p className="itemList">{props.greeting}</p>
      <ItemCard />
    </div>
  );
};
