// src/components/Patients/Patients.js
import React, { useState } from "react";
// import './Patients.css';

const Patients = () => {
  const [patients, setPatients] = useState([
    { id: 1, name: "John Doe", age: 34, condition: "Flu" },
    { id: 2, name: "Jane Roe", age: 28, condition: "Back Pain" },
  ]);

  return (
    <div className="patients">
      <h2>Patient List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Condition</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.name}</td>
              <td>{patient.age}</td>
              <td>{patient.condition}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Patients;
