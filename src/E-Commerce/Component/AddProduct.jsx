import React,{useState} from "react";
import './addProduct.scss'
import axios from "axios";


const AddProduct=()=>{
    const [values, setValues] = useState({
        image:"",
        name:"",
        description:"",
        price:"",
        stockQuantity:""
    })

    const handleChange = (e) =>{
        const {name, value} = e.target
        setValues({...values, [name]:value})
    }

    const handleAdd = async(e) =>{
        e.preventDefault();
        try{
            const response = await axios.post(`http://localhost:3001/products`,values)
        }catch(error){
            return (error.message)
        } 
        setValues({        
            image:"",
            name:"",
            description:"",
            price:"",
            stockQuantity:""
        })
    }

    return(
        <div className="Product-Container">
            <div>
                <input type="text" name="name" value={values.name} onChange={handleChange} placeholder="Name"/>
            </div>
            <div>
                <input type="text" name="description" value={values.description} onChange={handleChange}placeholder="Description"/>
            </div>
            <div>
                <input type="text" name="price" value={values.price} onChange={handleChange}placeholder="Price"/>
            </div>
            <div>
                <input type="text" name="stockQuantity" value={values.stockQuantity} onChange={handleChange}placeholder="stockQuantity"
                />
            </div>
            <div>
                 <input type="url" name="image" value={values.image} onChange={handleChange} placeholder="Image Url" />
            </div>
            <div>
                <button onClick={handleAdd}>Add Product</button>
            </div>
            
        </div>
    )

}
export default AddProduct