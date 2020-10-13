import cart from "../../pages/cart";
import initialStore from "../initialStore";
import ADD_TO_CART from "../types";

export default function cartReducer(state=initialStore.cart, action){
    switch (action.type){
        case ADD_TO_CART:
{
    return state.concat(action.payload)
    
} 

    default:
    return state
}
}