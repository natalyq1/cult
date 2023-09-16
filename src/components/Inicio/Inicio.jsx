import './Inicio.css';
import { Link } from "react-router-dom";

const Inicio = () => {
    return (
        <fragment>
            <article className="main-section">
                <h3>
                    Explora el talento bogotano, encuentra artistas a tu medida, solicita cotizaciones o regístrate como artista.
                </h3>
                <button className="btn btn-one">
                    <a href="">
                        Conócelos</a>
                </button>
            </article>


            <article className='cards-container'>
                <section className="card card1">
                    <h4>Música</h4>
                    <div className="content">
                        <p>Es el idioma universal de las emociones, cada nota es una historia y cada melodía es una expresión.</p>
                        <button className="btn btn-one"><Link to="/music">Ver más</Link></button>

                    </div>
                </section>

                <section className="card card2">
                    <h4>Artes Plásticas</h4>
                    <div className="content">
                        <p>Son una ventana al universo visual materializado en obras de arte con diversidad de estilos y técnicas.</p>
                        <button className="btn btn-one"><Link to="/plasticart">Ver más</Link></button>

                    </div>
                </section>

                <section className="card card3">
                    <h4>Danza</h4>
                    <div className="content">
                        <p>Desde la gracia del ballet hasta la energía del hip-hop, cada baile es una poesía en movimiento.</p>
                        <button className="btn btn-one"><Link to="/dance">Ver más</Link></button>

                    </div>
                </section>

                <section className="card card4">
                    <h4>Fotografía</h4>
                    <div className="content">
                        <p>A través de los lentes, explora un universo visual donde cada imagen es una historia única y emocionante. </p>
                        <button className="btn btn-one"><Link to="/photography">Ver más</Link></button>

                    </div>
                </section>
            </article>


            <div className="position-btn">
                <button className="btn btn-one"><Link to="/mainService">Más detalles</Link></button>
            </div>

        </fragment>
    )
}

export default Inicio