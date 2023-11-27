import { LOGO_URL } from "../utilities/config";
import { useState,useEffect } from "react";


const Header = ()=>{
    const [toggleBtn,setToggleBtn] = useState('Login');

//     useEffect(()=>{
// console.log("useEffect called");
//     },[toggleBtn]);

    console.log('Header');

    return(
    <div className="header">
    <div className="logo-container">
    <img className="logo" alt="foodapplogo" src={LOGO_URL}/>
    </div>
    <div className="nav-items">
    <ul>
    <li>Home</li>
    <li>About Us</li>
    <li>Contact Us</li>
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