import React from "react";
import './products.css';

const ProductDetails = (props)=>{

        return(
            
                <div key = {props.id}>
                    <div className="productDetails">
                        <div>
                            <img className="productImage" src = {props.image} height="150px"/>
                        </div>
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