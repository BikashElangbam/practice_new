import React from "react";
import './products.scss';
import { useContext } from "react";
import CartContext from "../Context/CartContext";

const ProductDetails = ({product})=>{
    const { addToCart } = useContext(CartContext);
    return(
        <div className="product-container">
            <div className="product">
                <div>
                    <img src={product.image}/>
                </div>
                <div>
                    <h2>{product.itemName}</h2>
                    <h4>{product.description}</h4>
                    <p>${product.price}</p>
                </div>
            </div>
            <button onClick={()=> addToCart(product)}>Add to Cart</button>
        </div>
    );
}
export default ProductDetails;