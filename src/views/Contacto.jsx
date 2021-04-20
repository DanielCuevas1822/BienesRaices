import React from "react";

import destacada3 from "../assets/img/destacada3.jpg";

const Contacto = () => {
  return (
    <main className="contenido-centrado contenedor">
      <h1 className="f-300 centrar-texto">Contacto</h1>

      <img src={destacada3} alt="Imagen Principal" />

      <form className="contacto" action="mail.php" method="post">
        <fieldset>
          <legend>Información Personal</legend>

          <label for="nombre">Nombre:</label>

          <input
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Tu Nombre"
            required
          />

          <label for="email">E-mail:</label>

          <input
            type="email"
            id="email"
            name="email"
            placeholder="Tu email"
            required
          />

          <label for="telefono">Teléfono</label>

          <input
            type="tel"
            id="telefono"
            name="telefono"
            placeholder="Tu telefono"
            required
          />

          <label for="mensaje">Mensaje:</label>

          <textarea name="mensaje" id="mensaje" cols="30" rows="10"></textarea>
        </fieldset>

        <fieldset>
          <legend>Información sobre Propiedad</legend>

          <label for="opciones">Vende o Compra</label>

          <select id="opciones" name="opciones">
            <option value="" disabled selected>
              --Seleccione--
            </option>

            <option value="Vende">Vende</option>

            <option value="Compra">Compra</option>
          </select>

          <label for="cantidad">Cantidad</label>

          <input
            type="number"
            name="cantidad"
            id="cantidad"
            min="0"
            max="100"
            step="5"
          />
        </fieldset>

        <fieldset>
          <legend>Contacto</legend>

          <p>Como desea ser Contactado:</p>

          <div className="forma-contacto">
            <label for="telefono">Teléfono</label>

            <input
              type="radio"
              name="telefono_contacto"
              value="telefono"
              id="telefono"
            />

            <label for="correo">E-mail</label>

            <input
              type="radio"
              name="email_contacto"
              value="correo"
              id="correo"
            />
          </div>

          <p>Si eligió Teléfono, elija la fecha y la hora</p>

          <label for="fecha">Fecha:</label>

          <input type="date" id="fecha" name="fecha" />

          <label for="hora">Hora:</label>

          <input type="time" id="hora" name="hora" min="09:00" max="18:00" />
        </fieldset>

        <input type="submit" value="Enviar" className="boton boton-verde" />
      </form>
    </main>
  );
};

export default Contacto;
