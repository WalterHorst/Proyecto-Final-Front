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
      <div>
        <h2>Detalles de mi cuenta</h2>
        <h4>Información personal</h4>
        {!isEditing && (<button onClick={() => setIsEditing(true)}>Editar Información</button>)}
        <form id="personalInformation" onSubmit={handleSubmit}>
          {isEditing && (<button type="submit" >Guardar Cambios</button>)}
          <div>
            <label htmlFor='name'>Nombre</label>
            <input type="text" name="name" value={userDetail.name} onChange={handleChange} disabled={!isEditing}/>
            {errors.name ? <p>{errors.name}</p> : <p></p>}
          </div>
          <div>
            <label htmlFor='email'>Correo electrónico</label>
            <input type="email" name="email" value={userDetail.email} onChange={handleChange} disabled={!isEditing}/>
            {errors.email ? <p>{errors.email}</p> : <p></p>}
          </div>
          <div>
            <label htmlFor='celular'>Celular</label>
            <input type="text" name="celular" value={userDetail.celular} onChange={handleChange} disabled={!isEditing}/>
            {errors.celular ? <p>{errors.celular}</p> : <p></p>}
          </div>
          {/* 
          <div>
            <label for='name'>Dirección</label>
            <input type="text" name="address" value={userDetail.address} onChange={handleChange} disabled={!isEditing}/>
            {errors.address ? <p>{errors.address}</p> : <p></p>}
          </div> 
          */}
        </form>
        <button onClick={() => {navigate('/sales')}}>
          Mis compras
        </button>
        {/* 
        <div>
        <h4>Cambiar contraseña</h4>
        <form id="passwordConfirmation" onSubmit={handleSubmit}>
          <button type="submit"> Actualizar contraseña </button>
          <div>
            <label htmlFor='newPassword'>Asignar nueva contraseña</label>
            <input type="password" name="newPassword" onChange={handleChange} disabled={!fieldEnabled} onClick={handFieldClick}/>
            {errors.newPassword ? <p>{errors.newPassword}</p> : <p></p>}
          </div>
          <div>
            <label htmlFor='passwordConfirmation'>Confirmar contraseña</label>
            <input type="password" name="passwordConfirmation" value={userDetail.password}  onChange={handleChange} disabled={!fieldEnabled} onClick={handFieldClick}/>
            {errors.passwordConfirmation ? <p>{errors.passwordConfirmation}</p> : <p></p>}
          </div>
        </form>

        </div> 
        */}
      </div> 
    )
};

export default AccountDetail;