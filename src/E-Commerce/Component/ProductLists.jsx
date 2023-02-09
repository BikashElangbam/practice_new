import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductDetails from "./ProductDetails";
const url = "http://localhost:3001/products/"

const ProductLists = () =>{
    const [products, setProducts] = useState([])
 
    useEffect(() => {
      getProduct();
    }, []);
   
    const getProduct = async() =>{
        const response = await axios.get("http://localhost:3001/products/")
        setProducts(response.data);
    } 
    
    return(
            
          <div>
              {
                  products.map((item)=>{
                      // const {name, description, price, image, stockQuantity} =item
                      return(
                        <ProductDetails key = {item._id} product={item}/>
                      )
                    
                  })
              }
          
          </div>
    );
}
export default ProductLists;