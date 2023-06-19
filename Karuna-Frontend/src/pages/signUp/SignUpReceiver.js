import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useState } from "react";
import {toast} from 'react-toastify'
import './SignUp.css';
import React from 'react';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,

}
from 'mdb-react-ui-kit';
import ReceiverService from "../../services/ReceiverService";


const SignUpReceiver=()=>{

  const navigator=useNavigate([])
  const [receiver,setReceiver] = useState({
    name:'',
    address:'',
    phone:'',
    email:'',
    password:''
      })

  const handleChange=(event,property)=>{
    setReceiver({...receiver,[property]:event.target.value})
  }

  const submitform=(event)=>{
      event.preventDefault()
      ReceiverService.registerReceiver(receiver).then((response)=>{
        console.log(response)
        toast.success("Receiver Registerd Successfully!!")
        navigator("/receiverlogin")
      }).catch((error)=>{
        console.log(error)
        toast.error(error)
      })
  }



    return <div className='signup'>
        <MDBContainer fluid>

<MDBRow className='justify-content-center align-items-center m-5'>

  <MDBCard>
    <MDBCardBody className='px-4'>

      <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">Receiver Registration Form</h3>

      <MDBRow>

        <MDBCol md='12'>
          <MDBInput wrapperClass='mb-4' placeholder='Name' size='lg' id='name' type='text' onChange={(e)=>handleChange(e,"name")} value={receiver.name}/>
        </MDBCol>


        <MDBCol md='12'>
          <MDBInput wrapperClass='mb-4' placeholder='Address' size='lg' id='address' type='text' onChange={(e)=>handleChange(e,"address")} value={receiver.address}/>
        </MDBCol>

        <MDBCol md='12'>
          <MDBInput wrapperClass='mb-4' placeholder='Phone Number' size='lg' id='phone' type='tel' onChange={(e)=>handleChange(e,"phone")} value={receiver.phone}/>
        </MDBCol>

        <MDBCol md='12'>
          <MDBInput wrapperClass='mb-4' placeholder='Email' size='lg' id='email' type='email' onChange={(e)=>handleChange(e,"email")} value={receiver.email}/>
        </MDBCol>

        <MDBCol md='12'>
          <MDBInput wrapperClass='mb-4' placeholder='Password' size='lg' id='password' type='password' onChange={(e)=>handleChange(e,"password")} value={receiver.password}/>
        </MDBCol>

      </MDBRow>
      <br></br>
      
      <br></br>
      <Link to={"/receiverlogin"}><Button className='mb-4 w-100 gradient-custom-4' size='lg' variant="light" onClick={submitform}>SignUp</Button></Link>

    </MDBCardBody>
  </MDBCard>

</MDBRow>
</MDBContainer>
    </div>
}
export default SignUpReceiver;