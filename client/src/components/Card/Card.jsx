import { Link } from "react-router-dom";
import style from "./card.module.css";
import { useContext, useEffect } from "react";
import { CartContext } from "../../contexts/ShoppingCartContext";


const Card = ({ id, image, name, price, brand, category, description, active, stock }) => {

  const [cart, setCart] = useContext(CartContext);
  
  const addToCart = (product) => {
    setCart((currItems) => {
      const isItemsFound = currItems.find((item) => item.id === id);
      if (isItemsFound) {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        return [...currItems, { id, quantity: 1, price, name, image, brand, category, description, active, stock }];
      }
    });
  };

  const removeItem = (id) => {
    setCart((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1, name, price, image, brand, category, description, active, stock };
          } else {
            return item;
          }
        });
      }
    });
  };

  return (
    <div className={`card ${style.customCard} mx-auto`} style={{ width: "18rem" }}>
      <i className={`bi bi-balloon-heart ${style.heart}`}></i>
      <img src={image} className={`card-img-top ${style.cardImage}`} alt={name} />
      <div className={`card-body ${style.customCardBody}`}>
        <div className={`text-center mb-3 ${style.nameAndPrice}`}>
          <h5 className={`card-title ${style.customCardTitle}`}>{name}</h5>
          <p className={`card-text ${style.customCardText}`}> <strong> Precio: $ {price}</strong></p>
        </div>
        <div className={`text-center ${style.centeredButton}`}>
          <Link to={`/detail/${id}`}>
            <button className={`btn ${style.cardButton}`}>
              <ins>Más info</ins>
            </button>
          </Link>
        </div>
        <button className={style["btn"]} onClick={addToCart}>
          Agregar al Carrito
        </button>
        <button onClick={() => removeItem(id)} className={style["btn"]}>
        Remover del Carrito
      </button>
      </div>
    </div>
  );
};

export default Card;


