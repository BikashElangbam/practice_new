import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './productlist.scss'


const Products = () =>{
  const [products, setProducts] = useState([])
  const url = "http://localhost:3001/products/"
  useEffect(() => {
    getProduct();
  }, []);
 
  const getProduct = async() =>{
      const response = await axios.get(url)
      setProducts(response.data);

  } 
  
  const handleDelete = async(id)=>{
      try{
        const response =await axios.delete(`http://localhost:3001/products/${id}`)
        getProduct();
      }catch (error) {
        return (error.message);
      }
  }

    return(
            
          <div className="prod-container">
              <ul>
                {/* <li>Image</li> */}
                <li>Name</li>
                <li>Description</li>
                <li>Price</li>
                <li>Quantity</li>
                <li>Actions</li>
              </ul>
              {
                  products.map((item)=>{
                      const {name, description, price, image, stockQuantity} =item

                   return(
                    <ul key={item._id}>
                      {/* <li>{image}</li> */}
                      <li>{name}</li>
                      <li>{description}</li>
                      <li>{price}</li>
                      <li>{stockQuantity}</li>
                      <li>
                        <button onClick={()=>handleDelete(item._id)}> Delete</button>
                        <Link to ={"/update/"+item._id}>Update</Link>
                      </li>
                     
                    </ul>
                   )
                  })
              }
          
          </div>
    );
}
export default Products;