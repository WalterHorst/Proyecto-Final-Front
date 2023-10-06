import imageVisa from "../../assets/tarj/visa.png";
import imageMastercard from "../../assets/tarj/mastercard.png";
import imageAmerican from "../../assets/tarj/american-express.png";
import imageMercado from "../../assets/tarj/mercadoPago1.png";
import style from "./Faq.module.css";

const Faq = () => {
  return (
    <div className="vh-100 bg-light d flex align-items-center">
      <div className="h-75 container-sm mx-auto">
        <h1 className="fs-2 text-primary text-center py-3">
          Preguntas frecuentes
        </h1>
        <div className="accordion" id="accordionExample">
          {/* --1-- */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                ¿Qué es Patitas Felices?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Es el sitio web donde vas a poder encontrar todo lo que
                necesitás para tus mascotas. Registrándote en Patitas Felices
                vas a poder adquirir todos los productos y servicios que
                ofrecemos.
              </div>
            </div>
          </div>
          {/* --2-- */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                ¿Cómo recupero mi contraseña olvidada?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Si has olvidado tu contraseña, puedes recuperarla en el apartado
                de LOGIN. Proporciona tu dirección de correo electrónico y tu
                nombre de usuario. Te enviaremos la contraseña a tu e-mail para
                que puedas seguir utilizando tu cuenta.
              </div>
            </div>
          </div>
          {/* --3-- */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                ¿Puedo modificar mis datos en Patitas Felices?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Para editar tu cuenta de nuestra tienda online, sólo tenés que
                visitar nuestra sección «LOGIN» del menú principal y hacer clic
                en el botón «EDITAR CUENTA».
              </div>
            </div>
          </div>
          {/* --4-- */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                ¿Qué formas de pago puedo aprovechar para realizar mi compra?
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Podés abonar en efectivo con 10% OFF (vía depósito ó
                transferencia bancaria, Rapipago y Pago Fácil) o con todas las
                tarjetas! (a través de Mercado pago), algunas son (consultar
                Medios de Pago/MercadoPago):
                <img
                  alt=""
                  className={`user-page-logos ${style.logosPage}`}
                  src={imageMercado}
                />
                <img
                  alt=""
                  className={`user-page-logos ${style.logosPage}`}
                  src={imageVisa}
                />
                <img
                  alt=""
                  className={`user-page-logos ${style.logosPage}`}
                  src={imageMastercard}
                />
                <img
                  alt=""
                  className={`user-page-logos ${style.logosPage}`}
                  src={imageAmerican}
                />
              </div>
            </div>
          </div>
          {/* --5-- */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                Una vez concretado el pedido ¿Puedo cambiar el método de pago?
              </button>
            </h2>
            <div
              id="collapseFive"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                No, una vez confirmada la compra no es posible hacer un cambio
                del método de pago.
              </div>
            </div>
          </div>
          {/* --6-- */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSix"
                aria-expanded="false"
                aria-controls="collapseSix"
              >
                ¿Cómo puedo asegurarme de haber realizado bien mi compra?
              </button>
            </h2>
            <div
              id="collapseSix"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Una vez hecho tu pedido, recibirás un email de confirmación. Si
                no lo recibieras, ponte en contacto con nuestro departamento de
                atención al cliente, a traves de las vias de comunicacion
                disponibles.
              </div>
            </div>
          </div>
          {/* --7-- */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSeven"
                aria-expanded="false"
                aria-controls="collapseSeven"
              >
                ¿Puedo cancelar mi compra?
              </button>
            </h2>
            <div
              id="collapseSeven"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Sí. Podrás cancelar tu pedido, siempre y cuando el estado del
                mismo lo permita. Para ello, envianos un correo a
                PatitasFelices@gmail.com indicando el número/código de registro
                de compra de MERCADOPAGO y nosotros rechazaremos la compra
              </div>
            </div>
          </div>
          {/* --8-- */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseEight"
                aria-expanded="false"
                aria-controls="collapseEight"
              >
                ¿Cuál es el plazo para realizar un cambio?
              </button>
            </h2>
            <div
              id="collapseEight"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Podés solicitar un cambio hasta 15 días luego de realizada la
                compra presentando tu factura, el producto sin uso, en perfectas
                condiciones y su etiqueta correspondiente.
              </div>
            </div>
          </div>
          {/* --9-- */}
          {/* --10-- */}
        </div>
      </div>
    </div>
  );
};

export default Faq;
