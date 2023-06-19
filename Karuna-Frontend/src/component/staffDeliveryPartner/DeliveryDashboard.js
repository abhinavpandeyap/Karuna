import React from "react";
import { Link } from "react-router-dom";


const DeliveryDashboard = () => {

  return (
    <div id="dassh">
      <div className="menu">
              
        <ul>
        <li><h5>Delivery Partner Name</h5></li>
          <hr></hr>
          <Link to="/staffadminprofile"><li>Profile</li></Link>
          {/* <Link to="/donorhistory"><li>History</li></Link> */}
          <Link to="/receiverlist"><li>Requests</li></Link>

        </ul>
      </div>
    </div>
  );
};

export default DeliveryDashboard;
