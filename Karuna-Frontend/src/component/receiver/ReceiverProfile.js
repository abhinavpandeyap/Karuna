
import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import ReceiverService from '../../services/ReceiverService';
import ReceiverDashboard from "./ReceiverDashboard";
import './ReceiverProfile.css';



const ReceiverProfile = () => {
  
  
  const navigator=useNavigate()


  const don = JSON.parse(localStorage.getItem("user")).data

  const logout = () => {
    localStorage.removeItem("user");
    sessionStorage.removeItem("user");
    navigator("/home")

  }

  const deleteReceiver=(event)=>{
    event.preventDefault()
    ReceiverService.deleteReceiver(don.id).then((response)=>{
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
          <ReceiverDashboard></ReceiverDashboard>
        </div>
        <div className="content">

            
            <div className="profile-container">
                <div className="profile-details">
                    <h2>{don.name}</h2>
                    <p>{don.phone}</p>
                    <p>{don.address}</p>
                    <p>{don.email}</p>
                    <Link to={"/Receiverupdate"}><Button variant="outline-danger">Update </Button></Link>
                    <Button variant="outline-danger" onClick={deleteReceiver}>Delete Account </Button>
                </div>
            </div>

            
        </div>
    </div>

        
    </div>


   
  );
};

export default ReceiverProfile;
