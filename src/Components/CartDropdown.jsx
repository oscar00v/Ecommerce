import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './CartDropdown.scss';

function CartDropdown() {
  const { cartItems, removeFromCart, updateQuantity, calculateTotal } = useContext(CartContext);

  return (
    <div className="cart-dropdown">
      <h3>Carrito de Compras</h3>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} className="cart-item">
              <img src={item.image} alt={item.product_name} />
              <div>
                <h4>{item.product_name}</h4>
                <p>Precio: ${item.price}</p>
                <div>
                  <label>Cantidad:</label>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                  />
                </div>
                <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className="cart-total">
        <h4>Total: ${calculateTotal()}</h4>
      </div>
    </div>
  );
}

export default CartDropdown;
