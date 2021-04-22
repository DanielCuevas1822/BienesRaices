import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="site-footer seccion">
      <div className="contenedor contenedor-footer">
        <nav className="navegacion">
          <Link to="/nosotros">Nosotros</Link>
          <Link to="/anuncios">Anuncios</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contacto">Contacto</Link>
        </nav>
        <p className="copyright">Todos Los Derechos Reservados&copy;</p>
      </div>
    </footer>
  );
};

export default Footer;
