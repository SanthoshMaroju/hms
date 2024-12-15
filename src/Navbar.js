// src/components/Navbar/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Clinic Management System</h1>
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/appointments">Appointments</Link></li>
        <li><Link to="/patients">Patients</Link></li>
        <li><Link to="/doctors">Doctors</Link></li>
        <li><Link to="/billing">Billing</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
