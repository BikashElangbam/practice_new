import React from "react";
import './products.scss';
import { useContext } from "react";
import CartContext from "../Context/CartContext";
import { Link } from "react-router-dom";

const ProductDetails = ({product})=>{
    const { addToCart } = useContext(CartContext);
    return(
        <div className="product-container">
            <div className="product">
                <div>
                    <img src={product.image}/>
                </div>
                <div>
                    <h2>{product.name}</h2>
                    <h4>{product.description}</h4>
                    <p>${product.price}</p>
                    <p>{product.stockQuantity}</p>
                </div>
            </div>
            <button onClick={()=> addToCart(product)}>Add to Cart</button>
  
        </div>
    );
}
export default ProductDetails;