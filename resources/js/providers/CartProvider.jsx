// HOC - hight order component (компонет высшего порядка - комонент, который в параметрах принимает другой компонент и возвращает новый компонент)

import { useEffect, useReducer } from "react";
import CartContext from "../contexts/CartContext";
import CartReducer from "../reducers/CartReducer";

const CartProvider = ({ children }) => { /* сюда принимаем компонент App, в свойстве children */

    const initialValues = { cart: (JSON.parse(localStorage.getItem('cart')) || []) };
    const [state, dispatch] = useReducer(CartReducer, initialValues);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(state.cart))
    }, [state]);

    const value = {
        cartItems: state.cart,
        addCartItem: (product) => {
            dispatch({ type: "addProduct", product });
        },
        removeCartItem: (id) => {
            dispatch({ type: "removeProduct", id });
        },
        incrementProduct: (id) => {
            dispatch({ type: "incrementProduct", id });
        },
        decrementProduct: (id) => {
            dispatch({ type: "decrementProduct", id });
        }

    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )

}

export default CartProvider;