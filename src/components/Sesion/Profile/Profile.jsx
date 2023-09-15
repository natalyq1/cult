import './Inicio.css';
import { Link } from "react-router-dom";

const Inicio = () => {
    return (
        <fragment>
            <main>
                <section className="container-inicio">
                    <article>
                        <img src="../../../assets/img/sesion/inicio.svg" alt="" />
                    </article>
                    <article className="container-text">
                        <section>
                            <h3>Inicia sesión</h3>

                            <form action="">
                                <p>¿Usuario nuevo? <span><Link to="/registro">Crear cuenta</Link></span> </p>
                                <input
                                    type="email"
                                    name=""
                                    id=""
                                    placeholder="Correo electrónico"
                                />
                                <input type="password" name="" id="" placeholder='Contraseña' />

                                <article className="checkbox">
                                    <input type='checkbox ' name='checkbox' />
                                    <label htmlFor="checkbox"> Mantener sesión abierta</label>
                                </article>

                                <button className="btn btn-one">
                                    <a href="">Iniciar sesión</a>
                                </button>
 
                                <p className='sesion-links'>O inicia sesión con:</p>
                                <div className='sesion-links'>
                                <article>
                                    <a href=""><i className="fa-brands fa-google"></i></a>
                                    </article>
                                <article>
                                    <a href=""><i className="fa-brands fa-instagram"></i></a>
                                    </article>
                                <article>
                                    <a href=""><i className="fa-brands fa-linkedin"></i></a>
                                    </article>
                                </div>
                            </form>
                        </section>
                    </article>
                </section>
            </main>
        </fragment>
    )
}

export default Inicio