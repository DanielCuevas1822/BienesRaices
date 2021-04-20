import React from "react";

import blog1 from "../../assets/img/blog1.jpg";

const SingleBlog = () => {
  return (
    <React.Fragment>
      <div className="centrar-texto">
        <h1 className="fw-300 centrar-texto">Terraza en el techo de tu casa</h1>

        <img src={blog1} alt="Imagen Principal" />
      </div>

      <main className="contenedor seccion contenido-centrado texto-entrada">
        <p>
          Escrito el: <span>2019-08-06</span> por: <span> Luis Perez</span>
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam nihil
          amet aliquam laborum asperiores quaerat incidunt molestias fugit
          tenetur earum, esse ducimus qui facilis? Voluptatum labore ducimus
          reiciendis? Ex, nobis! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. In repellendus quo inventore earum iure architecto
          ea, beatae optio. Provident numquam soluta magni molestiae. Libero,
          ullam debitis. Deleniti, porro? Aliquid, quo. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Architecto asperiores soluta eum
          voluptatibus necessitatibus sint quae vero unde temporibus laborum
          doloremque praesentium aliquam, dicta, placeat omnis odit, dignissimos
          aut iusto? Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Sed, exercitationem nostrum aliquid totam explicabo, dolore dolorem
          ipsa similique fugiat inventore cumque sequi quos nemo, expedita
          dignissimos sint maxime hic ipsum! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Totam nihil amet aliquam laborum
          asperiores quaerat incidunt molestias fugit tenetur earum, esse
          ducimus qui facilis? Voluptatum labore ducimus reiciendis? Ex, nobis!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In
          repellendus quo inventore earum iure architecto ea, beatae optio.
          Provident numquam soluta magni molestiae. Libero, ullam debitis.
          Deleniti, porro? Aliquid, quo. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Architecto asperiores soluta eum voluptatibus
          necessitatibus sint quae vero unde temporibus laborum doloremque
          praesentium aliquam, dicta, placeat omnis odit, dignissimos aut iusto?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
          exercitationem nostrum aliquid totam explicabo, dolore dolorem ipsa
          similique fugiat inventore cumque sequi quos nemo, expedita
          dignissimos sint maxime hic ipsum!
        </p>
      </main>
    </React.Fragment>
  );
};

export default SingleBlog;
