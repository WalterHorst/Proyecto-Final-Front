import "./Error.css";

const Error = () => {
  return (
    <div className="error-container">
      <img
        src="https://thumbs.dreamstime.com/b/funny-technical-difficulties-message-273258049.jpg"
        alt="Mascota triste"
        className="error-image"
      />
      <h1 className="error-title">¡Oops! Algo salió mal.</h1>
      <p className="error-message">
        Parece que nuestros amigos peludos se han metido en un lío.
      </p>
      <p className="error-message">
        Por favor, inténtalo de nuevo más tarde o regresa a la página de inicio.
      </p>
    </div>
  );
};

export default Error;
