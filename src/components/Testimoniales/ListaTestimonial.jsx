import React from "react";
import { connect } from "react-redux";
import Testimonial from "./Testimonial";

const ListaTestimonial = (props) => {
  return (
    <section className="testimoniales">
      <h2 className="centrar-texto fw-300">Testimoniales</h2>
      {props.testimoniales.map((item, index) => (
        <Testimonial key={index} info={item} />
      ))}
    </section>
  );
};

const mapStatetoProps = (state) => {
  return {
    testimoniales: state.testimoniales,
  };
};

export default connect(mapStatetoProps)(ListaTestimonial);
