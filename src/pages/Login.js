import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
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
    // Implement login logic here (e.g., API call)
    alert(`Login Successful!\nEmail: ${credentials.email}`);
    setCredentials({ email: "", password: "" });
  };

  return (
    <div className="login-page">
      <div className="hero-section text-center text-light d-flex align-items-center justify-content-center">
        <div className="container mt-auto">
          <h1 className="display-4 fw-bold">Login</h1>
          <p className="lead">Welcome back! Please login to access your account.</p>
        </div>
      </div>

      <div className="login-form-section py-5">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4">
              <form
                onSubmit={handleSubmit}
                className="bg-light p-4 rounded shadow"
              >
                <h2 className="text-center text-primary fw-bold mb-4">Login</h2>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-bold">
                    Email Address
                  </label>
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
                  <label htmlFor="password" className="form-label fw-bold">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary w-100 fw-bold"
                >
                  Login
                </button>
                <div className="text-center mt-3">
                  <p className="mb-0">
                    Don't have an account?{" "}
                    <a href="/register" className="text-decoration-none">
                      Register here
                    </a>
                  </p>
                  <p className="mb-0">
                    <a href="/register" className="text-decoration-none">
                      Forgot your password?
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
