import { useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
import {ADD_TO_CART,REMOVE_ITEM, REMOVE_ALL_ITEM} from "./CartReducer"
const CartState = ({ children }) => {
  const initalState = {
    cartItems: []
  };

  const [state, dispatch] = useReducer(CartReducer, initalState);

  const addToCart = (item) => {
    dispatch({ type: ADD_TO_CART, payload: item });
  };
  const removeItem = (id) => {
  
  dispatch({ type: REMOVE_ITEM, payload: id});
  };

  const removeAllCart = () => {
    dispatch({ type: REMOVE_ALL_ITEM});
  };

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
        addToCart,
        removeItem,
        removeAllCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;