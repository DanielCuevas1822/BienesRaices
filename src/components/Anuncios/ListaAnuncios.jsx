import React from "react";
import Anuncio from "../Anuncios/Anuncio";

const ListaAnuncios = () => {
  return (
    <main class="contenedor seccion">
      <h3 class="centrar-texto fw-300">Casas y Depas en Venta</h3>
      <div class="contenedor-anuncio">
        <Anuncio />
        <Anuncio />
        <Anuncio />
      </div>
      
    </main>
  );
};

export default ListaAnuncios;
