import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import StaffAdminDashboard from './StaffAdminDashboard';
import AdminService from '../../services/AdminService';
import { toast } from 'react-toastify';
// import Button from 'react-bootstrap/Button';
// import { Link } from "react-router-dom";
function StaffAdminProfile ()  {
  const navigator=useNavigate()
  const don = JSON.parse(localStorage.getItem("user")).data

  
  const logout = () => {
    localStorage.removeItem("user");
    sessionStorage.removeItem("user");
    navigator("/home")

  }

  const deleteDonor=(event)=>{
    event.preventDefault()
    AdminService.deleteStaff(don.id).then((response)=>{
      toast.success(response.data)
      logout()
     
    }).catch((error)=>{
      console.log(error)
      toast.error(error)
    })
  }

  return (
    <div>
        <div className="container">
            <div>
                <StaffAdminDashboard></StaffAdminDashboard>
            </div>
            <div className="content">


            <div className="profile-container">
                            {/* <div className="profile-picture">
                                <img src="https://www.example.com/profile.jpg" alt="Profile" />
                            </div> */}
            <div className="profile-details">
                <h2>{don.name}</h2>
                <p>{don.phone}</p>
                <p>{don.address}</p>
                <p>{don.email}</p>
                <Link to={"/staffadminupdate"}><Button variant="outline-danger">Update  </Button></Link>
                <Link to={"/login"}><Button variant="outline-danger">Delete Account </Button></Link>
      </div>
    </div>


            </div>
        </div>
    </div>


   
  );
};

export default StaffAdminProfile;
