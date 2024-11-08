

import { useState } from "react";
import "./navbar.scss";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className={`navbar-wrapper ${isMenuOpen ? 'expanded' : ''}`}>
        <div className="navbar-container">
          <div className="logo-container">
            <div className="logo"><a href="/">Tele Systems</a></div>
          </div>
          <div className="navbar-options">
            <button className="menu-button" onClick={toggleMenu}>
              {isMenuOpen ? "X" : "☰"}
            </button>
            
            <div className="menu">
              <ul>
                <li><a href="/products/">All Products</a></li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mobile-menu">
          <ul>
            <li><a href="/products/">All Products</a></li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;