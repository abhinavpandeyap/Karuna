import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { toast } from 'react-toastify'
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
}
from 'mdb-react-ui-kit';
import DonorDashboard from './DonorDashboard';
import DonorService from '../../services/DonorService';

const categoryOptions = ['FOOD','CLOTHES', 'STATIONARY', 'TOYS', 'FURNITURE', 'ELECTRONIC_ITEMS', 'GROCERY'];

const DonorPageContent = () => {
  const don = JSON.parse(localStorage.getItem("user")).data
  const navigator = useNavigate()

  const [item, setItem] = useState({
    category: '',
    quantity: '',
    description: ''
  })

  const handleChange = (event, property) => {
    setItem({ ...item, [property]: event.target.value })
  }

  const donate = (event) => {
    event.preventDefault()
    DonorService.donateItem(item, don.id).then((response) => {
      console.log(response)
      toast.success("Thank You for Your Contribution!!!")
      navigator("/donorhistory")
    }).catch((error) => {
      console.log(error)
      toast.error(error)
    })
  }

  return (
    <div className="container">
      <DonorDashboard />
      <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundImage: 'url()'}}>
        <div className='mask gradient-custom-3'></div>
        <MDBCard className='m-5' style={{maxWidth: '600px'}}>
          <MDBCardBody className='px-5'>
            <h2 className="text-uppercase text-center mb-5">Donation</h2>
            <div className='mb-4'>
              <label htmlFor='category' className='form-label'>Category</label>
              <select className='form-select' id='category' onChange={(e) => handleChange(e, "category")} value={item.category}>
                <option value=''>Select category</option>
                {categoryOptions.map((option, index) => (
                  <option value={option} key={index}>{option}</option>
                ))}
              </select>
            </div>
            <MDBInput wrapperClass='mb-4' placeholder='quantity' size='lg' id='quantity' type='number' onChange={(e) => handleChange(e, "quantity")} value={item.quantity} />
            <MDBInput wrapperClass='mb-4' placeholder='description' size='lg' id='description' type='text' onChange={(e) => handleChange(e, "description")} value={item.description} />
            <Button className='mb-4 w-100 gradient-custom-4' size='lg' variant="outline-info" onClick={donate}>Donate</Button>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
    </div>
  );
}

export default DonorPageContent;
