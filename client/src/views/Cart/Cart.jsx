import { useContext } from "react";
import { CartContext } from "../../contexts/ShoppingCartContext";
import "./Cart.css";
import axios from "axios";


const Cart = () => {
  const [cart, setCart] = useContext(CartContext);

  const checkOut = async () => {
    await axios.post("http://localhost:3001/create-order", cart)
    .then(res => alert ("Tu pago fue realizado"))
    .catch(error => error.message);
  }


  return (
    <main className="contenedor">
  <div className="carrito">
    {cart.map((item) => (
      <div className="item" key={item.id}>
        <img src={item.image} alt={item.name} className="producto-imagen" />
        <div className="producto-detalle">
          <h2 className="producto-nombre">{item.name}</h2>
          <p className="producto-precio">Precio c/u: ${item.price}</p>
          <p className="producto-cantidad">Cantidad: {item.quantity}</p>
          <p className="producto-total">Total: ${item.price * item.quantity}</p>
        </div>
      </div>
    ))}
  </div>

        <button className="btn-pagar" onClick={checkOut}>Pagar Total</button>


</main>

  );
};

export default Cart;