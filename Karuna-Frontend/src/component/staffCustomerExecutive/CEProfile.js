import React from 'react';

import CEDashboard from './CEDashboard';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
function CEProfile ()  {

  return (
    <div>
        <div className="container">
            <div>
                <CEDashboard></CEDashboard>
            </div>
            <div className="content">

            <div className="profile-container">
                            {/* <div className="profile-picture">
                                <img src="https://www.example.com/profile.jpg" alt="Profile" />
                            </div> */}
            <div className="profile-details">
                <h2>John Doe</h2>
                <p>Phone No. : 9822123420</p>
                <p>Address: Ravet</p>
                <p>Email : john@gmail.com</p>
                <Link to={"/ReceiverUpdate"}><Button variant="outline-danger">Update  </Button></Link>
                <Link to={"/login"}><Button variant="outline-danger">Delete Account </Button></Link>
      </div>
    </div>


            </div>
        </div>
    </div>


   
  );
};

export default CEProfile;
