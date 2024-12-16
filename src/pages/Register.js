import React from "react";
import "./Register.css";

const RegisterPage = () => {
  return (
    
    <div className="register-page bg-light">
        <div className="hero4-section text-center text-light d-flex align-items-center justify-content-center">
        <div className="container mt-auto">
          <h1 className="display-4 fw-bold">Register with Us</h1>
          <p className="lead">Create your account , and stay Tuned.</p>
        </div>
      </div>
      <div className="container py-5">
        <h2 className="text-center text-primary fw-bold mb-4">Register</h2>
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8">
            <div className="card shadow-sm">
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label fw-bold">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label fw-bold">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label fw-bold">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label fw-bold">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Create a password"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label fw-bold">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="confirmPassword"
                      placeholder="Confirm your password"
                    />
                  </div>
                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                      Register
                    </button>
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
            {/* About Section */}
            <div className="col-md-4 mb-3">
              <h5 className="text-warning">About Tamil Nadu Tourism</h5>
              <p>
                Experience the rich culture, vibrant festivals, and breathtaking attractions
                that Tamil Nadu has to offer. Plan your visit today!
              </p>
            </div>

            {/* Quick Links Section */}
            <div className="col-md-4 mb-3">
              <h5 className="text-warning">Quick Links</h5>
              <div>
                <a className="text-white d-block fs-6 py-1" href="/" style={{ textDecoration: "none" }}>
                  Home
                </a>
                <a className="text-white d-block fs-6 py-1" href="/packages" style={{ textDecoration: "none" }}>
                  Packages
                </a>
                <a className="text-white d-block fs-6 py-1" href="/modernResort" style={{ textDecoration: "none" }}>
                  Resort
                </a>
                <a className="text-white d-block fs-6 py-1" href="/contact" style={{ textDecoration: "none" }}>
                  Contact
                </a>
                <a className="text-white d-block fs-6 py-1" href="/bookingpage" style={{ textDecoration: "none" }}>
                  Booking
                </a>
              </div>
            </div>

            {/* Contact Information Section */}
            <div className="col-md-4 mb-3">
              <h5 className="text-warning">Contact Us</h5>
              <p>
                <i className="bi bi-geo-alt-fill"></i> Chennai, Tamil Nadu, India
              </p>
              <p>
                <i className="bi bi-telephone-fill"></i> +91 9876543210
              </p>
              <p>
                <i className="bi bi-envelope-fill"></i> info@tamilnadutourism.com
              </p>
            </div>
          </div>

          {/* Footer Bottom Section */}
          <div className="row text-center pt-3 border-top border-secondary">
            <div className="col-12">
              <p className="mb-0">&copy; 2024 Tamil Nadu Tourism. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RegisterPage;
