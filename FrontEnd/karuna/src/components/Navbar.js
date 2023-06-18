import React from "react";

const Navbar = () => {
  return (
    <nav>
      <a href="/">
        <img src="" alt="Logo" />
      </a>
      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/about">About Us</a></li>
        <li>
          <a href="#">Login</a>
          <ul>
            <li><a href="/login/donor">Donor</a></li>
            <li><a href="/login/receiver">Receiver</a></li>
            <li><a href="/login/staff">Staff</a></li>
          </ul>
        </li>
        <li><a href="/signup">Sign Up</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
