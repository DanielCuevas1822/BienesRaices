import React from "react";
import { useParams } from "react-router";

import icono_wc from "../../assets/img/icono_wc.svg";
import icono_estacionamiento from "../../assets/img/icono_estacionamiento.svg";
import icono_dormitorio from "../../assets/img/icono_dormitorio.svg";
import destacada from "../../assets/img/destacada.jpg";

const SingleAnuncios = () => {
  let { name } = useParams();
  return (
    <React.Fragment>
      <h1 class="fw-300 centrar-texto">Casa afuera de la Ciudad{name}</h1>

      <img className="imagen-destacada" src={destacada} alt="destacada" />

      <main class="contenedor seccion contenido-centrado">
        <div class="resumen-propiedad">
          <p class="precio">$2000000</p>
          <ul class="iconos-caracteristicas">
            <li>
              <img src={icono_wc} alt="icono wc" />
              <p>2</p>
            </li>
            <li>
              <img src={icono_estacionamiento} alt="icono autos" />
              <p>3</p>
            </li>
            <li>
              <img src={icono_dormitorio} alt="icono habitaciones" />
              <p>4</p>
            </li>
          </ul>
        </div>

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
          aut iusto? Lorem ipsum dolor sit amet consectetur adipisicing elit. In
          repellendus quo inventore earum iure architecto ea, beatae optio.
          Provident numquam soluta magni molestiae. Libero, ullam debitis.
          Deleniti, porro? Aliquid, quo. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Architecto asperiores soluta eum voluptatibus
          necessitatibus sint quae vero unde temporibus laborum doloremque
          praesentium aliquam, dicta, placeat omnis odit, dignissimos aut iusto?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
          exercitationem nostrum aliquid totam explicabo, dolore dolorem ipsa
          similique fugiat inventore cumque sequi quos nemo, expedita
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

export default SingleAnuncios;
