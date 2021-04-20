import React from "react";
import IconosNosotros from "../components/Nosotros/IconosNosotros";

import nosotros from "../assets/img/nosotros.jpg";

const Nosotros = () => {
  return (
    <React.Fragment>
      <main class="contenedor">
        <h1 class="fw-300 centrar-texto">Conoce sobre Nosotros</h1>

        <div class="contenido-nosotros">
          <div class="imagen">
            <img src={nosotros} alt="Imagen sobre Nosotros" />
          </div>

          <div class="texto-nosotros">
            <blockquote>25 años de Experiencia</blockquote>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum sagittis ornare ante, eu tristique metus luctus vel.
              Phasellus eu massa lorem. Mauris semper viverra quam, in cursus
              neque luctus vitae. Praesent fermentum mi sit amet sollicitudin
              tincidunt. Cras convallis aliquam arcu, eu sollicitudin ex
              scelerisque id. Mauris a augue feugiat, vulputate risus eu, cursus
              augue. Aliquam blandit molestie velit eu elementum.
            </p>

            <p>
              Curabitur egestas porttitor lectus, quis elementum orci volutpat
              id. Aenean ut pulvinar leo. Praesent placerat elit quis iaculis
              facilisis. Curabitur at erat odio. Nulla eu elementum sem. Vivamus
              dapibus varius rhoncus. Fusce at leo eget est fermentum aliquam.
              Quisque odio lorem, suscipit in rhoncus id, suscipit eu est. Sed
              et egestas sapien. Vivamus posuere gravida mauris. Quisque vitae
              orci quis felis euismod suscipit eu ut massa. Pellentesque mattis
              condimentum lorem in condimentum. Etiam dolor nisi, consectetur
              quis interdum id, finibus ut orci. Duis vel varius metus, in
              interdum diam.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
              sequi modi. Amet sunt neque iusto sint sit possimus, laborum
              pariatur illum asperiores ipsa eius minus. Dolores assumenda iure
              dolorem ut.
            </p>
          </div>
        </div>
      </main>
      <IconosNosotros />
    </React.Fragment>
  );
};

export default Nosotros;
