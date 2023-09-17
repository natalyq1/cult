import "../Artist/Profile.css";
//import { Link } from "react-router-dom";

const ProfileClient = () => {
  return (
    <fragment>
      <section className="container-profile">
        <article className="container-text-p">
          <article>
            <h3>Mi perfil</h3>

            <form action="">

                <div className="container-input">
              <section>
                <label htmlFor="nombre">Nombre:</label>
                <div className="input-icon">
                  <input type="text" name="nombre" id="" placeholder="Amanda" />
                  <i className="fa-solid fa-pen"></i>
                </div>
              </section>

              <section>
                <label htmlFor="apellido">Apellido:</label>
                <div className="input-icon">
                  <input
                    type="text"
                    name="apellido"
                    id=""
                    placeholder="Jimenez"
                  />
                  <i className="fa-solid fa-pen"></i>
                </div>
              </section>

              <section>
                <label htmlFor="correo">Correo:</label>
                <div className="input-icon">
                  <input
                    type="email"
                    name="correo"
                    id=""
                    placeholder="amanadaj@gmail.com"
                  />
                                      <i className="fa-solid fa-ban"></i>
                </div>
              </section>

              <section>
                <label htmlFor="celular">Celular:</label>
                <div className="input-icon">
                  <input
                    type="number"
                    name="celular"
                    id=""
                    placeholder="3001212259"
                  />
                  <i className="fa-solid fa-pen"></i>
                </div>
              </section>

              <section>
                <label htmlFor="password">Contraseña:</label>
                <div className="input-icon">
                  <input
                    type="password"
                    name="password"
                    id=""
                    placeholder="***********"
                  />
                  <i className="fa-solid fa-pen"></i>
                </div>
              </section>
              </div>
              

              
            </form>
          </article>
        </article>
      </section>
    </fragment>
  );
};

export default ProfileClient;
