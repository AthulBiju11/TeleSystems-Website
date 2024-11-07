

// import { useState } from "react";
// import "./navbar.scss";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
  
//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <div className="navbar-container">
//       <div className="logo-container">
//         <div className="logo">Tele Systems</div>
//       </div>
//       <div className="navbar-options">
//         <button className="menu-button" onClick={toggleMenu}>
//           ☰
//         </button>
        
//         <div className="menu">
//           <ul>
//             <li>All Products</li>
//             <li>Contact Us</li>
//           </ul>
//         </div>
//       </div>
//       <div className={`mobile-menu ${isMenuOpen ? 'open' : 'closed'}`}>
//         <ul>
//           <li>All Products</li>
//           <li>Contact Us</li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import { useState } from "react";
import "./navbar.scss";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className={`navbar-wrapper ${isMenuOpen ? 'expanded' : ''}`}>
        <div className="navbar-container">
          <div className="logo-container">
            <div className="logo">Tele Systems</div>
          </div>
          <div className="navbar-options">
            <button className="menu-button" onClick={toggleMenu}>
              {isMenuOpen ? "X" : "☰"}
            </button>
            
            <div className="menu">
              <ul>
                <li>All Products</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mobile-menu">
          <ul>
            <li>All Products</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;