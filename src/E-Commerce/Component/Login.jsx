import React, {useState} from "react";
import './login.scss';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () =>{

    const [values, setValues] = useState({
        email : "",
        password : ""
    })
   const navigate = useNavigate();

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setValues({...values, [name]:value})
    
    }
    
    const handleSubmit = async(e) =>{
        e.preventDefault();

        try{
          const result = await axios.post("http://localhost:3001/login", values)
          navigate('/')
        }catch(error){
            alert("Invalid Credentials") 
        }
        setValues({email : "", password : ""});
    }
    

    return (
      <div className="login-form-container">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input">
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>
          </div>
          <div className="input">
            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
                autoComplete="off"
              />
            </div>
          </div>
          <div className="btn">
            <button type="submit"> Login</button>
            <Link to='/changePassword'> Forgot Password</Link>
          </div>
          <div className="register-link">
            <h4>Do not have an account ?</h4>
            <Link to="/register">
              <button>Register Now</button>
            </Link>
          </div>
        </form>
      </div>
    );
}
export default Login;