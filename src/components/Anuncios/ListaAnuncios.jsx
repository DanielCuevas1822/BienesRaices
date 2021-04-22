import React from "react";
import Anuncio from "../Anuncios/Anuncio";

import { connect } from "react-redux";

const ListaAnuncios = (props) => {
  return (
    <main className="contenedor seccion">
      <h3 className="centrar-texto fw-300">Casas y Depas en Venta</h3>
      <div className="contenedor-anuncio">
        {props.propiedades.map((item) => (
          <Anuncio key={item.id} info={item} />
        ))}
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
