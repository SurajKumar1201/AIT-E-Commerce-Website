import { ACTION_TYPE } from "../types/ActionTypes"

const initialState = {
    productsData: [],
    cartData: JSON.parse(localStorage.getItem('cartData')) || [],
}

export const productReducer = (state = initialState, action) => {
    let updatedCartData;

    switch (action.type) {
        case ACTION_TYPE.ADD_TO_CART:
            const existingIndex = state.cartData.findIndex(item => item.id === action.payload.id)
            if (existingIndex >= 0) {
                updatedCartData = state.cartData.map((curEle, index) => (
                    index === existingIndex ? { ...curEle, quantity: curEle.quantity + 1 } : curEle
                ));
            } else {
                updatedCartData = [...state.cartData, { ...action.payload, quantity: 1 }];
            }
            localStorage.setItem('cartData', JSON.stringify(updatedCartData));
            return {
                ...state,
                cartData: updatedCartData
            };
        case ACTION_TYPE.REMOVE_FROM_CART:
            updatedCartData = state.cartData.filter(
                (cartItem) => cartItem.id !== action.payload
            );
            localStorage.setItem('cartData', JSON.stringify(updatedCartData));
            return {
                ...state,
                cartData: updatedCartData
            };
        case ACTION_TYPE.INCREMENT:
            updatedCartData = state.cartData.map(item =>
                item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
            );
            localStorage.setItem('cartData', JSON.stringify(updatedCartData));
            return {
                ...state,
                cartData: updatedCartData
            };
        case ACTION_TYPE.DECREMENT:
            updatedCartData = state.cartData.map((item) =>
                item.id === action.payload ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity } : item
            );
            localStorage.setItem('cartData', JSON.stringify(updatedCartData));
            return {
                ...state,
                cartData: updatedCartData
            };
        default:
            return state;
    }
}
