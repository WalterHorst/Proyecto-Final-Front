import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { validateRegister } from "../../Validate";
import { createUserRole } from "../../redux/Actions/Users/usersActions";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import style from './Register.module.css';

const Register = ({ toggleComponent }) => {
    const navigate = useNavigate();

    const [data,setData] = useState({
        name:'',
        email: '',
        celular: '',
        password:'',
        passwordConfirmation: ''
    });

    const [errors, setErrors] = useState({
        name:'',
        email: '',
        celular: '',
        password: '',
        passwordConfirmation: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target
        setData({...data, [name]:value})
        const newErrors = validateRegister({
            ...data,
            [name]: value,
        })
            setErrors(newErrors)
    };


    const dispatch = useDispatch()
    const register = (ev) => {
        ev.preventDefault();

        axios.post("https://pf-back-deploy.onrender.com/users", data)
            .then(res => {
                const {rol, token} = res.data
                sessionStorage.setItem("jwt_session", token)
                dispatch(createUserRole(rol));
                navigate("/")
            })
            .catch(error => alert(error.response.data.error))
    };
    
    return(
        <div className="container">
            <h3 className='fw-bold text-center pt-3'>Crear nueva cuenta</h3>
            <form onSubmit={register} className="col">

                <div className="mb-4 pt-1">
                    <label className="form-label">Nombre</label>
                    <input onChange={handleChange} type='text' name='name' value={data.name} placeholder="Ingresa tu nombre" className="form-control"/>
                    {errors.name ? <p className={style["error-text"]}>{errors.name}</p> : <p className={style["error-text"]}></p>}
                </div>

                <div className="mb-4 pt-1">
                    <label className="form-label">Correo electrónico</label>
                    <input onChange={handleChange} type='email' name='email' value={data.email} placeholder="ejemplo@correo.com" className="form-control"/>
                    {errors.email ? <p className={style["error-text"]}>{errors.email}</p> : <p className={style["error-text"]}></p>}
                </div>

                <div className="mb-4 pt-1">
                    <label className="form-label">Celular</label>
                    <input onChange={handleChange} type='text' name='celular' value={data.celular} placeholder="Ingresa un número de 11 dígitos" className="form-control"/>
                    {errors.celular ? <p className={style["error-text"]}>{errors.celular}</p> : <p className={style["error-text"]}></p>}
                </div>
                
                <div className="mb-4 pt-1">
                    <label className="form-label">Contraseña</label>
                    <input onChange={handleChange} type='password' name='password' value={data.password} placeholder="Contraseña" className="form-control"/>
                    {errors.password ? <p className={style["error-text"]}>{errors.password}</p> : <p className={style["error-text"]}></p>}
                </div>

                <div className="mb-4 pt-1">
                    <label className='form-label'>Confirmar contraseña</label>
                    <input onChange={handleChange} type='password' name='passwordConfirmation' placeholder="Ingresa nuevamente tu contraseña"  className="form-control"/>
                    {errors.passwordConfirmation ? <p className={style["error-text"]}>{errors.passwordConfirmation}</p> : <p className={style["error-text"]}></p>}
                </div>                

                <div className="container w-100 py-2">
                    <div className='row'>
                        <div className="col">
                        <button type="submit" className='btn btn-outline-primary w-100 my-1'>Registrarme</button>
                        </div>

                        <div className="col">
                            <button onClick={toggleComponent}  className='btn btn-outline-primary custom-button-height w-100 my-1'>Ya tengo una cuenta creada</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
};

export default Register;