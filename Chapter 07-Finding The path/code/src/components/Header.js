import { LOGO_URL } from "../utilities/config";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = ()=>{
    const [toggleBtn,setToggleBtn] = useState('Login');

    return(
    <div className="header">
    <div className="logo-container">
    <img className="logo" alt="foodapplogo" src={LOGO_URL}/>
    </div>
    <div className="nav-items">
    <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/about">About Us</Link></li>
    <li><Link to="/contact">Contact Us</Link></li>
    <li>Cart</li>
    <button className="toggleBtn" onClick={()=>{
toggleBtn === 'Login'?
setToggleBtn('Logout'):setToggleBtn('Login')
    }}>{toggleBtn}</button>
    </ul>
    </div>
    </div>
    )
    };
    
export default Header;