import React from "react";
import { Link } from "react-router-dom";
import blog1 from "../../assets/img/blog1.jpg";

const ListaBlog = () => {
  return (
    <section class="blog">
      <h3 class="centrar-texto fw-300">Nuestro Blog</h3>

      <article class="entrada-blog">
        <div class="imagen">
          <img src={blog1} alt="nombre_nota" />
        </div>

        <div class="texto-entrada">
          <h4>Terraza en el techo de tu casa</h4>

          <p>
            Escrito el: <span>2019-08-06</span> por: <span>Luis Perez</span>
          </p>

          <p>
            Consejos para construir una teraza en el techo de tu casa, con los
            mejores materiales y ahorra dinero.
          </p>

          <Link to="/blog/:665" className="boton boton-amarillo d-block">
            Ver más
          </Link>
        </div>
      </article>

      <article class="entrada-blog">
        <div class="imagen">
          <img src={blog1} alt="nombre_nota" />
        </div>

        <div class="texto-entrada">
          <h4>Contruye una alberca en tu hogar</h4>

          <p>
            Escrito el: <span>2019-08-06</span> por: <span>Luis Perez</span>
          </p>

          <p>
            Consejos para construir una teraza en el techo de tu casa, con los
            mejores materiales y ahorra dinero.
          </p>

          <Link to="/blog/:665" className="boton boton-amarillo d-block">
            Ver más
          </Link>
        </div>
      </article>
    </section>
  );
};

export default ListaBlog;
