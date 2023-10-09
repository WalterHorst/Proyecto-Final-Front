import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ValidateProduct } from "../../Validate/Validate";
import { getCategories } from "../../redux/Actions/Products/productsActions";
import axios from "axios";
import style from "./FomProductEdit.module.css";

import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const FormProductEdit = ({ productEdit }) => {
const dispatch = useDispatch();

const [isValid, setIsValid] = useState(false);

useEffect(() => {
dispatch(getCategories());
}, []);

const categories = useSelector((state) => state.categories);

const [data, setData] = useState({
name: "",
image: "",
brand: "",
category: "",
description: "",
price: "",
stock: "",
active: "",
});

useEffect(() => {
if (productEdit) {
console.log(productEdit);
setData((prevData) => ({
...prevData,
name: productEdit.name || "",
image: productEdit.image || "",
brand: productEdit.brand || "",
category: productEdit.category || "",
description: productEdit.detail || "",
price: productEdit.price || "",
stock: productEdit.stock || "",
active: productEdit.active || "",
}));
}
}, [productEdit]);

const [errors, setErrors] = useState({
name: "Ingrese nombre menor a 20 caracteres",
brand: "Ingrese marca menor a 20 caracteres",
category: "Seleccione una categoria",
description: "Ingrese detalle de producto mayor a 10 caracteres",
price: "Ingrese precio",
stock: "Stock debe ser un número",
});

const handleImageUpload = async (e) => {
const file = e.target.files[0];

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "pf-image");

    const response = await fetch(
      "https://api.cloudinary.com/v1_1/ddygbuhvi/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );

    if (response.ok) {
      const imageUrl = await response.json();

      // Update the data state in a callback to ensure it's updated before calling isFormValid
      setData((prevData) => ({
        ...prevData,
        image: imageUrl.url,
      }));

      // Call isFormValid after the state has been updated
      isFormValid();
    } else {
      console.error("Error al cargar la imagen a Cloudinary");
    }

};

const submitHandler = (event) => {
event.preventDefault();
console.log("en el handeler " + data);
axios
.put(`https://pf-back-deploy.onrender.com/product/${data.id}`, data)
.then((res) => alert("Producto actualizado exitosamente!"))
.catch((error) => console.error(error));

    setData({
      name: "",
      image: "",
      brand: "",
      category: "",
      description: "",
      price: "",
      stock: "",
      active: "",
    });

};

// const handleChange = (event) => {
// console.log("En handlecahnge: " + data);
// const { name, value } = event.target;
// setData({
// ...data,
// [name]: value,
// });

const handleChange = (event) => {
const { name, value } = event.target;
setData((prevData) => ({
...prevData,
[name]: value,
}));

    const newErrors = ValidateProduct({
      ...data,
      [name]: value,
    });
    setErrors(newErrors);
    isFormValid();

};

// La función isFormValid verifica si no hay mensajes de error en el estado `errors`.
const isFormValid = () => {
setIsValid(Object.values(errors).every((error) => error === ""));
};

return (
<div className="container">
<div className="col">
{/_ <h2 className='fw-bold text-center pt-4'>Crear nuevo producto</h2> _/}
<form onSubmit={submitHandler}>
<div className="mb-4 pt-4">
<label htmlFor="name" className="form-label">
Nombre producto
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
            <label htmlFor="brand" className="form-label">
              Marca
            </label>
            <input
              type="text"
              name="brand"
              onChange={handleChange}
              className="form-control"
              value={data.brand}
            />
            <div className="error-container">
              {errors.brand ? (
                <p className={style["error-text"]}>{errors.brand}</p>
              ) : (
                <p className={style["error-text"]}></p>
              )}
            </div>
          </div>

          <div className="mb-4 pt-4">
            <label
              htmlFor="category"
              className="form-label"
              value={data.category}
            >
              Categoria
            </label>
            {/* PENDIENTE APLICAR ESTILOS DE BOOTSTRAP A LA LISTA DESPLEGABLE*/}
            <select name="category" onChange={handleChange}>
              {categories.map((category) => (
                <option key={category.id} value={category.name}>
                  {" "}
                  {category.name}{" "}
                </option>
              ))}
            </select>
            <div className="error-container">
              {errors.category ? (
                <p className={style["error-text"]}>{errors.category}</p>
              ) : (
                <p className={style["error-text"]}></p>
              )}
            </div>
          </div>

          <div className="mb-4 pt-4">
            <label htmlFor="description" className="form-label">
              Descripción
            </label>
            <input
              type="text"
              name="description"
              onChange={handleChange}
              className="form-control"
              value={data.description}
            />
            <div className="error-container">
              {errors.description ? (
                <p className={style["error-text"]}>{errors.description}</p>
              ) : (
                <p className={style["error-text"]}></p>
              )}
            </div>
          </div>

          <div className="mb-4 pt-4">
            <label htmlFor="price" className="form-label">
              Precio
            </label>
            <input
              type="text"
              name="price"
              onChange={handleChange}
              className="form-control"
              value={data.price}
            />
            <div className="error-container">
              {errors.price ? (
                <p className={style["error-text"]}>{errors.price}</p>
              ) : (
                <p className={style["error-text"]}></p>
              )}
            </div>
          </div>

          <div className="mb-4 pt-4">
            <label htmlFor="stock" className="form-label">
              Stock / Inventario
            </label>
            <input
              type="text"
              name="stock"
              onChange={handleChange}
              className="form-control"
              value={data.stock}
            />
            <div className="error-container">
              {errors.stock ? (
                <p className={style["error-text"]}>{errors.stock}</p>
              ) : (
                <p className={style["error-text"]}></p>
              )}
            </div>
          </div>

          <div className="mb-4 pt-4">
            {/* PENDIENTE APLICAR ESTILOS DE BOOTSTRAP*/}
            <label htmlFor="image" className="form-label">
              Imagen
            </label>
            <input
              type="file"
              name="image"
              onChange={handleImageUpload}
              className="form-control"
            />
            {data.image && (
              <img src={data.image} alt={data.name} className="imagePreview" />
            )}
          </div>

          <div>
            <button
              type="submit"
              disabled={!isValid}
              className="btn btn-outline-primary w-100 my-1"
            >
              Editar
            </button>
            <button className="btn btn-outline-primary w-100 my-1">
              Cancelar
            </button>
            <h2></h2>
          </div>
        </form>
      </div>
    </div>

);
};
export default FormProductEdit;
