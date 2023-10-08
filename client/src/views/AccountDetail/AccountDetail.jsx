import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { validateAccountDetail } from "../../Validate";
import { setUser } from '../../redux/Actions/Users/usersActions'
import axios from "axios";
import { useDispatch } from "react-redux";

const AccountDetail = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const userData = useSelector(state=>state.userLogged)
  const { id, name, email, celular } = userData
  console.log(userData);

    const [userDetail, setUserDetail] = useState({
        name: '',
        email: '',
        celular: '',
        password: '',
      });
      const [errors, setErrors] = useState({
        name: '',
        celular: '',
        email: '',
        address: '',
        newPassword: '',
        passwordConfirmation: ''        
      });
    
      const [isEditing, setIsEditing] = useState(false);
      const [fieldEnabled, setFieldEnabled] = useState(false);
    
      const handFieldClick = () => {
        setFieldEnabled(true);
      };

      const handleChange = (event) => {
        const { name, value } = event.target;
        setUserDetail({
          ...userDetail,
          [name]: value,
        });
        const newErrors = validateAccountDetail({
          ...data,
          [name]: value,
        });
        setErrors(newErrors);
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
          axios.put(`https://pf-back-deploy.onrender.com/users/${id}`, userDetail)
          .then((response) => {
            console.log(response.data);
            dispatch(setUser({...userData, name:userDetail.name, email:userDetail.email, celular:userDetail.celular}))
            setIsEditing(false);
          })
          .catch((error) => {
            alert(error.response.data);
          });
        }

      const saveChanges = () => {
        // despachar action para guardar información en el back
        setIsEditing(false);
      };

    return (

      <div className="container d-flex justify-content-center align-items-center vh-100">
        <form className="w-75 mb-4">
          <fieldset disabled={!isEditing} onSubmit={handleSubmit} >
            <legend className="text-center mt-3">
              <strong>
                <ins>Detalles de mi cuenta</ins>
              </strong>
            </legend>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                <em> Nombre</em>
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={userDetail.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                <em> Correo electrónico</em>
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={userDetail.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="celular" className="form-label">
                <em> Celular</em>
              </label>
              <input
                type="text"
                className="form-control"
                name="celular"
                value={userDetail.celular}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                <em> Confirmar contraseña actual</em>
              </label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="newPassword" className="form-label">
                <em>Nueva contraseña</em>
              </label>
              <input
                type="password"
                className="form-control"
                name="newPassword"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="passwordConfirmation" className="form-label">
                <em>Confirmar nueva contraseña</em>
              </label>
              <input
                type="password"
                className="form-control"
                name="passwordConfirmation"
                onChange={handleChange}
              />
            </div>
          </fieldset>

          <div className="mt-1"> 
            {isEditing ? (
              <button
                type="button"
                className="btn btn-primary"
                onClick={saveChanges}
              >
                Guardar Cambios
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={() => setIsEditing(true)}
              >
                Editar
              </button>
            )}
          </div>

          <div className="mt-1"> {/* Agrega un margen superior aquí */}
            <button
              type="button"
              className="btn btn-outline-success"
              onClick={() => {
                navigate("/sales");
              }}
            >
              Mis compras
            </button>
          </div>

        </form>
      </div>
    )
};

export default AccountDetail;


            /* No se ha incorporado el dato dirección en el back, pdte para mostrar
            <div>
              <label for='name'>Dirección</label>
              <input type="text" name="address" value={userDetail.address} onChange={handleChange} disabled={!isEditing}>{userDetail.address}</input>
            </div> */