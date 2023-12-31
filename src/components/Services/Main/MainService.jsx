import "./MainService.css";
import { Link } from "react-router-dom";

const MainService = () => {
  return (
    <fragment>
      <article className="heading">
        <h3>Descubre un Mundo de Arte y Expresión Creativa</h3>
        <p>
          Todas los artistas y espacios culturales de Bogota en un solo lugar.
        </p>
      </article>

      <article className="cards-container">
        <section className="card card1">
          <h4>Música</h4>
          <div className="content">
            <p>
              Es el idioma universal de las emociones, cada nota es una historia
              y cada melodía es una expresión.
            </p>
            <button className="btn btn-one">
              <Link to="/music">Ver más</Link>
            </button>
          </div>
        </section>

        <section className="card card2">
          <h4>Artes Plásticas</h4>
          <div className="content">
            <p>
              Son una ventana al universo visual materializado en obras de arte
              con diversidad de estilos y técnicas.
            </p>
            <button className="btn btn-one">
              <Link to="/plasticart">Ver más</Link>
            </button>
          </div>
        </section>

        <section className="card card3">
          <h4>Danza</h4>
          <div className="content">
            <p>
              Desde la gracia del ballet hasta la energía del hip-hop, cada
              baile es una poesía en movimiento.
            </p>
            <button className="btn btn-one">
              <Link to="/dance">Ver más</Link>
            </button>
          </div>
        </section>

        <section className="card card4">
          <h4>Teatro</h4>
          <div className="content">
            <p>
              Es el arte de la narración en vivo, con actores y escenarios
              imaginarios e irreales cobran vida.
            </p>
            <button className="btn btn-one">
              <Link to="/theater">Ver más</Link>
            </button>
          </div>
        </section>
      </article>
    </fragment>
  );
};

export default MainService;
