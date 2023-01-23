import React, {useState} from "react";
import './login.css'
import Validation from "./Validation";
import { Link } from "react-router-dom";

const Login = () =>{

    const [values, setValues] = useState({
        email : "",
        password : ""
    })
    const [errors, setErros]=useState({})

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setValues({...values, [name]:value})
    
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        setErros(Validation(values))
        setValues({email : "", password : ""});
    }
    

    return(
        <div className="login-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="input">
                    <div>
                       <input type= "email"  name ="email" placeholder="Email" value={values.email} onChange={handleChange} autoComplete="off" />
                    </div>
                    <div className="login-error">
                            {errors.email && <p> {errors.email}</p>}
                    </div>
                </div>
                <div className="input">
                    <div>
                        <input type= "password"  name ="password" placeholder="Password" value={values.password} onChange={handleChange} autoComplete="off" />
                    </div>
                    <div className="login-error">
                            {errors.password && <p> {errors.password}</p>}
                    </div>
                </div>
                <button type = "submit"> Login</button>
                <div className="register-link">
                    <h2>Do not have an account ?</h2>
                    <Link to ='/register'>
                        <li>Register Now</li>
                    </Link>
                </div>

            </form>

        </div>

    )
}
export default Login;