// Importing necessary dependencies and configuration
import { LOGO_URL } from "../utilities/config";
import { useState } from "react";
import { Link } from "react-router-dom";

// Defining the Header component
const Header = () => {
  // Using the useState hook to manage the state of the toggle button
  const [toggleButton, setToggleButton] = useState('Login');

  return (
    // JSX representing the structure of the Header component
    <div className="header">
      <div className="logo-container">
        {/* Linking the logo to the home page */}
        <Link to="/">
          <img className="logo" alt="foodapplogo" src={LOGO_URL} />
        </Link>
      </div>
      <div className="nav-items">
        <ul>
          {/* Navigation links using the Link component from React Router */}
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li>Cart</li>
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
