import React from 'react';
import Table from 'react-bootstrap/Table';

import StaffAdminDashboard from './StaffAdminDashboard';
// import Button from 'react-bootstrap/Button';
// import { Link } from "react-router-dom";
function StaffAdminPageContent ()  {

  return (
    <div>
        <div className="container">
            <div>
                <StaffAdminDashboard></StaffAdminDashboard>
            </div>
            <div className="content">


            <h3>Donation History</h3>
                    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Donor Name</th>
          <th>Donation Type</th>
          <th>Address</th>
          <th>Phone No</th>


        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark Wood</td>
          <td>Food</td>
          <td>Pune</td>
          <td>7894561230</td>
        </tr>
        
      </tbody>
    </Table>


            </div>
        </div>
    </div>


   
  );
};

export default StaffAdminPageContent;
