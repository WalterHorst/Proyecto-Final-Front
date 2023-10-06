import "./Home.css";
import imagebanner1 from "../../assets/banner/Banner1.png";
import imagebanner2 from "../../assets/banner/Banner2.png";
import imagebanner3 from "../../assets/banner/Banner3.png";
import marca1 from "../../assets/marcas/marca-2.png";
import marca2 from "../../assets/marcas/marca-3.png";
import marca3 from "../../assets/marcas/marca-4.png";
import marca4 from "../../assets/marcas/marca-6.png";
import marca5 from "../../assets/marcas/marca-11.png";
import marca6 from "../../assets/marcas/marca-1.png";
import marca7 from "../../assets/marcas/marca-5.png";
import marca8 from "../../assets/marcas/marca-10.png";
import marca9 from "../../assets/marcas/marca-13.png";
import marca10 from "../../assets/marcas/marca-16.png";
import { Carousel } from 'react-bootstrap';

const Home = () => { 

  return (
    <section className="hero align-items-stretch">

        <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={imagebanner1} className="d-block w-100" alt="img1"/>
    </div>
    <div className="carousel-item">
      <img src={imagebanner2} className="d-block w-100" alt="img2"/>
    </div>
    <div className="carousel-item">
      <img src={imagebanner3} className="d-block w-100" alt="img3"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<div className="my-4">
  <h5 className="custom-h5">
    "PATITAS FELICES es una tienda que nació como un proyecto grupal por
    amor y dedicación hacia nuestras mascotas y que poco a poco se irá
    convirtiendo en una gran empresa. Nuestro criterio profesional se basa
    en priorizar siempre la salud animal y esto nos permitió posicionarnos
    en el mercado, obteniendo el prestigio y el respeto que
    hoy nos precede..."
  </h5>
</div>

      <div className="my-4 marcas-text">
  <i className="bi bi-stars"></i> Trabajamos con las mejores marcas del mercado
  <i className="bi bi-stars"></i>
</div>

      <div className="text-center">
        <div id="circularCarousel" className="carousel slide" data-bs-ride="carousel">
          <Carousel>
            <Carousel.Item>
              <img src={marca1} className="d-block img-fluid mx-auto" alt="..." />
            </Carousel.Item>
            <Carousel.Item>
              <img src={marca2} className="d-block img-fluid mx-auto" alt="..." />
            </Carousel.Item>
            <Carousel.Item>
              <img src={marca3} className="d-block img-fluid mx-auto" alt="..." />
            </Carousel.Item>
            <Carousel.Item>
              <img src={marca4} className="d-block img-fluid mx-auto" alt="..." />
            </Carousel.Item>
            <Carousel.Item>
              <img src={marca5} className="d-block img-fluid mx-auto" alt="..." />
            </Carousel.Item>
            <Carousel.Item>
              <img src={marca6} className="d-block img-fluid mx-auto" alt="..." />
            </Carousel.Item>
            <Carousel.Item>
              <img src={marca7} className="d-block img-fluid mx-auto" alt="..." />
            </Carousel.Item>
            <Carousel.Item>
              <img src={marca8} className="d-block img-fluid mx-auto" alt="..." />
            </Carousel.Item>
            <Carousel.Item>
              <img src={marca9} className="d-block img-fluid mx-auto" alt="..." />
            </Carousel.Item>
            <Carousel.Item>
              <img src={marca10} className="d-block img-fluid mx-auto" alt="..." />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Home;