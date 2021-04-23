import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/img/logo.svg";
import barra from "../assets/img/barras.svg";

const Header = (props) => {
  const { isHome } = props;
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className={isHome ? "inicio parallax" : "site-header"}>
      <div className="contenedor contenido-header">
        <div className="barra">

          <div className="newbarra">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>

            <div className="mobile-menu">
              <img src={barra} alt="Icono menu" onClick={handleClick} />
            </div>
          </div>

          <nav
            id="navegacion"
            className={`navegacion ${isOpen ? "isopen" : ""}`}
          >
            <Link to="/nosotros">Nosotros</Link>
            <Link to="/anuncios">Anuncios</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contacto">Contacto</Link>
          </nav>
        </div>

        {isHome ? (
          <h1>Venta de Casas y Departamentos Exclusivos de Lujo</h1>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
