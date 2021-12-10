import "./Item.css";
import M from "materialize-css/dist/js/materialize.js";

import { useEffect } from "react";
import { NavLink } from "react-router-dom";

export const Item = (props) => {
  useEffect(() => {
    M.AutoInit();
  });

  return (
    <>
      <div className="cardProduct">
        <div className="gradient"></div>
        <img src={props.img1} alt="Foto" id="crop" />
        <div className="options">
          <h5>{props.title}</h5>
          <NavLink to={`/item/${props.id}`}>
            <button className="btn  buttonSeeMore">
              <p className="material-icons iconDetail">zoom_in</p>
            </button>
          </NavLink>

          <button
            data-target="modal1"
            className="btn modal-trigger buttonSeeMoreModal"
          >
            <p className="material-icons iconAdd">add_shopping_cart</p>
          </button>
        </div>
      </div>
    </>
  );
};
