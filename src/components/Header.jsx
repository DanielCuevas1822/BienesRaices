import React from "react";
import { Link } from "react-router-dom";

import logo from "../assets/img/logo.svg";
import barra from "../assets/img/barras.svg";

const Header = () => {
  return (
    //inicio parallax
    <header className="site-header">
      <div className="contenedor contenido-header">
        <div className="barra">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>

          <div className="mobile-menu">
            <a href="#navegacion">
              <img src={barra} alt="Icono menu" />
            </a>
          </div>

          <nav id="navegacion" className="navegacion">
            <Link to="/nosotros">Nosotros</Link>
            <Link to="/anuncios">Anuncios</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contacto">Contacto</Link>
          </nav>
        </div>

        {/* <h1>Venta de Casas y Departamentos Exclusivos de Lujo</h1> */}
      </div>
    </header>
  );
};

export default Header;
