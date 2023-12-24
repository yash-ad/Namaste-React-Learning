// Importing necessary dependencies and configuration
import { LOGO_URL } from "../utilities/config";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utilities/UserContext";
import { useSelector } from "react-redux";

// Defining the Header component
const Header = () => {
  // Using the useState hook to manage the state of the toggle button
  const [toggleButton, setToggleButton] = useState('Login');

  //Introduced `useContext` hook:-
// const data = useContext(UserContext);

const {loggedInUser,setUserName} = useContext(UserContext);
// console.log(loggedInUser);


//Introduced `useSelector` hook to subscribing to the store using Selector.
const cartItems = useSelector((store)=> store.cart.items)
console.log(cartItems);


  return (
    // JSX representing the structure of the Header component
    <div className="header shadow-lg">
      <div className="logo-container">
        {/* Linking the logo to the home page */}
        <Link to="/">
          <img className="logo" alt="foodapplogo" src={LOGO_URL} />
        </Link>
      </div>

      <div>
      <input className="input-bar border border-black p-4 bg-black"
            type="text"
            placeholder="Enter your Username here"
            value={loggedInUser}
            onChange={(event)=> setUserName(event.target.value)}
          />
          </div>

      <div className="nav-items">
        <ul>
          {/* Navigation links using the Link component from React Router */}
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link className="cart" to="/cart"><svg  xmlns="http://www.w3.org/2000/svg" height="20" width="25" viewBox="0 0 576 512">
          <path fill="#5a5d6c" d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
          </svg>
          <span className="cart-length">({ cartItems.length })</span>
          Items</Link>
          </li>
          <li className="user" >
          <svg xmlns="http://www.w3.org/2000/svg" height="20" width="25" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/></svg>
        <span className="user-text">{loggedInUser}</span>
          </li>
          {/* Toggle button for login/logout functionality */}
          <button
            className="toggleBtn"
            onClick={() => {
              // Toggling the button text between 'Login' and 'Logout'
              toggleButton === 'Login' ?
                setToggleButton('Logout') : setToggleButton('Login')
            }}
          >
            {toggleButton}
          </button>
        </ul>
      </div>
    </div>
  );
};

// Exporting the Header component to make it available for other parts of the application
export default Header;
