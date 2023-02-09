import { useContext } from "react";
import CartContext from "../Context/CartContext";
import './cart.scss'

const CartItem = ({ item }) => {
  const { removeItem } = useContext(CartContext);
  return (
    <div className="cart-container">
        <div className="cart">
          <div>
            <img src={item.image}/>
          </div>
          <div>
             <h2>{item.itemName}</h2>
             <h4>{item.description}</h4>
             <p>${item.price}</p>
          </div>
        </div>
          <button onClick={()=> removeItem(item._id)}>Remove from Cart</button>
        </div>
  );
};

export default CartItem;