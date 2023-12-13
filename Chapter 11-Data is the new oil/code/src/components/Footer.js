// Importing React library
import React from "react";

// Defining the Footer component
const Footer = () => {
  return (
    // JSX structure for the Footer component
    <div className="footer">
      <div className="footer-content">
        {/* Company Section */}
        <div className="points">
          Company
          <ul>
            {/* List of company-related links */}
            <li className="footer-li"><a href="">About</a></li>
            <li className="footer-li"><a href="">Team</a></li>
            <li className="footer-li"><a href="">FoodExplorer Blog</a></li>
            <li className="footer-li"><a href="">Bug Bounty</a></li>
            <li className="footer-li"><a href="">FoodExplorer One</a></li>
            <li className="footer-li"><a href="">FoodExplorer Corporate</a></li>
            <li className="footer-li"><a href="">FoodExplorer Instamart</a></li>
          </ul>
        </div>
        {/* Contact Section */}
        <div className="points">
          Contact
          <ul>
            {/* List of contact-related links */}
            <li className="footer-li"><a href="">Help & Support</a></li>
            <li className="footer-li"><a href="">Partner with us</a></li>
            <li className="footer-li"><a href="">Ride with us</a></li>
          </ul>
        </div>
        {/* Legal Section */}
        <div className="points">
          Legal
          <ul>
            {/* List of legal-related links */}
            <li className="footer-li"><a href="">Terms & Conditions</a></li>
            <li className="footer-li"><a href="">Refund & Cancellation</a></li>
            <li className="footer-li"><a href="">Privacy Policy</a></li>
            <li className="footer-li"><a href="">Cookie Policy</a></li>
            <li className="footer-li"><a href="">Offer Terms</a></li>
            <li className="footer-li"><a href="">Phishing & Fraud</a></li>
          </ul>
        </div>
      </div>
      {/* Footer Contact Section */}
      <div className="footer-contact"> 
        {/* Copyright information */}
        <div className="copyrights">All rights reserved. © 2023 FoodExplorer</div>
        <div className="footer-logos">
          {/* Social media icons or logos could be added here */}
          <div className="social-media">
            {/* ... */}
          </div>
        </div>
      </div>
    </div>
  );
};

// Exporting the Footer component
export default Footer;



