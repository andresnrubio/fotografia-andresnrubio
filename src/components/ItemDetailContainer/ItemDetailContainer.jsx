import "./ItemDetailContainer.css";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = (props) => {
  return (
    <div>
      <ItemDetail
        key={props.id}
        img={"./img/rojo.jpeg"}
        img1={"./img/rojo.jpeg"}
        img2={"./img/rojo.jpeg"}
        img3={"./img/rojo.jpeg"}
        title={"Cañon del Colorado"}
        description={
          "Con esta impresion de el cañon del colorado, podras darle vida y mucho color al ambiente que elijas o por que no lucirla la proxima vez que salgas con tus amigos."
        }
        stock={5}
        initial={1}
      />
    </div>
  );
};
