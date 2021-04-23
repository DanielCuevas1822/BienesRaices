import React from "react";
import Anuncio from "../Anuncios/Anuncio";

import { connect } from "react-redux";

const ListaAnuncios = (props) => {
  const { limite } = props;
  let acc = 0;
  return (
    <main className="contenedor seccion">
      <h3 className="centrar-texto fw-300">Casas y Depas en Venta</h3>
      <div className="contenedor-anuncio">
        {props.propiedades.map((item) => {
          if (limite === 0) {
            return <Anuncio key={item.id} info={item} />;
          } else {
            if (acc < limite) {
              acc++;
              return <Anuncio key={item.id} info={item} />;
            }
          }
          return null;
        })}
      </div>
    </main>
  );
};

const mapStatetoProps = (state) => {
  return {
    propiedades: state.propiedades,
  };
};

export default connect(mapStatetoProps)(ListaAnuncios);
