
import ProductDetails from "./ProductDetails";
import { useEffect, useState } from "react";

const ProductLists = () =>{
    const [product, setProduct] = useState([])
    
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
            console.log(data)
            setProduct(data);
        })
    }
    
    return(
            
        <div>
            
            {
                product.map((element, i)=>{
                    const {id,image,itemName,description,price} = element
                    return(
                        <div className="productDetails" key = {id}>
                            <ProductDetails key = {id} image ={image} name = {itemName} description ={description} price = {price}/>
                        </div>
                    )
                })
            }
        </div>

    );
}

export default ProductLists;