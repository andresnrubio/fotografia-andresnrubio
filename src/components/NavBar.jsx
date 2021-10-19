import './NavBar.css';
import { CartWidget } from './CartWidget';


export const NavBar = () => 
{
return (
   <nav className="navBar">
       <h2>Andres N Rubio Ph.</h2>
    <ul className="menu">
          <li><a href="#menu">Inicio</a></li>
          <li><a href="#menu">Impresiones</a>
            <ul className="subMenu">
              <li><a href="#menu">Papel</a></li>
              <li><a href="#menu">Canva</a></li>
              <li><a href="#menu">Textil</a></li>
              </ul>
          </li>
          <li><a href="#menu"><CartWidget /></a></li>
        </ul>
  
      </nav>

)
}

