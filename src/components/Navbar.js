import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { MdFingerprint } from "react-icons/md";
import { FaBars, FaTimes } from "react-icons/fa";
// import { Button } from "./Button";
import "./Navbar.css";
import { IconContext } from "react-icons/lib";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

//   const showButton = () => {
//     if (window.innerWidth <= 960) {
//       setButton(false);
//     } else {
//       setButton(true);
//     }
//   };
//   useEffect(() => {
//     showButton();
//   }, []);

//   window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#ffff" }}>
        <div className="navbar">
          <div className="navbar-container container">
            <Link to="/home" className="navbar-logo" onClick={closeMobileMenu}>
              {/* <MdFingerprint className="navbar-icon" /> */}
              ivylina
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>

            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/home" className="nav-links" onClick={closeMobileMenu}> 
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                 About
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/schools" className="nav-links" onClick={closeMobileMenu}>
                  Schools
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/merchandise" className="nav-links" onClick={closeMobileMenu}>
                  Merchandise
                </Link>
                </li>

              <li className="nav-item">
                <Link to="/contacts" className="nav-links" onClick={closeMobileMenu}>
                  Contacts
                </Link>
              </li>

              {/* <li className="nav-btn">
                {button ? (
                  <Link to="/sign-up" className="btn-link">
                    <Button buttonStyle="btn--outline">Contact</Button>
                  </Link>
                ) : (
                  <Link to="/contact" className="btn-link" onClick={closeMobileMenu}>
                    <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
                      Contact
                    </Button>
                  </Link>
                )}
              </li> */}
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
