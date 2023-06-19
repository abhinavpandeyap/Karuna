import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ReceiverDashboard from './ReceiverDashboard';
import ReceiverService from '../../services/ReceiverService';
import { toast } from 'react-toastify';

const RequestDonation = () => {
  
  const navigator= useNavigate()

  const [request, setRequest] = useState({
    name: '',
    type: '',
    quantity: 0,
    description: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setRequest({ ...request, [name]: value });
  };

  const handleTypeChange = (event) => {
    const value = event.target.value;
    setRequest({ ...request, type: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    ReceiverService.createRequest(request)
      .then((response) => {
        console.log('Request created successfully', response.data);
        toast.success("Request Created !!!!")
        navigator("/receiverpagecontent")
      })
      .catch((error) => {
        console.log('Error creating request', error);
        toast.error("Cannot Create Request for this!!!")
      });
  };

  return (
    <>
      <div className="container">
        <div>
          <ReceiverDashboard />
        </div>
        <div className="content">
          <div
            className="d-flex align-items-center justify-content-center bg-image"
            style={{ backgroundImage: 'url()' }}
          >
            <div className="mask gradient-custom-3"></div>
            <div className="card m-5" style={{ maxWidth: '600px' }}>
              <div className="card-body px-5">
                <h2 className="text-uppercase text-center mb-5">
                  Request
                </h2>
                <div className="form-group">
                  <label htmlFor="type">Type</label>
                  <select
                    className="form-control"
                    id="type"
                    name="type"
                    value={request.type}
                    onChange={handleTypeChange}
                  >
                    <option value="">Select Type</option>
                    <option value="DELIVERY">Delivery</option>
                    <option value="ITEM">Item</option>
                  </select>
                </div>
                <br/>
                <br/>
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <textarea
                    className="form-control"
                    id="description"
                    name="description"
                    value={request.description}
                    onChange={handleInputChange}
                  />
                </div>
                <button
                  className="btn btn-primary my-4 w-100 gradient-custom-4"
                  onClick={handleSubmit}
                >
                  Make Request
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestDonation;
