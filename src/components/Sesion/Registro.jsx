import "./Registro.css";
import { Link } from "react-router-dom";

const Registro = () => {
  return (
    <fragment>
      <main>
        <section className="container-registro">
          <article>
            <img src="../../../assets/img/sesion/registro.svg" alt="" />
          </article>
          <article className="container-text">
            <section>
              <h3>Crear cuenta</h3>

              <form action="">
                <p>
                  ¿Ya estás registrado?{" "}
                  <span>
                                      <Link to="/sesion">Inicia sesión</Link>
                  </span>{" "}
                </p>
                              <input type="text" name="" id="" placeholder="Nombre" />
                              <input type="text" name="" id="" placeholder="Apellido" />
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Correo electrónico"
                />
                <input type="password" name="" id="" placeholder="Contraseña" />

                <article className="checkbox">
                  <input type="checkbox " name="" />
                  <label htmlFor=""> <span> <a href=""> Acepta términos y condiciones.</a></span></label>
                </article>

                <button className="btn btn-one">
                  <a href="">Regístrate</a>
                </button>

                <p className="sesion-links">O regístrate con:</p>
                <div className="sesion-links">
                  <article>
                    <a href="">
                      <i className="fa-brands fa-google"></i>
                    </a>
                  </article>
                  <article>
                    <a href="">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </article>
                  <article>
                    <a href="">
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                  </article>
                </div>
              </form>
            </section>
          </article>
        </section>
      </main>
    </fragment>
  );
};

export default Registro;
