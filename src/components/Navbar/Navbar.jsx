import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <fragment>
      <nav className="navbar">
        <Link to="/">
          {" "}
          <div className="logo">
            <img src="../../../assets/img/logo_pequeño.png" alt="logo" />
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
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/about">Acerca de</Link>
            </li>

            <li className="services">
              <Link to="/mainService">Servicios</Link>

              <ul className="dropdown">
                <li>
                  <Link to="/music">Música</Link>
                </li>
                <li>
                  <Link to="/plasticart">Artes Plásticas</Link>
                </li>
                <li>
                  <Link to="/dance">Danza</Link>
                </li>
                <li>
                  <Link to="/photography">Fotografía</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/contacto">Contacto</Link>
            </li>

            {/* <li>
              <Link to="#">
                <i className="fa-solid fa-magnifying-glass"></i>
              </Link>
            </li> */}
            <li>
              <Link to="/sesion">
                <i className="fa-regular fa-circle-user"></i>
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </fragment>
  );
};

export default Navbar;
