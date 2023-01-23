import React from "react";
import './products.css';

const ProductDetails = (props)=>{

        return(
            
                <div className="product" key = {props.id}>
                    <div className="product-container">
                        <div className="product-Image">
                            <img  src = {props.image}/>
                        </div>
                        <div className="product-details">
                            <h3>{props.name}</h3>
                            <h4>{props.description}</h4>
                            <p>${props.price}</p>
                        </div>
                    </div>
                  
                </div> 
            

        );
    
}
export default ProductDetails;