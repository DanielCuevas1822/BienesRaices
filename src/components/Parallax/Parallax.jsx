import React from "react";
import { Link } from "react-router-dom";

const Parallax = () => {
  return (
    <section className="imagen-contenedor parallax">
      <div className="contenedor contenido-contacto">
        <h2>Encuentra la casa de tus sueños</h2>
        <p>
          Llena el formulario de Contacto y un asesor se pondrá en contacto
          contigo a la brevedad
        </p>
        <Link className="boton boton-amarillo" to="/contacto">
          CONTACTÁNOS
        </Link>
      </div>
    </section>
  );
};

export default Parallax;
