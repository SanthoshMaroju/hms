// src/components/Doctors/Doctors.js
import React from "react";
// import './Doctors.css';

const Doctors = () => {
  const doctors = [
    { id: 1, name: "Dr. Smith", specialty: "Cardiology" },
    { id: 2, name: "Dr. Brown", specialty: "Orthopedics" },
  ];

  return (
    <div className="doctors">
      <h2>Doctors</h2>
      <ul>
        {doctors.map((doc) => (
          <li key={doc.id}>
            {doc.name} - {doc.specialty}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Doctors;
