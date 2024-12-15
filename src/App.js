// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from "./Navbar.js";
// import Dashboard from "./Dashboard.js";
// import Appointments from "./Appointments.js";
// import Patients from "./Patients.js";
// import Doctors from "./Doctors.js";
// import Billing from "./Billing.js";

// const App = () => {
//   return (
//     <Router>
//       <Navbar />
//       <div className="container">
//         <Routes>
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/appointments" element={<Appointments />} />
//           <Route path="/patients" element={<Patients />} />
//           <Route path="/doctors" element={<Doctors />} />
//           <Route path="/billing" element={<Billing />} />
//           <Route path="/" element={<Dashboard />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;
import React from "react";
import { Link } from "react-scroll";
import "./App.css";

function App() {
  return (
    <div>
      <header className="header">
        <div className="logo">HMS</div>
        <nav>
          <ul>
            <li>
              <Link to="overview" smooth={true} duration={500}>
                Overview
              </Link>
            </li>
            <li>
              <Link to="features" smooth={true} duration={500}>
                Features
              </Link>
            </li>
            <li>
              <Link to="testimonials" smooth={true} duration={500}>
                Testimonials
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section id="overview" className="section overview">
          <img
            src="https://via.placeholder.com/1200x400"
            alt="Clinic Management System"
            className="hero-image"
          />
          <h1>Welcome to Our Clinic Management System</h1>
          <p>
            Efficiently manage your clinic operations with our powerful and user-friendly system.
          </p>
        </section>

        {/* Features Section */}
        <section id="features" className="section features">
          <h2>Features</h2>
          <div className="features-container">
            <div className="feature-item">
              <img
                src="https://via.placeholder.com/100"
                alt="Appointment Scheduling"
              />
              <h3>Appointment Scheduling</h3>
              <p>Seamlessly book and manage appointments.</p>
            </div>
            <div className="feature-item">
              <img
                src="https://via.placeholder.com/100"
                alt="Billing"
              />
              <h3>Billing & Invoicing</h3>
              <p>Generate invoices and track payments effortlessly.</p>
            </div>
            <div className="feature-item">
              <img
                src="https://via.placeholder.com/100"
                alt="Patient Records"
              />
              <h3>Patient Records</h3>
              <p>Securely manage and access patient history.</p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="section testimonials">
          <h2>What Our Users Say</h2>
          <div className="testimonial-item">
            <img
              src="https://via.placeholder.com/80"
              alt="Dr. John"
            />
            <blockquote>
              “This system has transformed how we manage our clinic!” – Dr. John
            </blockquote>
          </div>
          <div className="testimonial-item">
            <img
              src="https://via.placeholder.com/80"
              alt="Dr. Smith"
            />
            <blockquote>
              “A must-have for any clinic!” – Dr. Smith
            </blockquote>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section contact">
          <h2>Contact Us</h2>
          <form>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default App;
