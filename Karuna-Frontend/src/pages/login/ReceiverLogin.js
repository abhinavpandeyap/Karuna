import './Login.css'

import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBInput
  }
  from 'mdb-react-ui-kit';
  
import logo from '../../assets/logo.png';
import ReceiverService from '../../services/ReceiverService';

const Login=()=>{
const navigator = useNavigate();
const [data,setData]=useState({
  email:'',
  password:''
})


const handleChange=(event,property)=>{
  setData({...data,[property]:event.target.value})
}


const submitForm=(event)=>{
  event.preventDefault()
  ReceiverService.login(data).then((response)=>{
    console.log(response)
    localStorage.setItem("user",JSON.stringify(response))
    // sessionStorage.setItem("user",JSON.stringify(response))
    navigator("/receiverprofile")
    window.location.reload()
  }).catch((error)=>{
    console.log(error)
  })
}


    return (<div>
        <MDBContainer className="my-5 gradient-form">

<MDBRow>

  <MDBCol col='6' className="mb-5">
    <div className="d-flex flex-column ms-5">

      <div className="text-center">
      <img src={logo} style={{width: '100px'}} alt="logo" />
           
        <h4 className="mt-1 mb-5 pb-1">We are The Karuna Team</h4>
        <h5>Receiver Login</h5>

      </div>


      <MDBInput wrapperClass='mb-4' placeholder='Email address' id='email' type='email' onChange={(e)=>handleChange(e,"email")} value={data.email}/>
      <MDBInput wrapperClass='mb-4' placeholder='Password' id='password' type='password' onChange={(e)=>handleChange(e,"password")}  value={data.password} />


      <div className="text-center pt-1 mb-5 pb-1">
        <MDBBtn className="mb-4 w-100 gradient-custom-2" onClick={submitForm}>Log In</MDBBtn>
        <a className="text-muted" href="#!">Forgot password?</a>
      </div>

      {/* <p>
        <Link to={"/donorpagecontent"}><Button variant="outline-danger">Donor </Button></Link>

        <Link to={"/receiverpagecontent"}><Button variant="outline-danger">Receiver </Button></Link>

        <Button variant="outline-danger"><NavDropdown title="Staff">
                                    <NavDropdown.Item as={Link} to="/staffadminprofile">
                                        <div className="dropdown">Admin</div>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/ceprofile">
                                    <div className="dropdown">CustomerExecutive</div>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/deliveryprofile">
                                    <div className="dropdown">DeliveryPartner</div>
                                    </NavDropdown.Item>
                    </NavDropdown></Button>
      </p> */}

      <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
       <div className="mb-0">Don't have an account?</div>&nbsp;&nbsp;
        {/* <Link to={"/signup"}><Button variant="outline-danger">Sign Up</Button></Link> */}
        <Button variant="outline-danger"><NavDropdown title="SignUp">
                                    <NavDropdown.Item as={Link} to="/signupdonor">
                                        <div className="dropdown">Donor</div>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item as={Link} to="/signupreceiver">
                                    <div className="dropdown">Receiver</div>
                                    </NavDropdown.Item>
                                    
                    </NavDropdown></Button>
        

      </div>

    </div>

  </MDBCol>

  <MDBCol col='6' className="mb-5">
    <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

      <div className="text-white px-3 py-4 p-md-5 mx-md-4">
        <h4 class="mb-4">We are more than just an organization</h4>
        <h6 class="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </h6>
      </div>

    </div>

  </MDBCol>

</MDBRow>

</MDBContainer>
    </div>
)}
export default Login;