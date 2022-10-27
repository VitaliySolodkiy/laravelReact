const CartReducer = (state, action) => {

    switch (action.type) {

        case 'addProduct':
            const findProduct = state.cart.find(item => item.id === action.product.id);
            if (findProduct) {
                findProduct.amount += Number(action.product.amount);
                const products = state.cart.filter(item => item.id !== findProduct.id);
                return {
                    cart: [
                        ...products,
                        findProduct
                    ]
                }
            }
            return {
                cart: [
                    ...state.cart,
                    action.product
                ]

            }
        case 'removeProduct':
            return { cart: state.cart.filter(item => item.id !== action.id) };

        case 'incrementProduct':
            return {
                cart: state.cart.map(item => {
                    if (item.id === action.id) {
                        item.amount += 1;
                        return item;
                    }
                    return item;
                })
            }

        case 'decrementProduct':
            return {
                cart: state.cart.map(item => {
                    if (item.id === action.id) {
                        item.amount > 1 ? item.amount -= 1 : '';
                        return item;
                    }
                    return item;
                })
            }

        default:
            return state.cart
    }
}

export default CartReducer;