// src/components/Dashboard/Dashboard.js
import React from "react";
// import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Welcome to the Clinic Management System</h2>
      <div className="stats">
        <div>Total Patients: 120</div>
        <div>Appointments Today: 15</div>
        <div>Available Doctors: 5</div>
      </div>
    </div>
  );
};

export default Dashboard;
