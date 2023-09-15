import "./Contact.css";

const Contact = () => {
  return (
    <>
      <article>
        <section className="container-about">
          <article>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3977.0569102255595!2d-74.1058766852381!3d4.5838059966698435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f98de8b2cdf01%3A0xcb94d4852598b934!2sKuepa%20-%20Restrepo!5e0!3m2!1ses-419!2sco!4v1646397906216!5m2!1ses-419!2sco"
              alt="Mapa del lugar"
            ></iframe>
          </article>
          <article className="container-form">
            <section>
              <h3>Contáctanos</h3>
              <a href="">
                <p>
                  <i className="fa-solid fa-location-dot"></i> Bogotá, Colombia
                </p>
              </a>
              <a href="">
                <p>
                  <i className="fa-brands fa-whatsapp"></i> +57 3007476530
                </p>
              </a>
           <form action="">
                <input type="text" placeholder="Nombre completo" />
                <input type="email" name="" id="" placeholder="Correo electrónico"/>
                <textarea name="" id="" cols="30" rows="6" placeholder="Déjanos tu mensaje aquí"></textarea>
                <button className="btn btn-one">
                  <a href="">Enviar</a>
                  
                  </button>
            </form>
             </section>
            
          </article>
        </section>
      </article>
    </>
  );
};

export default Contact;
