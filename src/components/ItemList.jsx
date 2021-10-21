import "./ItemList.css";
import { Item } from "./Item.jsx";

export const ItemList = () => {
  return (
    <div>
      <Item
        initial={1}
        stock={5}
        title={"Cañon Colorado"}
        price={1400}
        img={"./img/rojo.jpeg"}
      />
    </div>
  );
};
