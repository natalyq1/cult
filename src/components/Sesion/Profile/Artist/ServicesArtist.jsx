import "./Services.css";
import { Link } from "react-router-dom";

const ServiceArtist = () => {
  return (
    <fragment>
      <Link to="/profile-artist">ir a perfil artista</Link>
      <h3 className="title-p">Previsualización de servicios ofrecidos</h3>

      <article className="cards-container-p">
        <section className="card-product">
          <article className="card-p product-d1"></article>
          <article className="card-p-info">
            <h3>Ana Serrano</h3>
            <h4>Maestro de Hip-Hop</h4>
            <p>
              El hip-hop es mi lienzo, y mis movimientos son la pintura. Explora
              la energía y la pasión de la cultura urbana mientras te invito a
              un mundo de ritmo y estilo. ¡Prepárate para el espectáculo!
            </p>
            <article className="icons-p">
              <a href="">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </article>
            <p>
              <span>Fechas seleccionadas:</span>
            </p>

            <div className="input-icon">
              <input type="datetime-local" name="" id="" />
              <i className="fa-solid fa-pen"></i>
            </div>
            <div className="input-icon">
              <input type="datetime-local" name="" id="" />
              <i className="fa-solid fa-pen"></i>
            </div>
            <div className="input-icon">
              <label htmlFor="total">Total:</label>
              <textarea
                name="total"
                id=""
                cols="auto"
                rows="1"
                placeholder="Total"
              ></textarea>
            </div>

            <button className="btn btn-cancel">
              <Link to="/sesion">Cancelar</Link>
            </button>

            <button className="btn btn-two">
              <Link to="/sesion">Agregar fecha</Link>
            </button>

            <button className="btn btn-one">
              <Link to="/sesion">Contratar</Link>
            </button>
          </article>
        </section>

        <section className="card-product">
          <article className="card-p product-d1"></article>
          <article className="card-p-info">
            <h3>Ana Serrano</h3>
            <h4>Maestro de Hip-Hop</h4>
            <p>
              El hip-hop es mi lienzo, y mis movimientos son la pintura. Explora
              la energía y la pasión de la cultura urbana mientras te invito a
              un mundo de ritmo y estilo. ¡Prepárate para el espectáculo!
            </p>
            <article className="icons-p">
              <a href="">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </article>
            <p>
              <span>Fechas seleccionadas:</span>
            </p>

            <div className="input-icon">
              <input type="datetime-local" name="" id="" />
              <i className="fa-solid fa-pen"></i>
            </div>
            <div className="input-icon">
              <input type="datetime-local" name="" id="" />
              <i className="fa-solid fa-pen"></i>
            </div>
            <div className="input-icon">
              <label htmlFor="total">Total:</label>
              <textarea
                name="total"
                id=""
                cols="auto"
                rows="1"
                placeholder="Total"
              ></textarea>
            </div>

            <button className="btn btn-cancel">
              <Link to="/sesion">Cancelar</Link>
            </button>

            <button className="btn btn-two">
              <Link to="/sesion">Agregar fecha</Link>
            </button>

            <button className="btn btn-one">
              <Link to="/sesion">Contratar</Link>
            </button>
          </article>
        </section>

      </article>
    </fragment>
  );
};

export default ServiceArtist;
