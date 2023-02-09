import React,{useState, useEffect} from "react";
import { useParams, useNavigate } from "react-router-dom";
import './updateProduct.scss'
import axios from "axios";

const UpdateProduct=()=>{
    const [values, setValues] = useState({
        image:"",
        name:"",
        description:"",
        price:"",
        stockQuantity:""
    })
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getProductDetail();
      }, []);
     
    const getProductDetail = async() =>{
        const response = await axios.get(`http://localhost:3001/products/${params.id}`)
        setValues(response.data);
    }

    const handleChange = (e) =>{
        const {name, value} = e.target
        setValues({...values, [name]:value})
    }
    const handleUpdate = async(e) =>{
        e.preventDefault();
        try{
            const response = await axios.put(`http://localhost:3001/products/${params.id}`,values)
            navigate('/products')
        }catch(error){
            return (error.message)
        }
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
                 <input type="url" name="image" value={values.image} onChange={handleChange} />
            </div>
            <div>
                <button onClick={handleUpdate}>Update Product</button>
            </div>
            
        </div>
    )

}
export default UpdateProduct;


        // const response = await fetch(`http://localhost:3001/products/${params.id}`,{
        //         method:"PUT",
        //         body:JSON.stringify(values),
        //         headers:{
        //             'Content-Type': 'application/json'
        //         },
                
        //     })
        // const data = await response.json()