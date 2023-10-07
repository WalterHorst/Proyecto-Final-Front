import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { validateLogin } from "../../Validate";
import { createUserRole, getUserById, setUser } from "../../redux/Actions/Users/usersActions";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import jwtDecode from 'jwt-decode'
import style from './Login.module.css';
import imgGoogle from "../../assets/iconos/google.png";


// EXTRA: Recuperación de contraseña

const Login = ({ toggleComponent }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
    const newErrors = validateLogin({
      ...data,
      [name]: value,
    });
    setErrors(newErrors);
  };

  const disableByEmptyProps = () => {
    let disabledAux = true;
    if (data.email === "" || data.password === "") {
      disabledAux = true;
    } else {
      disabledAux = false;
    }
    return disabledAux;
  };


  //
  // EN HANDLE SUBMIT EN VEZ DE HACER UN DISPATCH CON EL ID DE USUARIO
  // USO LA ACCION setUser QUE CREE PARA USAR TODOS LOS DATOS QUE ME DEVUELVE EL BACK
  // ASÍ QUE LA DECODIFICACIÓN DEL TOKEN JWT YA NO HACE FALTA TENERLA EN EL LOGIN
  // NI EN EL REGISTRO

  const handleSubmit = (ev) => {
    ev.preventDefault();

    axios.post("https://pf-back-deploy.onrender.com/login", data)
      .then(usrRes => {

        const {id, email, name, rol, celular, token} = usrRes.data;
        // Setteamos el token
        sessionStorage.setItem("jwt_session", token);
        dispatch(createUserRole(rol));
        dispatch(setUser({id, email, name, rol, celular}));

        navigate("/");
    
      })
      .catch(error => {
        console.log(error);
        alert(error.response.data.error)
      })
  };


  const login = async () => {
    try
    {
      // 
      // PEDIMOS AL BACK UNA URL DE GOOGLE
      //
      // ESTA URL ES EL FAMOSO POPUP QUE APARECE SIEMPRE QUE HACEMOS LOGIN CON GOOGLE
      //

      const {auth_url} = (await axios.post("https://pf-back-deploy.onrender.com/login-google-init")).data

      //
      // USANDO LA URL PROVISTA ABRIMOS UNA VENTANA QUE PIDE ESCOGER LA CUENTA DE MAIL
      // CON LA QUE VAMOS A HACER LOGIN
      //
      window.open(auth_url, "_self");
    }
    catch(error)
    {
      alert("Fallo al iniciar la autenticación con Google");
    }
  
  }

  

  return (
    <div className="container">
      <div className="col">
        <h2 className="fw-bold text-center pt-4">¡Te damos la bienvenida!</h2>
        <h5 className="text-center">Inicio de sesión</h5>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 pt-4">
            <label htmlFor="emailInput" className="form-label">
              <strong>Correo electrónico</strong>{" "}
            </label>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              id="emailInput"
              placeholder="ejemplo@correo.com"
              value={data.email}
              className="form-control"
            />
            <div className="error-container">
              {errors.email ? (
                <p className={style["error-text"]}>{errors.email}</p>
              ) : (
                <p className={style["error-text"]}></p>
              )}
            </div>
          </div>

          <div className="mb-5">
            <label htmlFor="passwordInput" className="form-label">
              {" "}
              <strong>Contraseña</strong>{" "}
            </label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              className="form-control"
              id="passwordInput"
              placeholder="Ingresa tu contraseña"
              value={data.password}
            />
            <div className="error-container">
              {errors.password ? (
                <p className={style["error-text"]}>{errors.password}</p>
              ) : (
                <p className={style["error-text"]}></p>
              )}
            </div>
          </div>

          <div className="d-grid">
            <button
              type="submit"
              disabled={disableByEmptyProps()}
              className="btn btn-primary"
            >
              {" "}
              Iniciar sesión{" "}
            </button>
          </div>
        </form>

        <div className="container w-100 mt-3 pb-5 text-center">
          <div className="row">
            <div className="col d-flex justify-content-center align-items-center">
              <a
                href="#"
                onClick={() => login()}
                className="btn-outline-primary w-100 my-1 btn-lg align-items-center text-center"  style={{ marginBottom: "20px" }}
              >
                <div className="row align-items-center">
                  <div className="col-10">
                    {" "}
                    <img
                      src={imgGoogle}
                      width="18"
                      alt="Google"
                      className="no-margin align-items-center"
                    />{" "}
                    Iniciar sesión con Google{" "}
                  </div>
                 
                </div>
                
              </a>
            </div>
            <div className="row">
              <p>¿Aún no tienes una cuenta?<a
                onClick={toggleComponent}
                className="btn-outline-primary custom-button-height w-100 my-1 btn-lg"
                style={{ cursor: "pointer" }}
              >
                {" "}
                Regístrate aquí{" "}
              </a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;