import { Link } from "react-router-dom";
import './Navbar.css';
import React from "react";

// import NavDropdown from 'react-bootstrap/NavDropdown';

import logo from '../../../assets/logo.png';

// BEM -> Block Element Modifier (karuna__navbar-links)
const Navbar1 = () => {
    
    return (
        <div className="karuna__navbar">  
            <div className="karuna__navbar-links">
                <div className="karuna__navbar-links_logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="karuna__navbar-links_component">
                    <p><Link to={"/home"}>Home</Link></p>
                    <p><Link to={"/about"}>About Us</Link></p>
                    <p><Link to={"/contact"}>Contact Us</Link></p>
                    <p><Link to={"/donorpagecontent"}>Dashboard</Link></p>

                    
                </div>
            </div>
                <div className="karuna__navbar-sign">
                    <p><Link to={"/home"}>Logout</Link></p>

                </div>

        </div>

    )
}
// }
export default Navbar1;




