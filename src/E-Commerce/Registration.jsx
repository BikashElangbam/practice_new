import React, { useEffect, useState } from "react";
import './registration.scss';
import Validation from "./Validation";
import Login from "./Login";
import { Link } from "react-router-dom";

const Registration = () => {
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        rePassword: "",

    })

    const [errors, setErros] = useState({})
    const [validData, setValidData] = useState(false)
    // const [allRecord, setAllRecord] = useState([])

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value)
        setValues({ ...values, [name]: value })

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErros(Validation(values));
        setValidData(true);
        setValues({ username: "", email: "", password: "", rePassword: "" });

        // const newvalues = {...values, id : new Date().getTime.toString()}
        // setAllRecord([...allRecord, newvalues])
    }

    useEffect(() => {
        if (Object.keys(errors).length === 0 && validData) {
            alert("Account Created!!")

        }
    }, [errors])

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
                                    placeholder="Name"
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
                                    name="username"
                                    value={values.email}
                                    onChange={handleChange}
                                    autoComplete="off"
                                    placeholder="Name"
                                />
                            </div>
                            <div>
                                {errors.email && <p className="error"> {errors.email}</p>}
                            </div>
                        </div>
                        <div className="input1">
                            <div>
                                <input
                                    type="text"
                                    name="username"
                                    value={values.password}
                                    onChange={handleChange}
                                    autoComplete="off"
                                    placeholder="Name"
                                />
                            </div>
                            <div>
                                {errors.password && <p className="error"> {errors.password}</p>}
                            </div>
                        </div>
                        <div className="input1">
                            <div>
                                <input
                                    type="text"
                                    name="username"
                                    value={values.rePassword}
                                    onChange={handleChange}
                                    autoComplete="off"
                                    placeholder="Name"
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