import React, { useState } from "react";
import "./Register.css";

const RegisterPage = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (credentials.password !== credentials.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert(`Registered Successfully!\nEmail: ${credentials.email}
      Name: ${credentials.name}
      Phone Number: ${credentials.phoneNumber}
      `);
    setCredentials({
      name: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="register-page bg-light">
      <div className="hero4-section text-center text-light d-flex align-items-center justify-content-center">
        <div className="container mt-auto">
          <h1 className="display-4 fw-bold text-primary" style={{ textShadow: "white 2px 4px" }}>
            Register <span style={{ color: "black" }}>with Us</span>
          </h1>
          <p className="lead">Create your account, and stay tuned.</p>
        </div>
      </div>

      <div className="container py-5">
        <h2 className="text-center text-primary fw-bold mb-4">Register</h2>
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8">
            <div className="card shadow-sm">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label fw-bold"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
</svg>Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={credentials.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label fw-bold"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-at-fill" viewBox="0 0 16 16">
  <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671"/>
  <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791"/>
</svg>Email Address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={credentials.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="phoneNumber" className="form-label fw-bold"> <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000000"><path d="M80-120q-33 0-56.5-23.5T0-200v-560q0-33 23.5-56.5T80-840h800q33 0 56.5 23.5T960-760v560q0 33-23.5 56.5T880-120H80Zm556-80h244v-560H80v560h4q42-75 116-117.5T360-360q86 0 160 42.5T636-200ZM360-400q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm400 160 80-80-60-80h-66q-6-18-10-38.5t-4-41.5q0-21 4-40.5t10-39.5h66l60-80-80-80q-54 42-87 106.5T640-480q0 69 33 133.5T760-240Zm-578 40h356q-34-38-80.5-59T360-280q-51 0-97 21t-81 59Zm178-280q-17 0-28.5-11.5T320-520q0-17 11.5-28.5T360-560q17 0 28.5 11.5T400-520q0 17-11.5 28.5T360-480Zm120 0Z"/></svg>Phone Number</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={credentials.phoneNumber}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label fw-bold"> <svg xmlns="http://www.w3.org/2000/svg" height="22px" style={{verticalAlign:'top'}} viewBox="0 -960 960 960" width="22px" fill="#000000"><path d="M144-192v-96q0-23 12.5-43.5T191-366q55-32 116.36-49T432-432q24 0 48 2.5t48 7.5q-1 46 19 87.5t55 71v71.5H144ZM750-72l-54-54.15V-294q-42-11-69-46t-27-80.19q0-54.61 38.72-93.21 38.72-38.6 93.5-38.6t93.28 38.66Q864-474.69 864-420q0 42.58-24.65 75.69Q814.7-311.19 777-297l45 45-54 54 54 54-72 72ZM432-480q-60 0-102-42t-42-102q0-60 42-102t102-42q60 0 102 42t42 102q0 60-42 102t-102 42Zm299.79 72q15.21 0 25.71-10.29t10.5-25.5q0-15.21-10.29-25.71t-25.5-10.5q-15.21 0-25.71 10.29t-10.5 25.5q0 15.21 10.29 25.71t25.5 10.5Z"/></svg>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      value={credentials.password}
                      onChange={handleChange}
                      placeholder="Create a password"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label fw-bold"> <svg xmlns="http://www.w3.org/2000/svg" height="22px"  style={{verticalAlign:'top'}} viewBox="0 -960 960 960" width="22px" fill="#000000"><path d="M422-360h116l-22-129q16.74-8.94 26.37-25.93 9.63-16.99 9.63-37.56Q552-582 530.79-603q-21.21-21-51-21T429-602.85Q408-581.7 408-552q0 20.41 9.63 37.27Q427.26-497.87 444-489l-22 129Zm58 264q-135-33-223.5-152.84Q168-368.69 168-515v-229l312-120 312 120v229q0 146.31-88.5 266.16Q615-129 480-96Zm0-75q104-32.25 172-129t68-215v-180l-240-92-240 92v180q0 118.25 68 215t172 129Zm0-308Z"/></svg>Confirm Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={credentials.confirmPassword}
                      onChange={handleChange}
                      placeholder="Confirm your password"
                      required
                    />
                  </div>

                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary">Register</button>
                    <p className="mb-0 text-center mt-3">
                      Already have an account?{" "}
                      <a href="/login" className="text-decoration-none">Login</a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Component */}
      <footer className="bg-dark text-light pt-4">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 mb-3">
              <h5 className="text-warning">About Tamil Nadu Tourism</h5>
              <p>
                Experience the rich culture, vibrant festivals, and breathtaking attractions
                that Tamil Nadu has to offer. Plan your visit today!
              </p>
            </div>

            <div className="col-md-4 mb-3">
              <h5 className="text-warning">Quick Links</h5>
              <a className="text-white d-block fs-6 py-1" href="/" style={{ textDecoration: "none" }}>Home</a>
              <a className="text-white d-block fs-6 py-1" href="/about" style={{ textDecoration: "none" }}>About</a>
              <a className="text-white d-block fs-6 py-1" href="/contact" style={{ textDecoration: "none" }}>Contact</a>
            </div>

            <div className="col-md-4 mb-3">
              <h5 className="text-warning">Contact Us</h5>
              <p>Email: support@tamilnadutourism.com</p>
              <p>Phone: +91 98765 43210</p>
            </div>
          </div>
        </div>
        <div className="text-center py-3 bg-black">
          &copy; 2024 Tamil Nadu Tourism. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default RegisterPage;
