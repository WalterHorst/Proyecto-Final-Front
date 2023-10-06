import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AccountDetail = () => {
  const navigate = useNavigate();
  const userData = useSelector(state=>state.userLogged)
  console.log(userData);

    const [userDetail, setUserDetail] = useState({
        name: '',
        email: '',
        celular: '',
        password: '',
      });
    
      const [isEditing, setIsEditing] = useState(false);
  
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setUserDetail({
          ...userDetail,
          [name]: value,
        });
      };
    
      const saveChanges = () => {
        // despachar action para guardar información en el back
        setIsEditing(false);
      };

    return (
        <div>
          <h2>Detalles de mi cuenta</h2>
          <form>
            <div>
              <label htmlFor='name'>Nombre</label>
              <input type="text" name="name" value={userDetail.name} onChange={handleChange} disabled={!isEditing}></input>
            </div>

            <div>
              <label htmlFor='email'>Correo electrónico</label>
              <input type="email" name="email" value={userDetail.email} onChange={handleChange} disabled={!isEditing}></input>
            </div>

            <div>
              <label htmlFor='celular'>Celular</label>
              <input type="text" name="celular" value={userDetail.celular} onChange={handleChange} disabled={!isEditing}></input>
            </div>

            <div>
              <label htmlFor='password'>Confirmar contraseña actual</label>
              <input type="password" name="password" onChange={handleChange} disabled={!isEditing}/>
            </div>

            <div>
              <label htmlFor='newPassword'>Nueva contraseña</label>
              <input type="password" name="newPassword" onChange={handleChange} disabled={!isEditing}/>
            </div>

            <div>
              <label htmlFor='passwordConfirmation'>Confirmar nueva contraseña</label>
              <input type="password" name="passwordConfirmation" onChange={handleChange} disabled={!isEditing}/>
            </div>


          </form>

          {isEditing 
          ? ( <button onClick={saveChanges}>Guardar Cambios</button> ) 
          : ( <button onClick={() => setIsEditing(true)}>Editar</button> )
          }
          <button onClick={() => {navigate('/sales')}}>
            Mis compras
          </button>
        </div>
      );
}

export default AccountDetail;


            /* No se ha incorporado el dato dirección en el back, pdte para mostrar
            <div>
              <label for='name'>Dirección</label>
              <input type="text" name="address" value={userDetail.address} onChange={handleChange} disabled={!isEditing}>{userDetail.address}</input>
            </div> */