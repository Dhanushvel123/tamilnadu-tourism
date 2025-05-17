import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import "./BookingPage.css";

const Footer = () => (
  <footer className="bg-dark text-light pt-4 w-100" style={{ minHeight: '400px' }}>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4 mb-3">
          <h5 className="text-warning">About Tamil Nadu Tourism</h5>
          <p style={{ whiteSpace: 'pre-line' }}>
            Experience the rich culture, vibrant festivals,
            and breathtaking attractions that Tamil Nadu has to offer. Plan your visit today!
          </p>
        </div>
        <div className="col-md-4 mb-3">
          <h5 className="text-warning">Quick Links</h5>
          {["Home", "Packages", "Resort", "Contact", "Booking"].map((link, i) => (
            <a key={i} className="text-white d-block fs-6 py-1" style={{ textDecoration: 'none' }} href={`/${link.toLowerCase()}`}>
              {link}
            </a>
          ))}
        </div>
        <div className="col-md-4 mb-3">
          <h5 className="text-warning">Contact Us</h5>
          <p><i className="bi bi-geo-alt-fill"></i> Chennai, Tamil Nadu, India</p>
          <p><i className="bi bi-telephone-fill"></i> +91 9876543210</p>
          <p><i className="bi bi-envelope-fill"></i> info@tamilnadutourism.com</p>
        </div>
      </div>
      <div className="row text-center pt-3 border-top border-secondary">
        <div className="col-12">
          <p className="mb-0">&copy; 2024 Tamil Nadu Tourism. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </footer>
);

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

const BookingPage = () => {
  const formRef = useRef();
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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if ((type === "checkbox") && (name === "locations" || name === "packages")) {
      setFormData((prev) => {
        const updated = checked
          ? [...prev[name], value]
          : prev[name].filter((item) => item !== value);
        return { ...prev, [name]: updated };
      });
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === "number" ? Number(value) : value,
      }));
    }
  };

  const calculateTotalCost = () => {
    const locationCost = locationsList
      .filter((loc) => formData.locations.includes(loc.name))
      .reduce((sum, loc) => sum + loc.price, 0);
    const packageCost = packagesList
      .filter((pkg) => formData.packages.includes(pkg.name))
      .reduce((sum, pkg) => sum + pkg.price, 0);
    return (locationCost + packageCost) * formData.guests;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const totalCost = calculateTotalCost();

    formRef.current.totalcost.value = totalCost;
    formRef.current.locations.value = formData.locations.length > 0 ? formData.locations.join(" ") : "None";
    formRef.current.packages.value = formData.packages.length > 0 ? formData.packages.join(" ") : "None";

    emailjs.sendForm(
      "service_h80b8vk",
      "template_yucr1j7",
      formRef.current,
      "3TRgPFG_SW0AybQxx"
    )
      .then(() => {
        window.alert("✅ Booking successful! We'll contact you soon.");
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
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        window.alert("❌ Oops! Something went wrong. Please try again.");
      });
  };

  return (
    <div className="booking-page fade-in">
      <section className="hero-section">
        <div className="hero-content text-white">
          <h1>Welcome to Tamil Nadu Tours</h1>
          <p>Book your unforgettable journey now!</p>
        </div>
      </section>

      <div className="booking-form-section container">
        <h2 className="text-center text-primary fw-bold mb-4">Book Your Visit</h2>
        <form ref={formRef} onSubmit={handleSubmit} className="bg-light p-4 rounded shadow mx-auto" style={{ maxWidth: "700px" }}>
          {/* Hidden inputs for EmailJS */}
          <input type="hidden" name="totalcost" />
          <input type="hidden" name="locations" />
          <input type="hidden" name="packages" />

          <div className="mb-3">
            <label className="form-label">Name:</label>
            <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Email:</label>
            <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone:</label>
            <input type="text" className="form-control" name="phone" value={formData.phone} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">📍 Choose Your Locations</label>
            <div className="row">
              {locationsList.map((loc, idx) => (
                <div key={idx} className="col-md-6 col-lg-6">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="locations"
                      value={loc.name}
                      onChange={handleChange}
                      checked={formData.locations.includes(loc.name)}
                    />
                    <label className="form-check-label">
                      {loc.name} (₹{loc.price})
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label fw-bold">🗓️ Choose Your Packages</label>
            <div className="row">
              {packagesList.map((pkg, idx) => (
                <div key={idx} className="col-md-6 col-lg-6">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name="packages"
                      value={pkg.name}
                      onChange={handleChange}
                      checked={formData.packages.includes(pkg.name)}
                    />
                    <label className="form-check-label">
                      {pkg.name} (₹{pkg.price})
                    </label>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Visit Date:</label>
            <input type="date" className="form-control" name="visitDate" value={formData.visitDate} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Leave Date:</label>
            <input type="date" className="form-control" name="leaveDate" value={formData.leaveDate} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Number of Guests:</label>
            <input type="number" className="form-control" name="guests" value={formData.guests} min={1} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <strong>Total Cost: ₹{calculateTotalCost()}</strong>
          </div>

          <button type="submit" className="btn btn-primary w-100">Submit Booking</button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default BookingPage;
