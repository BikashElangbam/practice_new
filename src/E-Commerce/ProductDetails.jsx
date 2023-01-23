import React from "react";
import './products.css';

const ProductDetails = (props)=>{

        return(
            <div className="product-container">
                <div className="productDetails" key = {props.id}>
                    <img className="productImage" src = {props.image} height="150px"/>
                    <div>
                       
                        <h3>{props.name}</h3>
                        <h4>{props.description}</h4>
                        <p>${props.price}</p>
                    </div>
                </div> 
            </div>

        );
    
}
export default ProductDetails;