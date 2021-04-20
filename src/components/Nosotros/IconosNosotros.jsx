import React from "react";

import icono1 from "../../assets/img/icono1.svg";
import icono2 from "../../assets/img/icono2.svg";
import icono3 from "../../assets/img/icono3.svg";

const IconosNosotos = () => {
  return (
    <section className="contenedor seccion">
      <h2 className="centrar-texto fw-300">Más Sobre Nosotros</h2>
      <div className="iconos-nosotros">
        <div className="icono">
          <img src={icono1} alt="icono seguridad" />
          <h3>SEGURIDAD</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi,
            ad dolore dolor laboriosam praesentium, expedita consequatur
            sapiente alias natus quisquam facere pariatur, aliquam labore. Magni
            ut nam consequuntur iusto tenetur.
          </p>
        </div>

        <div className="icono">
          <img src={icono2} alt="icono mejor precio" />
          <h3>EL MEJOR PRECIO</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi,
            ad dolore dolor laboriosam praesentium, expedita consequatur
            sapiente alias natus quisquam facere pariatur, aliquam labore. Magni
            ut nam consequuntur iusto tenetur.
          </p>
        </div>

        <div className="icono">
          <img src={icono3} alt="icono a tiempo" />
          <h3>A TIEMPO</h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi,
            ad dolore dolor laboriosam praesentium, expedita consequatur
            sapiente alias natus quisquam facere pariatur, aliquam labore. Magni
            ut nam consequuntur iusto tenetur.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IconosNosotos;
