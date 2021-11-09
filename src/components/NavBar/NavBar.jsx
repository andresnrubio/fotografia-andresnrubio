import "./NavBar.css";
import { CartWidget } from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navBar">
      <NavLink to="/">
        <h2>Andres N Rubio Ph.</h2>
      </NavLink>
      <ul className="menu">
        <li>
          <NavLink to="/"> Inicio </NavLink>
        </li>
        <li>
          <a href="#menu">Ciudades</a>
          <ul className="subMenu">
            <li>
              <NavLink to="/category/españa">España</NavLink>
            </li>
            <li>
              <NavLink to="/category/inglaterra">Inglaterra</NavLink>
            </li>
            <li>
              <NavLink to="/category/francia">Francia</NavLink>
            </li>
          </ul>
        </li>
        <li>
          <a href="#menu">
            <CartWidget />
          </a>
        </li>
      </ul>
    </nav>
  );
};
