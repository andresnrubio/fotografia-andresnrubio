import "./Item.css";
import M from "materialize-css/dist/js/materialize.js";
import { ItemDetailContainer } from "../ItemDetailContainer/ItemDetailContainer";
import { useEffect } from "react";

export const Item = (props) => {
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <>
      <div className="cardProduct">
        <h5>{props.title}</h5>
        <img src={props.img} alt="Foto Prueba" />

        <button
          data-target="modal1"
          className="btn modal-trigger buttonSeeMore"
        >
          Ver mas
        </button>
        <div id="modal1" class="modal">
          <div className="modal-content ">
            <ItemDetailContainer id={"A" + props.id} />
          </div>
        </div>
      </div>
    </>
  );
};
