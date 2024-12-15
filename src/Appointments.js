// src/components/Appointments/Appointments.js
import React, { useState, useEffect } from "react";
// import './Appointments.css';

const Appointments = () => {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    // Fetch appointments data (dummy data used here)
    setAppointments([
      { id: 1, patient: "John Doe", doctor: "Dr. Smith", time: "10:00 AM" },
      { id: 2, patient: "Jane Roe", doctor: "Dr. Brown", time: "11:30 AM" },
    ]);
  }, []);

  return (
    <div className="appointments">
      <h2>Appointments</h2>
      <ul>
        {appointments.map((appt) => (
          <li key={appt.id}>
            {appt.patient} with {appt.doctor} at {appt.time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Appointments;
