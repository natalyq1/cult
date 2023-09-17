import "./NavbarProfile.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <fragment>
      <nav className="navbar">
        <Link to="/"> 
        <div className="logo">
          <img src="../../../../assets/img/logo_pequeño.png" alt="logo" />
          <section className="nombre">
            <h1 className="brand-text">
              Culturalmente <span>Activo</span>
            </h1>
          </section>
        </div>
        </Link>

        <ul className="nav-links">
          <input type="checkbox" id="checkbox_toggle" />
          <label htmlFor="checkbox_toggle" className="hamburger">
            &#9776;
          </label>

          <div className="menu">
            <li>
              <Link to="/profile-client"><i className="fa-regular fa-circle-user"></i> Mi perfil</Link>
            </li>
            <li>
              <Link to="/profile-client-service"><i className="fa-solid fa-palette"></i> Servicios</Link>
            </li>
            <li>
              <Link to="/mainService"><i className="fa-solid fa-arrow-right-from-bracket"></i> Cerrar sesión</Link>
            </li>
          </div>
        </ul>
      </nav>
    </fragment>
  );
};

export default Navbar;
