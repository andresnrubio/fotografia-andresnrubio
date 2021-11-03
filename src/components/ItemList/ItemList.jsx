import "./ItemList.css";
import { Item } from "../Item/Item";

export const ItemList = (props) => {
  const catalog = props.catalogo;
  console.log(catalog);

  return (
    <ul className="itemList">
      {catalog.map((data) => (
        <li>
          {" "}
          <Item
            key={data.id}
            id={data.id}
            initial={data.initial}
            stock={data.stock}
            title={data.title}
            price={data.price}
            img={data.img}
          />
        </li>
      ))}
    </ul>
  );
};
