import React from "react";

import IconosNosotos from "../components/Nosotros/IconosNosotros";
import ListaAnuncios from "../components/Anuncios/ListaAnuncios";
import ListaTestimonial from "../components/Testimoniales/ListaTestimonial";
import ListaBlog from "../components/NuestroBlog/ListaBlog";
import Parallax from "../components/Parallax/Parallax";
import Header from "../components/Header";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <React.Fragment>
      <Header isHome={true} />
      <IconosNosotos />
      <ListaAnuncios />
      <div className="contenedor seccion">
        <div className="ver-todos">
          <Link className="boton boton-verde" to="/anuncios">
            Ver Todas
          </Link>
        </div>
      </div>
      <Parallax />
      <div className="contenedor seccion-inferior seccion">
        <ListaBlog />
        <ListaTestimonial />
      </div>
    </React.Fragment>
  );
};

export default Home;
