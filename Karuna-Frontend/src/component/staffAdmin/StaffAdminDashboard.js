import React from "react";
import { Link } from "react-router-dom";


const StaffAdminDashboard = () => {
  const don = JSON.parse(localStorage.getItem("user")).data

  return (
    <div id="dassh">
      <div className="menu">
              
        <ul>
        <li><h5>{don.name}</h5></li>
          <hr></hr>
          <Link to="/staffadminprofile"><li>Profile</li></Link>
          {/* <Link to="/donorhistory"><li>History</li></Link> */}
          <Link to="/donorcampaign"><li>Campaigns</li></Link>
          <Link to="/receiverlist"><li>Receivers</li></Link>
          <Link to="/receiverlist"><li>Donors</li></Link>
          <Link to="/receiverlist"><li>Staff</li></Link>
          <Link to="/receiverlist"><li>Requests</li></Link>

        </ul>
      </div>
    </div>
  );
};

export default StaffAdminDashboard;
