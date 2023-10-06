import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/ShoppingCartContext";



const Cart = () => {
    const [cart, setCart] = useContext(CartContext);
    

    const incrementAmount = (productId) => {
        const updatedCart = [...cart];
        updatedCart.forEach((product) => {
            if (product.id === productId) {
                product.quantity += 1;
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
        setCart(updatedCart)
    };
    
    const removeItem = (productId) => {
        const updatedCart = cart.filter((product) => product.id !== productId);
        setCart(updatedCart);
    };
    console.log(cart, 'el cart del cart');
    
    return (
        <div>
            <h2>Carrito de Compras</h2>
            <ul>
                {cart.map((product) => (
                    <li key={product.id}>
                        Producto: {product.name}, Cantidad: {product.quantity}
                        <button onClick={() => incrementAmount(product.id)}>+</button>
                        <button onClick={() => decrementAmount(product.id)}>-</button>
                        <button onClick={() => removeItem(product.id)}>Eliminar</button>

                    </li>
                ))}
            </ul>
            <p>Total: </p>
        </div>
    );

    
};

export default Cart;