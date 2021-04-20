import React from "react";

import icono_wc from "../../assets/img/icono_wc.svg";
import icono_estacionamiento from "../../assets/img/icono_estacionamiento.svg";
import icono_dormitorio from "../../assets/img/icono_dormitorio.svg";
import anuncio1 from "../../assets/img/anuncio1.jpg";
import { Link } from "react-router-dom";

const Anuncio = () => {
  return (
    <div className="anuncio">
      <img src={anuncio1} alt="anuncio" />
      <div className="contenido-anuncio">
        <h3>Casa afuera de la Ciudad</h3>
        <p>
          Casa con alberca y acabados de lujo fuera de la ciudad, excelente
          oportunidad
        </p>
        <p className="precio">$60000000</p>
        <ul className="iconos-caracteristicas">
          <li>
            <img src={icono_wc} alt="icono wc" />
            <p>5</p>
          </li>
          <li>
            <img src={icono_estacionamiento} alt="icono autos" />
            <p>6</p>
          </li>
          <li>
            <img src={icono_dormitorio} alt="icono habitaciones" />
            <p>8</p>
          </li>
        </ul>

        <Link className="boton boton-amarillo d-block" to="/anuncios/666">VER PROPIEDAD</Link>
        
      </div>
    </div>
  );
};

export default Anuncio;
