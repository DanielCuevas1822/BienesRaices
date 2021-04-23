import React from "react";
import { connect } from "react-redux";
import Testimonial from "./Testimonial";

const ListaTestimonial = (props) => {
  const { limite } = props;
  let acc = 0;
  return (
    <section className="testimoniales">
      <h2 className="centrar-texto fw-300">Testimoniales</h2>
      {props.testimoniales.map((item, index) => {
        if (limite === 0) {
          return <Testimonial key={index} info={item} />;
        } else {
          if (acc < limite) {
            acc++;
            return <Testimonial key={index} info={item} />;
          }
        }
        return null;
      })}
    </section>
  );
};

const mapStatetoProps = (state) => {
  return {
    testimoniales: state.testimoniales,
  };
};

export default connect(mapStatetoProps)(ListaTestimonial);
