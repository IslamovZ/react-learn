import ADD_TO_CART from "../types"

const addToCart = (item) => {
return {
type: ADD_TO_CART,
payload: item
}
}

export default addToCart