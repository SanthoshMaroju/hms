// src/components/Billing/Billing.js
import React, { useState } from "react";
// import './Billing.css';

const Billing = () => {
  const [bills, setBills] = useState([
    { id: 1, patient: "John Doe", amount: 500 },
    { id: 2, patient: "Jane Roe", amount: 300 },
  ]);

  return (
    <div className="billing">
      <h2>Billing</h2>
      <ul>
        {bills.map((bill) => (
          <li key={bill.id}>
            {bill.patient} - ${bill.amount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Billing;
