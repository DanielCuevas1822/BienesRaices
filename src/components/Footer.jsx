import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer class="site-footer seccion">
      <div class="contenedor contenedor-footer">
        <nav class="navegacion">
          <Link to="/nosotros">Nosotros</Link>
          <Link to="/anuncios">Anuncios</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contacto">Contacto</Link>
        </nav>
        <p class="copyright">Todos Los Derechos Reservados&copy;</p>
      </div>
    </footer>
  );
};

export default Footer;
