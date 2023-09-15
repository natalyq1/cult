import './About.css';

const About = () => {
    return (
        <fragment>
            <main>
                <section className="container-about">
                    <article>
                        <img src="../../../assets/img/logo_solo.png" alt="" />
                    </article>
                    <article className="container-text">
                        <section>
                        <h3>Quienes somos</h3>
                            <p>Culturalmente Activo nace de como proyecto formativo de un grupo de estudiantes del SENA, este proyecto ve la necesidad de crear un medio de difusión en el cual diferentes tipos de artistas de la localidad de Usme pueden darse a conocer y así mismo ser contratados por la comunidad en general.</p>
</section>
<section>
                        <h3>Misión</h3>
                            <p>Generar un espacio donde artistas de la localidad de Usme puedan darse a conocer y llegar a ser visto por más personas con el fin de mejorar su visibilidad e ingresos económicos. </p>
</section>
<section>
                        <h3>Visión</h3>
                            <p>Crear conciencia de las muchas o pocas oportunidades laborales de cada localidad en el sector artístico.</p>
</section>
                    </article>
                </section>
            </main>
        </fragment>
    )
}

export default About