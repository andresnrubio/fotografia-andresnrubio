import "./Item.css";
import M from "materialize-css/dist/js/materialize.js";
import { ItemDetailModalContainer } from "../ItemDetailModalContainer/ItemDetailModalContainer";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

export const Item = (props) => {
  console.log(props);

  useEffect(() => {
    M.AutoInit();
  });

  return (
    <>
      <div className="cardProduct">
        <h5>{props.title}</h5>
        <img src={props.img1} alt="Foto" />

        <NavLink to={`/item/${props.id}`}>
          <button className="btn  buttonSeeMore">Ver mas</button>
        </NavLink>

        <button
          data-target="modal1"
          className="btn modal-trigger buttonSeeMore"
        >
          Comprar
        </button>
        <div id="modal1" className="modal">
          <div className="modal-content ">
            <ItemDetailModalContainer />
          </div>
        </div>
      </div>
    </>
  );
};
