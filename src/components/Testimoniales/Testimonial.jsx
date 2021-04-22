import React from "react";

const Testimonial = (props) => {
  const { info } = props;
  return (
    <div className="testimonial">
      <blockquote>{info.testimonio}</blockquote>
      <p>-{info.nombre_testimonial}</p>
    </div>
  );
};

export default Testimonial;
