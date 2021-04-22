import React from "react";

import destacada3 from "../assets/img/destacada3.jpg";
import ContactForm from "../components/Contacto/ContactForm";
import Header from "../components/Header";

const Contacto = () => {
  return (
    <React.Fragment>
      <Header isHome={false} />
      <main className="contenido-centrado contenedor">
        <h1 className="f-300 centrar-texto">Contacto</h1>
        <img src={destacada3} alt="Imagen Principal" />
        <ContactForm />
      </main>
    </React.Fragment>
  );
};

export default Contacto;
