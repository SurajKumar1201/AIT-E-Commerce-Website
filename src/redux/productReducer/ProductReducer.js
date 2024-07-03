import { ACTION_TYPE } from "../types/ActionTypes"

const initialState = {
    productsData: [],
    cartData: []
}


export const productReducer = (state = initialState, action) => {
    

    switch (action.type) {
        case ACTION_TYPE.ADD_TO_CART:
            const existingIndex = state.cartData.findIndex(item => item.id === action.payload.id)
            if (existingIndex >= 0) {
                const updateData = state.cartData.map((curEle, index) => (
                    index === existingIndex ? { ...curEle, quantity: curEle.quantity + 1 } : (curEle)

                ));
                return {
                    ...state, cartData: updateData
                };
            }
            else
                return {

                    ...state, cartData: [...state.cartData, { ...action.payload, quantity: 1 }]
                }
        case ACTION_TYPE.REMOVE_FROM_CART:
            const filterProduct = state.cartData.filter(
                (cartItem) => (cartItem.id !== action.payload))
            return {
                ...state, cartData: filterProduct

            }
        case ACTION_TYPE.INCREMENT:
            const inc = state.cartData.map(item =>
                item.id == action.payload ? { ...item, quantity: item.quantity + 1 } : item
            )
            return {
                ...state,
                cartData: inc

            }

        case ACTION_TYPE.DECREMENT:
            const dec = state.cartData.map((item) =>
                item.id === action.payload ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity } : item
            )
            return {
                ...state,
                cartData: dec

            }
        default:
            return state

    }
}
