import "./ItemList.css";
import { Item } from "../Item/Item";
import { Preloader } from "react-materialize";

export const ItemList = (props) => {
  return (
    <div className="itemList">
      {props.catalogo.length ? (
        props.catalogo.map((data) => (
          <Item
            key={data.id}
            id={data.id}
            initial={data.initial}
            stock={data.stock}
            title={data.title}
            price={data.price}
            img1={data.img1}
            img2={data.img2}
            img3={data.img3}
          />
        ))
      ) : (
        <Preloader
          active
          color="blue"
          flashing={false}
          size="big"
          className="centerPreloader"
        />
      )}
    </div>
  );
};
