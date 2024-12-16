import React, { useState } from "react";
import './BookingPage.css';
import "bootstrap/dist/css/bootstrap.min.css";



const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-4 w-100 " style={{ minHeight: '400px' }}>
      <div className="container-fluid">
        <div className="row">
          {/* About Section */}
          <div className="col-md-4 mb-3">
            <h5 className="text-warning">About Tamil Nadu Tourism</h5>
            <p style={{whiteSpace:'pre-line'}}>
              Experience the rich culture, vibrant festivals, 
              and breathtaking attractions that 
              Tamil Nadu has to offer. Plan your visit today!
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="col-md-4 mb-3" >
            <h5 className="text-warning">Quick Links</h5>
            <div>
              <a
                className="text-white d-block fs-6 py-1"
                style={{ textDecoration: 'none', marginBottom: '8px' }}
                href="/"
              >
                Home
              </a>
              <a
                className="text-white d-block fs-6 py-1"
                style={{ textDecoration: 'none', marginBottom: '8px' }}
                href="/packages"
              >
                Packages
              </a>
              <a
                className="text-white d-block fs-6 py-1"
                style={{ textDecoration: 'none', marginBottom: '8px' }}
                href="/modernResort"
              >
                Resort
              </a>
              <a
                className="text-white d-block fs-6 py-1"
                style={{ textDecoration: 'none', marginBottom: '8px' }}
                href="/contact"
              >
                Contact
              </a>
              <a
                className="text-white d-block fs-6 py-1"
                style={{ textDecoration: 'none', marginBottom: '8px' }}
                href="/bookingpage"
              >
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
            <p className="mb-0">
              &copy; 2024 Tamil Nadu Tourism. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const BookingPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    locations: [],
    packages: [],
    visitDate: "",
    leaveDate: "",
    guests: 1,
  });

  const locationsList = [
    { name: "Thanjavur", price: 6000 },
    { name: "Madurai", price: 5000 },
    { name: "Ooty", price: 7000 },
    { name: "Kodaikanal", price: 7500 },
    { name: "Kanniyakumari", price: 5500 },
    { name: "Rameshwaram", price: 6200 },
    { name: "Coimbatore", price: 5800 },
    { name: "Vedanthangal", price: 4000 },
    { name: "Velankanni", price: 4500 },
  ];

  const packagesList = [
    { name: "Adventure Activities", price: 3000 },
    { name: "Gourmet Dining", price: 1700 },
    { name: "Heritage Tour", price: 2000 },
    { name: "Tourist Guide", price: 4500 },
    { name: "Relaxing Rooms", price: 2800 },
    { name: "CampFire", price: 1000 },
    { name: "Hills Trip", price: 3000 },
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => {
        if (name === "locations") {
          const updatedLocations = checked
            ? [...prev.locations, value]
            : prev.locations.filter((loc) => loc !== value);
          return { ...prev, locations: updatedLocations };
        }
        if (name === "packages") {
          const updatedPackages = checked
            ? [...prev.packages, value]
            : prev.packages.filter((pkg) => pkg !== value);
          return { ...prev, packages: updatedPackages };
        }
        return prev;
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Booking Submitted Successfully!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      locations: [],
      packages: [],
      visitDate: "",
      leaveDate: "",
      guests: 1,
    });
  };

  // Calculate total cost
  const calculateTotalCost = () => {
    const selectedLocations = locationsList.filter((loc) =>
      formData.locations.includes(loc.name)
    );
    const selectedPackages = packagesList.filter((pkg) =>
      formData.packages.includes(pkg.name)
    );

    const locationCost = selectedLocations.reduce((acc, loc) => acc + loc.price, 0);
    const packageCost = selectedPackages.reduce((acc, pkg) => acc + pkg.price, 0);

    return (locationCost + packageCost) * formData.guests;
  };

  return (
    <div className="booking-page">
      {/* Hero Section */}
      <div className="hero-section text-center d-flex align-items-center justify-content-center">
        <div className="container-fluid text-light mt-auto">
          <h1 className="display-4 fw-bold ">Book Your Tamil Nadu Experience</h1>
          <p className="lead">Reserve your spot today and explore the beauty of Tamil Nadu.</p>
        </div>
      </div> 

      {/* Booking Form Section */}
      <div className="booking-form-section py-5">
        <div className="container-fluid">
          <h2 className="text-center text-primary fw-bold mb-4">Book Your Visit</h2>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-bold">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-bold">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label fw-bold">Phone Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                {/* Location Selection */}
                <div className="mb-3">
                  <label className="form-label fw-bold">Choose Your Locations</label>
                  <div className="row">
                    {locationsList.map((location, index) => (
                      <div className="col-sm-6" key={index}>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="locations"
                            value={location.name}
                            id={`location-${index}`}
                            onChange={handleChange}
                            checked={formData.locations.includes(location.name)}
                          />
                          <label className="form-check-label" htmlFor={`location-${index}`}>
                            {location.name} (₹{location.price})
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Package Selection */}
                <div className="mb-3">
                  <label className="form-label fw-bold">Choose Your Packages</label>
                  <div className="row">
                    {packagesList.map((pkg, index) => (
                      <div className="col-sm-6" key={index}>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="packages"
                            value={pkg.name}
                            id={`package-${index}`}
                            onChange={handleChange}
                            checked={formData.packages.includes(pkg.name)}
                          />
                          <label className="form-check-label" htmlFor={`package-${index}`}>
                            {pkg.name} (₹{pkg.price})
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Date of Visit */}
                <div className="mb-3">
                  <label htmlFor="visitDate" className="form-label fw-bold">Date of Visit</label>
                  <input
                    type="date"
                    className="form-control"
                    id="visitDate"
                    name="visitDate"
                    value={formData.visitDate}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Date of Leave */}
                <div className="mb-3">
                  <label htmlFor="leaveDate" className="form-label fw-bold">Date of Leave</label>
                  <input
                    type="date"
                    className="form-control"
                    id="leaveDate"
                    name="leaveDate"
                    value={formData.leaveDate}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="guests" className="form-label fw-bold">Number of Guests</label>
                  <input
                    type="number"
                    className="form-control"
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    placeholder="Enter number of guests"
                    min="1"
                    minLength={'1'}
                    required
                  />
                </div>

                {/* Display Total Summary */}
                <div className="mb-3">
                  <h5 className="fw-bold">Booking Summary</h5>
                  <p>
                    <strong>Selected Locations:</strong> {formData.locations.join(", ") || "None"}
                  </p>
                  <p>
                    <strong>Selected Packages:</strong> {formData.packages.join(", ") || "None"}
                  </p>
                  <p>
                    <strong>Total Price:</strong> ₹{calculateTotalCost()}
                  </p>
                </div>

                <button type="submit" className="btn btn-primary w-100">Submit Booking</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default BookingPage;
