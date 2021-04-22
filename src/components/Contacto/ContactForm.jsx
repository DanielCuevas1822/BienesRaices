import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("xqkwanjq");
  if (state.succeeded) {
    return <p>Gracias, nos pondremos en contacto pronto.</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nombre">Nombre completo:</label>
      <input id="nombre" type="nombre" name="nombre" />
      <ValidationError prefix="nombre" field="nombre" errors={state.errors} />

      <label htmlFor="email">Email:</label>
      <input id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <label htmlFor="message">Mensaje:</label>
      <textarea id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <button
        className="boton boton-verde"
        type="submit"
        disabled={state.submitting}
      >
        Enviar
      </button>
    </form>
  );
}

export default ContactForm;
