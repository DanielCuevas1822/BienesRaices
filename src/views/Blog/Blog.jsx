import React from "react";
import ListaBlog from "../../components/NuestroBlog/ListaBlog";
import Header from "../../components/Header";

const Blog = () => {
  return (
    <React.Fragment>
      <Header isHome={false} />
      <main className="contenedor seccion contenido-centrado">
        <ListaBlog />
      </main>
    </React.Fragment>
  );
};

export default Blog;
