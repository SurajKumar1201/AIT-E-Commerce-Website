import { ACTION_TYPE } from "../types/ActionTypes";

export const addToCart= (product)=>{
    return{
        type:ACTION_TYPE.ADD_TO_CART,
        payload:product    
    }
}

export const removeFromCart= (id)=>{
    return{
        type:ACTION_TYPE.REMOVE_FROM_CART,
        payload:id      
    }
}

export const increment= (id)=>{
    return{
        type:ACTION_TYPE.INCREMENT,
        payload:id      
    }
}
export const decrement= (id)=>{
    return{
        type:ACTION_TYPE.DECREMENT,
        payload:id      
    }
}