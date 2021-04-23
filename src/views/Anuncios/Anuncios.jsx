import React from "react";
import ListaAnuncios from "../../components/Anuncios/ListaAnuncios";
import Header from "../../components/Header";

const Anuncios = () => {
  return (
    <React.Fragment>
      <Header isHome={false} />
      <ListaAnuncios limite={0} />
    </React.Fragment>
  );
};

export default Anuncios;
