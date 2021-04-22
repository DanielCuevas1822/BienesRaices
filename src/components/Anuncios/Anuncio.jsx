import React from "react";

import icono_wc from "../../assets/img/icono_wc.svg";
import icono_estacionamiento from "../../assets/img/icono_estacionamiento.svg";
import icono_dormitorio from "../../assets/img/icono_dormitorio.svg";
import anuncio1 from "../../assets/img/anuncio1.jpg";
import { Link } from "react-router-dom";

const Anuncio = (props) => {
  const { info } = props;

  return (
    <div className="anuncio">
      <img src={anuncio1} alt="anuncio" />
      <div className="contenido-anuncio">
        <h3>{info.nombre_propiedad}</h3>
        <p>{info.desc_corta}</p>
        <p className="precio">${info.precio_propiedad}</p>
        <ul className="iconos-caracteristicas">
          <li>
            <img src={icono_wc} alt="icono wc" />
            <p>{info.numero_banos}</p>
          </li>
          <li>
            <img src={icono_estacionamiento} alt="icono autos" />
            <p>{info.numero_estaci}</p>
          </li>
          <li>
            <img src={icono_dormitorio} alt="icono habitaciones" />
            <p>{info.numero_recama}</p>
          </li>
        </ul>

        <Link
          className="boton boton-amarillo d-block"
          to={`/anuncios/${info.id_propiedades}`}
        >
          VER PROPIEDAD
        </Link>
      </div>
    </div>
  );
};

export default Anuncio;
