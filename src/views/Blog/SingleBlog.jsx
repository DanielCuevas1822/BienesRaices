import React from "react";
import { useParams } from "react-router";

import blog1 from "../../assets/img/blog1.jpg";
import Header from "../../components/Header";

import { connect } from "react-redux";

const SingleBlog = (props) => {
  let { name } = useParams();
  return (
    <React.Fragment>
      <Header isHome={false} />
      {props.blog
        .filter((item) => item.id_nota === parseInt(name))
        .map((item, index) => (
          <React.Fragment key={index}>
            <div className="centrar-texto">
              <h1 className="fw-300 centrar-texto">{item.nombre_nota}</h1>

              <img src={blog1} alt="Imagen Principal" />
            </div>
            <main className="contenedor seccion contenido-centrado texto-entrada">
              <p>
                Escrito el: <span>{item.fecha_nota}</span> por:{" "}
                <span>{item.creador}</span>
              </p>

              <p>{item.descri_larga}</p>
            </main>
          </React.Fragment>
        ))}
    </React.Fragment>
  );
};

const mapStatetoProps = (state) => {
  return {
    blog: state.blog,
  };
};

export default connect(mapStatetoProps)(SingleBlog);
