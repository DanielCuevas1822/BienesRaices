import React from "react";

import IconosNosotos from "../components/Nosotros/IconosNosotros";
import ListaAnuncios from "../components/Anuncios/ListaAnuncios";
import ListaTestimonial from "../components/Testimoniales/ListaTestimonial";
import ListaBlog from "../components/NuestroBlog/ListaBlog";
import Parallax from "../components/Parallax/Parallax";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <React.Fragment>
      <IconosNosotos />
      <ListaAnuncios />
      <div className="contenedor seccion">
        <div class="ver-todos">
          <Link className="boton boton-verde" to="/anuncios">
            Ver Todas
          </Link>
        </div>{" "}
      </div>
      <Parallax />
      <div class="contenedor seccion-inferior seccion">
        <ListaBlog />
        <ListaTestimonial />
      </div>
    </React.Fragment>
  );
};

export default Home;
