import { useContext } from "react";
import CartContext from "../Context/CartContext";
import CartItem from "./CartItem";

const Cart = () => {
  const {cartItems} = useContext(CartContext);
  
  return (
    <div>
      {
        <div>
            { 
              cartItems.length === 0 ? (<h4>Cart is Empty</h4>) : 
                (
                  <div>
                    {cartItems.map((item) => (
                      <CartItem key={item.id} item={item} />
                    ))}
                  </div>
                )
            }
          <div>Cart Total</div>
          <div>
            $ {cartItems.reduce((amount, item) => item.price + amount, 0)}
            
          </div>
        </div>
      }
    </div>
  );
};

export default Cart;