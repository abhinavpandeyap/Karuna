import './ReceiverDashboard.css';
import Table from 'react-bootstrap/Table';
import { useState,useEffect } from 'react';
import ReceiverService from '../../services/ReceiverService';
// import { Link } from 'react-router-dom';
// import { Button } from 'react-bootstrap';
import React from 'react';
// import Button from 'react-bootstrap/Button';
// import { Link } from "react-router-dom";
import ReceiverDashboard from "./ReceiverDashboard";
function ReceiverHistory ()  {

  const don = JSON.parse(localStorage.getItem("user")).data
  const [history, setHistory] = useState([]);

  useEffect(() => {
    ReceiverService.viewHistory(don.id)
      .then(response => setHistory(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
        <div className="container">
            <div>
                <ReceiverDashboard></ReceiverDashboard>
            </div>
            <div className="content">

            <h3>History</h3>
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Item</th>
  
          <th>Quantity</th>
          <th>Donor Name</th>
          <th>Donor Address</th>
          <th>Donor Contact</th>
          <th>Date</th>


        </tr>
      </thead>
      <tbody>
        
        {history.map((item, index) => (
  <tr key={item.id}>
    <td>{index + 1}</td>
    <td>{item.category}</td>
    
    <td>{item.quantity}</td>
    <td>{item.donorId.name}</td>
    <td>{item.donorId.address}</td>
    <td>{item.listedDateTime}</td>
    </tr>
))}
       
        
      </tbody>
    </Table>


            </div>
        </div>
    </div>


   
  );
};

export default ReceiverHistory;
