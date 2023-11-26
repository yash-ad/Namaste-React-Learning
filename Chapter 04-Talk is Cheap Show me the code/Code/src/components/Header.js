import { Logo_URL } from "../utilities/config";

const Header = ()=>{
    return(
    <div className='header'>
    <div className='logo-container'>
        <img className="logo" src={Logo_URL}/>
    </div>
    <div className='nav-items'>
    <ul>
    <li>Home</li>
    <li>About Us</li>
    <li>Contact Us</li>
    <li>Cart</li>
    </ul>
    </div>
    </div>
    )
    };

  export default Header;  
  
  
  