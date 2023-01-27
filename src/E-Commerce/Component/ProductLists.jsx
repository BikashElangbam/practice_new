import React, { useEffect, useState } from "react";
import ProductDetails from "./ProductDetails";


const ProductLists = () =>{
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        getAPI("./data.json")
    }, []);

    const getAPI = (data) => {
        console.log(data)
        fetch(data, {
            headers:
            {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            setProducts(data);
        })
    }
    
    return(
            
        <div>
            {
                products.map((product)=>(
                   <ProductDetails key = {product.id} product={product}/>
                ))
            }
        
        </div>
    );
}
export default ProductLists;