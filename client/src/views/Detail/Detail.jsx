import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import style from "./Detail.module.css";
import { CartContext } from "../../contexts/ShoppingCartContext";

const Detail = () => {
  const { id } = useParams();
  const [productId, SetproductId] = useState({});
  const [quantity, setQuantity] = useState(1); // Estado para la cantidad
  const [cart, setCart] = useContext(CartContext); // Obtener el contexto del carrito

  useEffect(() => {
    axios
      .get(`https://pf-back-deploy.onrender.com/product/${id}`)
      .then(({ data }) => {
        SetproductId(data);
      })
      .catch((error) => {
        alert("Error al obtener los detalles del producto:", error);
      });
  }, [id]);

  // Función para aumentar la cantidad
  const addToCart = () => {
    setCart((currItems) => {
      const isItemsFound = currItems.find((item) => item.id === productId.id);
      if (isItemsFound) {
        return currItems.map((item) => {
          if (item.id === productId.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        return [
          ...currItems,
          {
            id: productId.id,
            quantity: 1,
            price: productId.price,
            name: productId.name,
            image: productId.image,
            brand: productId.brand,
            category: productId.category,
            active: productId.active,
            description: productId.description,
            stock: productId.stock,
          },
        ];
      }
    });
  };

  const removeItem = (value) => {
    setCart((currItems) => {
      return currItems
        .map((item) => {
          if (item.id === value) {
            if (item.quantity > 0) {
              return {
                ...item,
                quantity: item.quantity - 1,
                name: productId.name,
                image: productId.image,
                brand: productId.brand,
                category: productId.category,
                active: productId.active,
                description: productId.description,
                stock: productId.stock,
              };
            }
          }
          return item;
        })
        .filter((item) => item.quantity > 0);
    });
  };

  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-4">
          <img
            className="product-image img-fluid d-none d-md-block"
            src={productId.image}
            alt={productId.id}
          />
        </div>
        <div className="col-md-8">
          <div className="cardDetail">
            <h1 className="product-name">{productId.name}</h1>
            <h3 className="product-brand">{productId.brand}</h3>
            <h3 className="product-category">{productId.category}</h3>
            <h3 className="product-description">{productId.description}</h3>
            <h3 className="product-price">
              <strong>Precio: $ {productId.price}</strong>
            </h3>

            <div className="product-cart">
              <button
                onClick={() => addToCart()}
                className={`btn ${style.btn}`}
              >
                Agregar al carrito
              </button>
              <button
                className={`btn ${style.btn}`}
                onClick={() => removeItem(productId.id)}
              >
                Remover del Carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
