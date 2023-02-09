export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const REMOVE_ALL_ITEM = "REMOVE_ALL_ITEM";

const CartReducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        cartItems: [...state.cartItems, action.payload],
      };
    }
    case REMOVE_ITEM: {
      return {
        cartItems: state.cartItems.filter((item) => 
          item._id !== action.payload)
      };
    }
   case REMOVE_ALL_ITEM: {
        return {
          cartItems: []
      };  
   }  
    

    default:
      return state;
  }
};

export default CartReducer;