import { useState } from "react";
import { useDispatch } from "react-redux";
import { usersCreate } from "../../redux/actions";
import { NavLink } from 'react-router-dom';
import { validateRegister } from "../../Validate";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Register = () => {
    const [data,setData] = useState({
        name:'',
        email: '',
        celular: '',
        password:'',
        passwordConfirmation: ''
    })

    const [errors, setErrors] = useState({
        name:'',
        email: '',
        celular: '',
        password: '',
        passwordConfirmation: ''
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setData({...data, [name]:value})
        const newErrors = validateRegister({
            ...data,
            [name]: value,
        });
            setErrors(newErrors);
        }
    

    const dispatch = useDispatch()
    const register = () => {
        dispatch(usersCreate(data))
    }
    
    return(
        <div>
            <form onSubmit={register} className="col-md-12">

                <h2>Crear nueva cuenta</h2>
                <div className="form-floating">
                    <input onChange={handleChange} type='text' name='name' value={data.name} className="form-control" id="floatingInput" placeholder="Nombre"/>
                    <label className="floatingInput">Nombre</label>
                </div>
                {errors.name ? <p>{errors.name}</p> : null}

                <div className="form-floating">
                    <input onChange={handleChange} type='email' name='email' value={data.email} className="form-control" id="floatingInput" placeholder="Correo electrónico"/>
                    <label className="floatingInput">Correo electrónico</label>
                </div>
                {errors.email ? <p>{errors.email}</p> : null}

                <div className="form-floating">
                    <input onChange={handleChange} type='text' name='celular' value={data.celular} className="form-control"  id="floatingInput" placeholder="Celular"/>
                    <label className="floatingInput">Celular</label>
                    {errors.celular ? <p>{errors.celular}</p> : null}
                </div>
                

                <div className="form-floating">
                    <input onChange={handleChange} type='password' name='password' value={data.password} className="form-control" id="floatingInput" placeholder="Contraseña"/>
                    <label className="floatingInput">Contraseña</label>
                    {errors.password ? <p>{errors.password}</p> : null}
                </div>

                <div className="form-floating">
                    <input onChange={handleChange} type='password' name='passwordConfirmation' className="form-control" id="floatingInput" placeholder="Confirmar contraseña"/>
                    <label className='form-label'>Confirmar contraseña</label>
                    {errors.passwordConfirmation ? <p>{errors.passwordConfirmation}</p> : null}
                </div>
                

                <NavLink to={'/home'}><button>Registrarme</button></NavLink>
            </form>
        </div>
    )
}

export default Register;