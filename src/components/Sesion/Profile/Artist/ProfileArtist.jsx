import "./Profile.css";
import { Link } from "react-router-dom";

const ProfileArtist = () => {
  return (
    <fragment>
      <Link to="/profile-artist-service">Ir a servicios</Link>
      <section className="container-profile">
        <article className="container-text-p">
          <article>
            <h3>Mi perfil</h3>
            <h4>Servicio 1:</h4>

            <form action="">
              <div className="container-input">
                <section>
                  <label htmlFor="nombre">Nombre:</label>
                  <div className="input-icon">
                    <input
                      type="text"
                      name="nombre"
                      id=""
                      placeholder="Amanda"
                    />
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

                <section>
                  <label htmlFor="">Profesional en o servicio:</label>
                  <div className="input-icon">
                    <select name="select">
                      <option value="musica" selected>
                        Música
                      </option>
                      <option value="artesPlasticas">Artes Plásticas</option>
                      <option value="danza">Danza</option>
                      <option value="fotografia">Fotografía</option>
                    </select>
                    <i className="fa-solid fa-pen"></i>
                  </div>
                </section>

                <section>
                  <label htmlFor="">Profesional en o servicio:</label>
                  <div className="input-icon">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Cantante de rap"
                    />
                    <i className="fa-solid fa-pen"></i>
                  </div>
                </section>

                <section>
                  <label htmlFor="">Descripcion corta de servicio:</label>
                  <div className="input-icon">
                    <textarea
                      name=""
                      id=""
                      cols="auto"
                      rows="auto"
                      placeholder=" Mis rimas son mi voz y el ritmo es mi alma. Explora conmigo el mundo del rap, donde cada palabra cuenta una historia y cada ritmo cuenta una experiencia. ¡Siente la autenticidad y la fuerza en cada verso!"
                    ></textarea>
                    <i className="fa-solid fa-pen"></i>
                  </div>
                </section>

                <section>
                  <label htmlFor="">Link a instagram:</label>
                  <div className="input-icon">
                    <input
                      type="password"
                      name="password"
                      id=""
                      placeholder="https://www.instagram.com/amanda"
                    />
                    <i className="fa-solid fa-pen"></i>
                  </div>
                </section>

                <section>
                  <label htmlFor="">Link a facebook:</label>
                  <div className="input-icon">
                    <input
                      type="password"
                      name="password"
                      id=""
                      placeholder="https://www.facebook.com/amanda"
                    />
                    <i className="fa-solid fa-pen"></i>
                  </div>
                </section>

                <section>
                  <label htmlFor="">Link a youtube:</label>
                  <div className="input-icon">
                    <input
                      type="password"
                      name="password"
                      id=""
                      placeholder="https://www.youtube.com/amanda"
                    />
                    <i className="fa-solid fa-pen"></i>
                  </div>
                </section>

                <section>
                  <label htmlFor="">Subir imagen principal:</label>
                  <div className="input-icon">
                    <input type="file" name="" id="" />
                    <i className="fa-solid fa-pen"></i>
                  </div>
                </section>

                <section>
                  <label htmlFor="">Subir imágenes secundarias:</label>
                  <div className="input-icon">
                    <input type="file" name="" id="" />
                    <i className="fa-solid fa-pen"></i>
                  </div>
                </section>

                <section>
                  <label htmlFor="">Precio por hora:</label>
                  <div className="input-icon">
                    <input
                      type="password"
                      name="password"
                      id=""
                      placeholder="$70.000"
                    />
                    <i className="fa-solid fa-pen"></i>
                  </div>
                </section>
              </div>

              <button className="btn btn-one">Agregar otro servicio</button>
            </form>
          </article>
        </article>
      </section>
    </fragment>
  );
};

export default ProfileArtist;
