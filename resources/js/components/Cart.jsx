import React, { useContext } from 'react';
import CartContext from '../contexts/CartContext';

const Cart = () => {
    const { cartItems, removeCartItem, incrementProduct, decrementProduct } = useContext(CartContext);
    return (
        <div>
            {cartItems.map(item => (
                <div key={item.id} className="cart-item" >
                    <div>
                        <img src={item.image} alt={item.image} />
                    </div>
                    <div>{item.name}</div>
                    <div className='controls dec' onClick={() => decrementProduct(item.id)}>–</div>
                    <div>{item.amount}</div>
                    <div className='controls inc' onClick={() => incrementProduct(item.id)}>+</div>

                    <div>{item.price * item.amount}</div>
                    <div ><button onClick={() => removeCartItem(item.id)}>X</button></div>
                </div>
            ))}
        </div>
    );
}

export default Cart;
