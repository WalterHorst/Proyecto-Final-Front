import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CartContext } from "../../contexts/ShoppingCartContext";
import style from "./Cart.module.css";
import axios from "axios";

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);

  const User = useSelector((state) => state.userLogged[0]);
  console.log(User);

  useEffect(() => {
    // Calcular el precio total de todos los productos en el carrito
    const newTotalPrice = cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    setTotalPrice(newTotalPrice); // Actualizar el estado
  }, [cart]);

  const incrementAmount = (productId) => {
    const updatedCart = [...cart];
    updatedCart.forEach((product) => {
      if (product.id === productId && product.quantity < product.stock) {
        product.quantity += 1;
      } else if (
        product.id === productId &&
        product.quantity === product.stock
      ) {
        window.alert("No hay suficiente stock");
      }
    });
    setCart(updatedCart);
  };

  const decrementAmount = (productId) => {
    const updatedCart = [...cart];
    updatedCart.forEach((product) => {
      if (product.id === productId && product.quantity > 1) {
        product.quantity -= 1;
      }
    });
    setCart(updatedCart);
  };

  const removeItem = (productId) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
  };

  const checkOut = async () => {
    const { data } = await axios.post(
      "https://pf-back-deploy.onrender.com/create-order",
      cart
    );
    const initPoint = await data.body.init_point;
    await cart.map(async (item) => {
      let itemSale = {
        iduser: User.id,
        idproduct: item.id,
        quantity: item.quantity,
      };
      await axios.post("https://pf-back-deploy.onrender.com/sale", itemSale);
    });

    window.location.href = initPoint;
    localStorage.clear();
  };

  return cart.length !== 0 ? (
    <main className={style.contenedor}>
      <div className="carrito">
        {cart.map((item) => (
          <div className={style.contenedor} key={item.id}>
            <img
              src={item.image}
              alt={item.name}
              className={style.producto_imagen}
            />
            <div className={style.producto_detalle}>
              <h2 className={style.producto_nombre}>{item.name}</h2>
              <p className={style.producto_precio}>Precio c/u: ${item.price}</p>
              <p className="producto-cantidad">Cantidad: {item.quantity}</p>
              <button onClick={() => decrementAmount(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => incrementAmount(item.id)}>+</button>
              <button onClick={() => removeItem(item.id)}>Eliminar</button>
              <p className="producto-total">
                Total: ${item.price * item.quantity}
              </p>
            </div>
          </div>
        ))}
      </div>

      <button className="btn-pagar" onClick={checkOut}>
        Pagar Total (${totalPrice})
      </button>
    </main>
  ) : (
    <div className="carrito-vacio">
      <p>Oops, tu carrito está vacío</p>
    </div>
  );
};

export default Cart;
