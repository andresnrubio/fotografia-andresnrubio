import './NavBar.css';

export const NavBar = () => 
{
return (
   <nav>
    <ul className="menu">
          <li><a href="">Inicio</a></li>
          <li><a href="">Cursos</a>
            <ul>
              <li><a href="">Frontend</a></li>
              <li><a href="">Backend</a></li>
              <li><a href="">Mobile</a></li>
            </ul>  
          </li>
          <li><a href="">Tutoriales</a></li>
          <li><a href="">Contacto</a></li>
        </ul>
      </nav>

)
}

