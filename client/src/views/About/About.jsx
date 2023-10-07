import imageFran from "../../assets/aboutProfileImages/Franco.jpg";
import imageMeli from "../../assets/aboutProfileImages/Melis.jpg";
import imageWalter from "../../assets/aboutProfileImages/Walter.jpg";
import imageAndres from "../../assets/aboutProfileImages/Andres.jpg";
import imageLucas from "../../assets/aboutProfileImages/Lucas.jpg";
import imageFlor from "../../assets/aboutProfileImages/Flor.jpg";
import imageIñaki from "../../assets/aboutProfileImages/Iñaki.jpg";
import imageRodri from "../../assets/aboutProfileImages/ah.jpg";
import style from "./About.module.css";

const About = () => {
  return (
    <div className="logo">
      <div className={`container text-center ${style.containerAbout}`}>
        <div className="row m-2 d-flex flex-column">
          <h2 className="mt-3 text-center text-uppercase">
            Te presentamos al equipo de desarrollo
          </h2>
          <h5 className="row m-2 d-flex flex-column">
            <em>
              Nuestro equipo está formado por individuos apasionados y
              comprometidos con el bienestar animal, el cual se unió para crear
              un sitio web para una tienda de mascotas. Cada miembro aporta
              habilidades unicas, donde combinaron su amor por los animales y la
              tecnología para ofrecer una experiencia excepcional. La plataforma
              ofrece productos detallados y de alta calidad, desde alimentos
              nutritivos hasta juguetes y accesorios, cuidadosamente
              seleccionados para el bienestar y la felicidad de tus queridos
              compañeros peludos.
            </em>
          </h5>
          <h5 className="row m-2 d-flex flex-column">
            <em>
              La dedicación demuestra cómo el amor por los animales y la
              tecnología pueden cambiar vidas...
            </em>
          </h5>
        </div>

        <div className={`row align-items-center ${style.row}`}>
          {/* Integrante1 */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className={`proyecto ${style.proyecto}`}>
              <img
                    className={`object-cover w-100 shadow-md ${style.image} ${style.smallImage}`} 
                style={{ objectFit: "cover" }}
                src={imageFran}
                alt="Franco"
              />
              <div className={`overlay ${style.overlay}`}>
                <p
                  className={`text-center ${style.centeredParagraph} ${style.name}`}
                >
                  Franco
                </p>
                <div className="iconos-contenedor text-center">
                  <a
                    href="https://github.com/Franco2730"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-github"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/fran-seba-rosales212730/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Integrante2 */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className={`proyecto ${style.proyecto}`}>
              <img
                className={`object-cover w-100 shadow-md ${style.image} ${style.smallImage}`}
                style={{ objectFit: "cover" }}
                src={imageIñaki}
                alt="Iñaki"
              />
              <div className={`overlay ${style.overlay}`}>
                <p className={style.centeredParagraph}>Iñaki</p>
                <div className="iconos-contenedor">
                  <a
                    href="https://github.com/IEchaburu"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-github"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Integrante3 */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className={`proyecto ${style.proyecto}`}>
              <img
                className={`object-cover w-100 shadow-md ${style.image} ${style.smallImage}`}
                style={{ objectFit: "cover" }}
                src={imageFlor}
                alt="Flor"
              />
              <div className={`overlay ${style.overlay}`}>
                <p className={style.centeredParagraph}>Florencia</p>
                <div className="iconos-contenedor">
                  <a
                    href="https://github.com/FlorenciaHuespe"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-github"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Integrante4 */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className={`proyecto ${style.proyecto}`}>
              <img
                className={`object-cover w-100 shadow-md ${style.image} ${style.smallImage}`}
                style={{ objectFit: "cover" }}
                src={imageLucas}
                alt="Lucas"
              />
              <div className={`overlay ${style.overlay}`}>
                <p className={style.centeredParagraph}>Lucas</p>
                <div className={`iconos-contenedor${style.iconosContenedor}`}>
                  <a
                    href="https://github.com/GreenCheeseWheel"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-github"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Integrante5 */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className={`proyecto ${style.proyecto}`}>
              <img
                className={`object-cover w-100 shadow-md ${style.image} ${style.smallImage}`}
                style={{ objectFit: "cover" }}
                src={imageAndres}
                alt="Andres"
              />
              <div className={`overlay ${style.overlay}`}>
                <p className={style.centeredParagraph}>Andres</p>
                <div className="iconos-contenedor">
                  <a
                    href="https://github.com/andrezcom"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-github"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Integrante6 */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className={`proyecto ${style.proyecto}`}>
              <img
                className={`object-cover w-100 shadow-md ${style.image} ${style.smallImage}`}
                style={{ objectFit: "cover" }}
                src={imageWalter}
                alt="Walter"
              />
              <div className={`overlay ${style.overlay}`}>
                <p className={style.centeredParagraph}>Walter</p>
                <div className="iconos-contenedor">
                  <a
                    href="https://github.com/WalterHorst"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-github"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/walter-horst-52b112276/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Integrante7 */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className={`proyecto ${style.proyecto}`}>
              <img
                className={`object-cover w-100 shadow-md ${style.image} ${style.smallImage}`}
                src={imageMeli}
                alt="Meli"
              />
              <div className={`overlay ${style.overlay}`}>
                <p className={style.centeredParagraph}>Melissa</p>
                <div className="iconos-contenedor">
                  <a
                    href="https://github.com/mmonroy94"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-github"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Integrante8 */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className={`proyecto ${style.proyecto}`}>
              <img
                className={`object-cover w-100 shadow-md ${style.image} ${style.smallImage}`}
                src={imageRodri}
                alt="Rodri"
              />
              <div className={`overlay ${style.overlay}`}>
              <p className={style.centeredParagraph}>Rodrigo</p>
              <div className="iconos-contenedor">
                    <a
                      href="https://github.com/y-Nyu"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-github"></i>
                    </a>
                    <a
                      href="https://linkedin.com/in/orellana-rodrigo"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
};

export default About;