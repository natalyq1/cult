import './Inicio.css';

const Inicio = () => {
    return (
        <fragment>
            <main>
                <section className="container-inicio">
                    <article>
                        <img src="../../../assets/img/sesion/img.svg" alt="" />
                    </article>
                    <article className="container-text">
                        <section>
                            <h3>Inicia sesión</h3>

                            <form action="">
<p>¿Usuario nuevo? <span><a href="">Crear cuenta</a></span> </p>
                                <input
                                    type="email"
                                    name=""
                                    id=""
                                    placeholder="Correo electrónico"
                                />
                                <input type="password" name="" id="" placeholder='Contraseña' />
                                
                                <article className="checkbox">
                                <input type='checkbox ' name='vehicle1'/>
                                    <label htmlFor="vehicle1"> Mantener sesión abierta</label><br />
                                        </article>

                                <button className="btn btn-one">
                                    <a href="">Iniciar sesión</a>
                                </button>
                            </form>
                        </section>
                    </article>
                </section>
            </main>
        </fragment>
    )
}

export default Inicio