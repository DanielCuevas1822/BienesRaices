import React from "react";
import { useParams } from "react-router";

import icono_wc from "../../assets/img/icono_wc.svg";
import icono_estacionamiento from "../../assets/img/icono_estacionamiento.svg";
import icono_dormitorio from "../../assets/img/icono_dormitorio.svg";
import Header from "../../components/Header";
import { connect } from "react-redux";

import SwiperCore, { Navigation, Pagination, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
SwiperCore.use([Navigation, Pagination, A11y]);

const SingleAnuncios = (props) => {
  let { name } = useParams();
  return (
    <React.Fragment>
      <Header isHome={false} />
      {props.propiedades
        .filter((item) => item.id === name)
        .map((item, index) => (
          <React.Fragment key={index}>
            <h1 className="fw-300 centrar-texto">{item.nombre_propiedad}</h1>
            <main className="contenedor seccion contenido-centrado">
              <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
              >
                {item.imagen_propiedad.map((item, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <img
                        className="imagen-destacada"
                        src={item}
                        alt="destacada"
                      />
                    </SwiperSlide>
                  );
                })}
              </Swiper>

              <div className="resumen-propiedad">
                <p className="precio">${item.precio_propiedad}</p>
                <ul className="iconos-caracteristicas">
                  <li>
                    <img src={icono_wc} alt="icono wc" />
                    <p>{item.numero_banos}</p>
                  </li>
                  <li>
                    <img src={icono_estacionamiento} alt="icono autos" />
                    <p>{item.numero_estaci}</p>
                  </li>
                  <li>
                    <img src={icono_dormitorio} alt="icono habitaciones" />
                    <p>{item.numero_recama}</p>
                  </li>
                </ul>
              </div>

              <p>{item.desc_larga}</p>
            </main>
          </React.Fragment>
        ))}
    </React.Fragment>
  );
};

const mapStatetoProps = (state) => {
  return {
    propiedades: state.propiedades,
  };
};

export default connect(mapStatetoProps)(SingleAnuncios);
