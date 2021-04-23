import React from "react";
import EntradaBlog from "./EntradaBlog";
import { connect } from "react-redux";

const ListaBlog = (props) => {
  const { limite } = props;
  let acc = 0;
  return (
    <section className="blog">
      <h3 className="centrar-texto fw-300">Nuestro Blog</h3>
      {props.blog.map((item) => {
        if (limite === 0) {
          return <EntradaBlog key={item.id} info={item} />;
        } else {
          if (acc < limite) {
            acc++;
            return <EntradaBlog key={item.id} info={item} />;
          }
        }
        return null;
      })}
    </section>
  );
};

const mapStatetoProps = (state) => {
  return {
    blog: state.blog,
  };
};

export default connect(mapStatetoProps)(ListaBlog);
