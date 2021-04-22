import React from "react";
import { Link } from "react-router-dom";
import blog1 from "../../assets/img/blog1.jpg";

const Entrada = (props) => {
  const { info } = props;
  return (
    <article className="entrada-blog">
      <div className="imagen">
        <img src={blog1} alt="nombre_nota" />
      </div>

      <div className="texto-entrada">
        <h4>{info.nombre_nota}</h4>

        <p>
          Escrito el: <span>{info.fecha_nota}</span> por: <span>{info.creador}</span>
        </p>

        <p>{info.descri_corta}</p>

        <Link
          to={`/blog/${info.id_nota}`}
          className="boton boton-amarillo d-block"
        >
          Ver más
        </Link>
      </div>
    </article>
  );
};

export default Entrada;
