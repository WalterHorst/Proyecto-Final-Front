import { useNavigate } from "react-router-dom";
import style from "./Footer.module.css";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className={`mb-2 ${style.footer}`}>
      <footer className={`container text-center ${style.footerContainer}`}>
        <div className="row">
          <div className={`col-12 col-md-3 ${style.columna}`}>
            <p className={`titulo ${style.titulo}`}>Contacto</p>
            <div
              className={`iconos-redes-sociales d-flex flex-wrap align-items-center justify-content-center ${style.iconosRedesSociales}`}
            >
              <a
                href="https://www.whatsapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-whatsapp"></i>
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="https://mail.google.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-envelope-at"></i>
              </a>
              <a
                href="https://es-la.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-facebook"></i>
              </a>
            </div>
          </div>
          <div className={`col-12 col-md-3 ${style.columna}`}>
            <p className={`titulo ${style.titulo}`}>Horario <i className="bi bi-clock"></i> </p>
            <p>Lunes a Viernes de 09:00 a 18:00 hrs.</p>
            <p>Sábados de 09:00 a 15:00 hrs.</p>
          </div>
          <div className={`col-12 col-md-3 ${style.columna}`}>
            <p className={`titulo ${style.titulo}`}>Información</p>
            <p className={`link ${style.link}`}><a onClick={() => navigate("/preguntas-frecuentes")} >Preguntas frecuentes</a></p>
            <p className={`link ${style.link}`}><a onClick={() => navigate("/politica-de-privacidad")} >Política de privacidad</a></p>
          </div>
          <div className={`col-12 col-md-3 ${style.columna}`}>
            <p className={`titulo ${style.titulo}`}>Ubicación <i className="bi bi-geo-alt-fill"></i></p>
            <p>Santiago del Estero 50 - Cp: 5000</p>
            <p>Buenos Aires - Argentina</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;