import "./ItemList.css";
import { Item } from "./Item.jsx";

export const ItemList = (props) => {
  return (
    <div>
      <Item
        initial={props.initial}
        stock={props.stock}
        title={props.title}
        price={props.price}
        img={props.img}
      />
    </div>
  );
};
