import React from "react";
import { Link } from "react-router-dom";


const ReceiverDashboard = () => {
  const don = JSON.parse(localStorage.getItem("user")).data

  return (
    <div>
      <div className="menu">
              
        <ul>
        <li><h5>{don.name}</h5></li>
          <hr></hr>
          <Link to={"/receiverprofile"}><li>Profile</li></Link>
          <Link to={"/receiverpagecontent"}><li>Items</li></Link>
          <Link to={"/receiverhistory"}><li>History</li></Link>
          <Link to={"/requestdonation"}><li>Request</li></Link>

        </ul>
      </div>
        </div>
  );
};

export default ReceiverDashboard;
