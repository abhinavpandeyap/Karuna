
import { Link } from "react-router-dom";


import React from 'react';
import {
//   MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
//   MDBSelect,
//   MDBRadio
}
from 'mdb-react-ui-kit';


const ReceiverUpdate=()=>{
    return <div className='signup'>
        <MDBContainer fluid>

<MDBRow className='justify-content-center align-items-center m-5'>

  <MDBCard>
    <MDBCardBody className='px-4'>

      <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">Update Profile</h3>

      <MDBRow>

        <MDBCol md='6'>
          <MDBInput wrapperClass='mb-4' placeholder='First Name' size='lg' id='form1' type='text'/>
        </MDBCol>

        <MDBCol md='6'>
          <MDBInput wrapperClass='mb-4' placeholder='Last Name' size='lg' id='form2' type='text'/>
        </MDBCol>

      </MDBRow>
      <br></br>
      <MDBRow>

        <MDBCol md='6'>
          <MDBInput wrapperClass='mb-4' placeholder='Address' size='lg' id='form3' type='text'/>
        </MDBCol>

        <MDBCol md='6'>
          <MDBInput wrapperClass='mb-4' placeholder='Phone Number' size='lg' id='form4' type='text'/>
        </MDBCol>

        {/* <MDBCol md='6' className='mb-4'>
          <h6 className="fw-bold">Gender: </h6>
          <MDBRadio name='inlineRadio' id='inlineRadio1' value='option1' label='Female' inline />
          <MDBRadio name='inlineRadio' id='inlineRadio2' value='option2' label='Male' inline />
          <MDBRadio name='inlineRadio' id='inlineRadio3' value='option3' label='Other' inline />
        </MDBCol> */}

      </MDBRow>


      


      <br></br>
      <MDBRow>

        <MDBCol md='6'>
          <MDBInput wrapperClass='mb-4' placeholder='Email' size='lg' id='form4' type='email'/>
        </MDBCol>

        <MDBCol md='6'>
          {/* <MDBInput wrapperClass='mb-4' placeholder='Password' size='lg' id='form5' type='rel'/> */}
        </MDBCol>

      </MDBRow>
      <br></br>
      <p><Link to={"/ReceiverProfile"}><button type="button">Update</button></Link></p>

    </MDBCardBody>
  </MDBCard>

</MDBRow>
</MDBContainer>
    </div>
}
export default ReceiverUpdate;