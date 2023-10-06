import style from "./Privacy.module.css";

const Privacy = () => {
  return (
    <div className={`container text-center ${style.containerPrivacy}`}>
      <div className="row m-2 d-flex flex-column">
        <h2 className="mt-3 text-center text-uppercase">
          Política de Privacidad
        </h2>
        <p className="fst-italic">
          El presente Política de Privacidad establece los términos en que
          Patitas Felices usa y protege la información que es proporcionada por
          sus usuarios al momento de utilizar su sitio web. Esta compañía está
          comprometida con la seguridad de los datos de sus usuarios. Cuando le
          pedimos llenar los campos de información personal con la cual usted
          pueda ser identificado, lo hacemos asegurando que sólo se empleará de
          acuerdo con los términos de este documento. Sin embargo esta Política
          de Privacidad puede cambiar con el tiempo o ser actualizada por lo que
          le recomendamos y enfatizamos revisar continuamente esta página para
          asegurarse que está de acuerdo con dichos cambios.
        </p>
        <h5 className="row m-2 d-flex flex-column">
          Información que es recogida
        </h5>
        <p className="fst-italic">
          Nuestro sitio web podrá recoger información personal por ejemplo:
          Nombre, información de contacto como su dirección de correo
          electrónica e información demográfica. Así mismo cuando sea necesario
          podrá ser requerida información específica para procesar algún pedido
          o realizar una entrega o facturación.
        </p>
        <h5 className="row m-2 d-flex flex-column">
          Uso de la información recogida
        </h5>
        <p className="fst-italic">
          Nuestro sitio web emplea la información con el fin de proporcionar el
          mejor servicio posible, particularmente para mantener un registro de
          usuarios, de pedidos en caso que aplique, y mejorar nuestros productos
          y servicios. Es posible que sean enviados correos electrónicos
          periódicamente a través de nuestro sitio con ofertas especiales,
          nuevos productos y otra información publicitaria que consideremos
          relevante para usted o que pueda brindarle algún beneficio, estos
          correos electrónicos serán enviados a la dirección que usted
          proporcione y podrán ser cancelados en cualquier momento. Patitas
          Felices está altamente comprometido para cumplir con el compromiso de
          mantener su información segura. Usamos los sistemas más avanzados y
          los actualizamos constantemente para asegurarnos que no exista ningún
          acceso no autorizado.
        </p>
        <h5 className="row m-2 d-flex flex-column">
          Control de su información personal
        </h5>
        <p className="fst-italic">
          En cualquier momento usted puede restringir la recopilación o el uso
          de la información personal que es proporcionada a nuestro sitio web.
          Cada vez que se le solicite rellenar un formulario, como el de alta de
          usuario, puede marcar o desmarcar la opción de recibir información por
          correo electrónico. En caso de que haya marcado la opción de recibir
          nuestro boletín o publicidad usted puede cancelarla en cualquier
          momento. Esta compañía no venderá, cederá ni distribuirá la
          información personal que es recopilada sin su consentimiento, salvo
          que sea requerido por un juez con un orden judicial. Patitas Felices Se
          reserva el derecho de cambiar los términos de la presente Política de
          Privacidad en cualquier momento.
        </p>
      </div>
    </div>
  )
};

export default Privacy;