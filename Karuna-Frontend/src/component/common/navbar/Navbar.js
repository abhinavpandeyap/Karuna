import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import NavDropdown from 'react-bootstrap/NavDropdown';

import logo from '../../../assets/newLogo.png';


// BEM -> Block Element Modifier (karuna__navbar-links)


const Navbar = () => {

    var loggedinperson;
    const [currentUser, serCurrentUSer] = useState(undefined);
    const navigator = useNavigate();
    useEffect(() => {
        loggedinperson = JSON.parse(localStorage.getItem("user"));
        if (loggedinperson) {
            serCurrentUSer(loggedinperson);
        }
    }, [])

    const logout = () => {
        localStorage.removeItem("user");
        sessionStorage.removeItem("user");
        navigator("/home")
        window.location.reload();

    }





    return (
        <div className="karuna__navbar" id="xxx">
            <div className="karuna__navbar-links">
                <div className="karuna__navbar-links_logo">
                    <img id="logo" src={logo} alt="logo" />
                </div>
                <div className="karuna__navbar-links_component">
                    <p><Link to={"/home"}>Home</Link></p>
                    <p><Link to={"/about"}>About Us</Link></p>
                    <p><Link to={"/contact"}>Contact Us</Link></p>

                </div>

            </div>

            <div className="karuna__navbar-sign">
                {

                    currentUser ? (
                        <>{
                        currentUser.type === "donor" ? (
                            
                <div className="karuna__navbar-links_component">
                    <p><Link to={"/donorpagecontent"}>Dashboard</Link></p>
                </div>
            ) : currentUser.role === "receiver" ? (
                <div className="karuna__navbar-links_component">
                    <p><Link to={"/receiverpagecontent"}>Dashboard</Link></p>
                </div>
            ) : currentUser.role === "admin" ? (
                <div className="karuna__navbar-links_component">
                    <p><Link to={"/adminpagecontent"}>Dashboard</Link></p>
                </div>
            ) :
            currentUser.role === "deliveryPartner" ? (
                <div className="karuna__navbar-links_component">
                    <p><Link to={"/deliveryprofile"}>Dashboard</Link></p>
                </div>
            ) :
            currentUser.role === "customerExecutive" ? (
                <div className="karuna__navbar-links_component">
                    <p><Link to={"/staffCustomerExecutive"}>Dashboard</Link></p>
                </div>
                
            ) : null}
                        <button class="btn btn-secondary person" type="button" onClick={logout}>
                            Logout
                        </button>
                        </>
                    ) : (
                        <>
                            <span>
                                <NavDropdown title="LogIn">
                                    <NavDropdown.Item as={Link} to="/donorlogin">
                                        <div className="dropdown">Donor</div>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/receiverlogin">
                                        <div className="dropdown">Receiver</div>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/adminlogin">
                                        <div className="dropdown">Staff</div>
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </span>
                            <span>
                                <NavDropdown title="SignUp">
                                    <NavDropdown.Item as={Link} to="/signupdonor">
                                        <div className="dropdown">Donor</div>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/signupreceiver">
                                        <div className="dropdown">Receiver</div>
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </span>
                        </>
                    )


                }
            </div>
        </div>



    )
}
// }
export default Navbar;



