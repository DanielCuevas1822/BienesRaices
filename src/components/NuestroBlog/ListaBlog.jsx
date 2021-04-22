import React from "react";
import EntradaBlog from "./EntradaBlog";
import { connect } from "react-redux";

const ListaBlog = (props) => {
  return (
    <section className="blog">
      <h3 className="centrar-texto fw-300">Nuestro Blog</h3>
      {props.blog.map((item) => (
        <EntradaBlog key={item.id} info={item} />
      ))}
    </section>
  );
};

const mapStatetoProps = (state) => {
  return {
    blog: state.blog,
  };
};

export default connect(mapStatetoProps)(ListaBlog);
