import { useState } from "react";
import { ValidateUser } from "../../Validate/Validate";


const FormUser = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    celular: "",
    password: "",
    passwordConfirmation: "",
  })

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    celular: "",
    password: "",
    passwordConfirmation: "",
  });

  const handleSubmit = () => {
    return (
      <div>
        {data} {errors}
      </div>
    )
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    })
    const newErrors = ValidateUser({
      ...data,
      [name]: value,
    })
    setErrors(newErrors)
  };

  return (
    <div>
      <h1>Formulario ingreso Usuarios</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" onChange={handleChange} />
        {errors.name ? <p>{errors.name}</p> : null}
        <label htmlFor="email">email</label>
        <input type="text" name="email" onChange={handleChange} />
        {errors.email && <p>{errors.email}</p>}
        <label htmlFor="celular">celular</label>
        <input type="text" name="celular" onChange={handleChange} />
        {errors.celular && <p>{errors.celular}</p>}
        <label htmlFor="password">password</label>
        <input type="text" name="password" onChange={handleChange} />
        {errors.password && <p>{errors.password}</p>}
        <label htmlFor="passwordConfirmation">passwordConfirmation</label>
        <input type="text" name="passwordConfirmation" onChange={handleChange} />
        {errors.passwordConfirmation && <p>{errors.passwordConfirmation}</p>}

        <div>
          <button type="submit" 
            disabled={Object.values(errors).some((error) => error != "")}
          >
            Add User
          </button>
        </div>
      </form>
    </div>
  )
};

export default FormUser;