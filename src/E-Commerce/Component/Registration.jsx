import React, { useEffect, useState } from "react";
import './registration.scss';
import Validation from "./Validation";
import Login from "./Login";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";

const Registration = () => {
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        rePassword: "",

    })

    const navigate = useNavigate();
    const [errors, setErrors] = useState({})
    const [validData, setValidData] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value })

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setValidData(true);
        setErrors(Validation(values));
        try {
            if (Object.keys(errors).length === 0 && validData) {
                const result = await axios.post("http://localhost:3001/register", values);
                setValues({ username: "", email: "", password: "", rePassword: "" });
                alert("Account Created!")
                navigate('/')
            }
        } catch (error) {
            return (error.message)
        }
    }
    return (
        <>
            <div className="container">
                <div className="left">
                    <h3>MARKET</h3>
                    <div className="welcome">
                        <h1>Welcome!</h1>
                        <p>Login with your info</p>
                        <Link to='/login'>
                            <button type="submit" >SIGN IN</button>
                        </Link>

                    </div>
                </div>
                <div className="right">
                    <h1>Create Account</h1>
                    <p>Use your email id for registration</p>
                    <form className="form">

                        <div className="input1">
                            <div>
                                <input
                                    type="text"
                                    name="username"
                                    value={values.username}
                                    onChange={handleChange}
                                    autoComplete="off"
                                    placeholder="Username"
                                />
                            </div>
                            <div>
                                {errors.username && <p className="error"> {errors.username}</p>}
                            </div>
                        </div>
                        <div className="input1">
                            <div>
                                <input
                                    type="text"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    autoComplete="off"
                                    placeholder="E-mail"
                                />
                            </div>
                            <div>
                                {errors.email && <p className="error"> {errors.email}</p>}
                            </div>
                        </div>
                        <div className="input1">
                            <div>
                                <input
                                    type="password"
                                    name="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    autoComplete="off"
                                    placeholder="Password"
                                />
                            </div>
                            <div>
                                {errors.password && <p className="error"> {errors.password}</p>}
                            </div>
                        </div>
                        <div className="input1">
                            <div>
                                <input
                                    type="password"
                                    name="rePassword"
                                    value={values.rePassword}
                                    onChange={handleChange}
                                    autoComplete="off"
                                    placeholder="Confirm Password"
                                />
                            </div>
                            <div>
                                {errors.rePassword && <p className="error"> {errors.rePassword}</p>}
                            </div>
                        </div>


                    </form>
                    <div className="btn">
                        <button type="submit" onClick={handleSubmit}>SIGN UP</button>
                    </div>
                </div>
            </div>
        </>
    )

}
export default Registration;