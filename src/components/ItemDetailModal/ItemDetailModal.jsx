import "./ItemDetailModal.css";
import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetailModal = (props) => {
  console.log(props.item);

  const itemDetail = props.item;

  console.log(itemDetail);

  return (
    <div className="ItemDetail">
      <div className="DetailShow">
        <img
          className="DetailImage"
          src={itemDetail.img1}
          alt="ACA VA LA IMAGEN"
        />
        <div className="ContentMin">
          <img className="DetailImageMin" src={itemDetail.img1} alt="mini1" />
          <img className="DetailImageMin" src={itemDetail.img2} alt="mini2" />
          <img className="DetailImageMin" src={itemDetail.img3} alt="mini3" />
        </div>
      </div>
      <div className="LateralDetalles">
        <h2>{itemDetail.title}</h2>
        <p>{itemDetail.description}</p>

        <div className="ItemAdd">
          <ItemCount initial={itemDetail.initial} stock={itemDetail.stock} />
        </div>
      </div>
    </div>
  );
};
