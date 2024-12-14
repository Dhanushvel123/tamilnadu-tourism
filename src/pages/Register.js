import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Register.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center text-primary mb-4">Register for Tamil Nadu Tourism</h2>
      <div className="row justify-content-center p-3" id='fr' style={{border:'1px solid black'}}>
        <div className="col-12 col-md-8 col-lg-6">
          <Form>
            {/* Full Name */}
            <Form.Group controlId="formFullName" className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your full name" required />
            </Form.Group>

            {/* Email */}
            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" required />
            </Form.Group>

            {/* Phone Number */}
            <Form.Group controlId="formPhone" className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="tel" placeholder="Enter your phone number" required />
            </Form.Group>

            {/* Password */}
            <Form.Group controlId="formPassword" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Create a password" required />
            </Form.Group>

            {/* Confirm Password */}
            <Form.Group controlId="formConfirmPassword" className="mb-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm your password" required />
            </Form.Group>

            {/* Terms and Conditions */}
            <Form.Group controlId="formTerms" className="mb-3">
              <Form.Check 
                type="checkbox" 
                label="I agree to the terms and conditions" 
                required 
              />
            </Form.Group>

            {/* Submit Button */}
            <Button variant="primary" type="submit" className="w-100">
              Register
            </Button>
            <div className="text-center mt-3">
                  <p className="mb-0">
                    Already have an account?{" "}
                    <a href="/login" className="text-decoration-none fs-5">
                      Login
                    </a>
                  </p>
                  </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
