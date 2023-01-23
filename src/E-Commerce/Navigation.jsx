import React from "react";
import { Link } from "react-router-dom";
const Navbar = ()=>{
    return(
        <header>
            <div className="left">
                <Link to='/'>Home</Link>
            </div>
            <div className="mid">
                <ul className="navbar">
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/productlist'>ProductLists</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                </ul>
            </div>
            <div className="left">
                <ul>
                    <li>
                        <Link to='/login'>Login</Link>
                    </li>
                    <li>
                        <Link to='/register'>Registration</Link>
                    </li>
                    <li>
                        <Link to='/cart'>Cart</Link>
                    </li>
                </ul>

            </div>

        </header>
        
    )
    

}
export default Navbar