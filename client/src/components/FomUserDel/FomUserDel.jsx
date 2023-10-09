import { useState, useEffect } from "react";
import axios from "axios";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import style from "./FomProductDel.module.css";

const FormUserDel = ({ userEdit }) => {
  const [isValid, setIsValid] = useState(true);
  const activo = ["true", "false"];
  const [data, setData] = useState({
    name: "",
    email: "",
    celular: "",
    password: "",
    passwordConfirmation: "",
  });

  useEffect(() => {
    if (userEdit) {
      setData(userEdit);
    }
  }, [userEdit]);

  const [errors, setErrors] = useState({});

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(data);
    axios
      .put(`https://pf-back-deploy.onrender.com/users/${data.id}`, data)
      .then((res) => alert("Usuario actualizado exitosamente!"))
      .catch((error) => alert(error));

    // Limpia el formulario después de la actualización
    setData({
      name: "",
      email: "",
      celular: "",
      password: "",
      passwordConfirmation: "",
    });
  };

  const handleChange = (event) => {
    if (event.target.name === "active") {
      if (event.target.value === "true") {
        setData({ ...data, active: true });
      } else {
        setData({ ...data, active: false });
      }
    }

    console.log(event.target);
    console.log(data);
  };

  return (
    <div className="container">
      <div className="col">
        <h2 className="fw-bold text-center pt-4">Editar Usuario</h2>
        <form onSubmit={submitHandler}>
          <div className="mb-4 pt-4">
            <label htmlFor="name" className="form-label">
              Nombre Usuario
            </label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              className="form-control"
              value={data.name}
            />
            <div className="error-container">
              {errors.name ? (
                <p className={style["error-text"]}>{errors.name}</p>
              ) : (
                <p className={style["error-text"]}></p>
              )}
            </div>
          </div>

          <div className="mb-4 pt-4">
            <label htmlFor="active" className="form-label">
              Borrar
            </label>
            <select name="active" onChange={handleChange}>
              {activo.map((sel, index) => (
                <option key={index} value={sel}>
                  {sel}
                </option>
              ))}
            </select>
          </div>

          <div>
            <button
              type="submit"
              disabled={!isValid}
              className="btn btn-outline-primary w-100 my-1"
            >
              Editar Usuario
            </button>
            <h2></h2>
          </div>
        </form>
      </div>
    </div>
  );
};
export default FormUserDel;
