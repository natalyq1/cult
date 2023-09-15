import './Inicio.css';

const Inicio = () => {
    return (
        <fragment>
            <article className="main-section">
                <h3>
                    Todas los artistas y espacios culturales de Bogota en un solo lugar.
                </h3>
                <button className="btn btn-one">
                    <a href="">
                        Conócelos</a>
                </button>
            </article>


            <article className='cards-container'>
                <section className="card card1">
                    <h4>Laura Gil</h4>
                    <div className="content">
                        <p>Cantante de pop, con 3 años de experiencia en el sector.</p>
                        <button className="btn btn-one"><a href="">Detalles</a></button>

                    </div>
                </section>

                <section className="card card2">
                    <h4>Laura Gil</h4>
                    <div className="content">
                        <p>Cantante de pop, con 3 años de experiencia en el sector.</p>
                        <button className="btn btn-one"><a href="">Detalles</a></button>

                    </div>
                </section>

                <section className="card card3">
                    <h4>Laura Gil</h4>
                    <div className="content">
                        <p>Cantante de pop, con 3 años de experiencia en el sector.</p>
                        <button className="btn btn-one"><a href="">Detalles</a></button>

                    </div>
                </section>

                <section className="card card4">
                    <h4>Laura Gil</h4>
                    <div className="content">
                        <p>Cantante de pop, con 3 años de experiencia en el sector.</p>
                        <button className="btn btn-one"><a href="">Detalles</a></button>

                    </div>
                </section>
            </article>

            <div className="position-btn">
                <button className="btn btn-one"><a href="">Otros</a></button>
            </div>

        </fragment>
    )
}

export default Inicio