import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css";


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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate sending the message
    alert(`Thank you, ${formData.name}! Your message has been sent.`);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <div className="hero2-section text-center text-light d-flex align-items-center justify-content-center">
        <div className="container-fluid">
          <h1 className="display-4 fw-bold text-primary" style={{textShadow:'white 2px 4px 5px'}}><svg xmlns="http://www.w3.org/2000/svg"  width="45" height="45" style={{verticalAlign:'middle',color:'white'}} fill="currentColor" class="bi bi-flower3" viewBox="0 0 16 16">
  <path d="M11.424 8c.437-.052.811-.136 1.04-.268a2 2 0 0 0-2-3.464c-.229.132-.489.414-.752.767C9.886 4.63 10 4.264 10 4a2 2 0 1 0-4 0c0 .264.114.63.288 1.035-.263-.353-.523-.635-.752-.767a2 2 0 0 0-2 3.464c.229.132.603.216 1.04.268-.437.052-.811.136-1.04.268a2 2 0 1 0 2 3.464c.229-.132.489-.414.752-.767C6.114 11.37 6 11.736 6 12a2 2 0 1 0 4 0c0-.264-.114-.63-.288-1.035.263.353.523.635.752.767a2 2 0 1 0 2-3.464c-.229-.132-.603-.216-1.04-.268M9 4a2 2 0 0 1-.045.205q-.059.2-.183.484a13 13 0 0 1-.637 1.223L8 6.142l-.135-.23a13 13 0 0 1-.637-1.223 4 4 0 0 1-.183-.484A2 2 0 0 1 7 4a1 1 0 1 1 2 0M3.67 5.5a1 1 0 0 1 1.366-.366 2 2 0 0 1 .156.142q.142.15.326.4c.245.333.502.747.742 1.163l.13.232-.265.002a13 13 0 0 1-1.379-.06 4 4 0 0 1-.51-.083 2 2 0 0 1-.2-.064A1 1 0 0 1 3.67 5.5m1.366 5.366a1 1 0 0 1-1-1.732l.047-.02q.055-.02.153-.044.202-.048.51-.083a13 13 0 0 1 1.379-.06q.135 0 .266.002l-.131.232c-.24.416-.497.83-.742 1.163a4 4 0 0 1-.327.4 2 2 0 0 1-.155.142M9 12a1 1 0 0 1-2 0 2 2 0 0 1 .045-.206q.058-.198.183-.483c.166-.378.396-.808.637-1.223L8 9.858l.135.23c.241.415.47.845.637 1.223q.124.285.183.484A1.3 1.3 0 0 1 9 12m3.33-6.5a1 1 0 0 1-.366 1.366 2 2 0 0 1-.2.064q-.202.048-.51.083c-.412.045-.898.061-1.379.06q-.135 0-.266-.002l.131-.232c.24-.416.497-.83.742-1.163a4 4 0 0 1 .327-.4q.07-.074.114-.11l.041-.032a1 1 0 0 1 1.366.366m-1.366 5.366a2 2 0 0 1-.155-.141 4 4 0 0 1-.327-.4A13 13 0 0 1 9.74 9.16l-.13-.232.265-.002c.48-.001.967.015 1.379.06q.308.035.51.083.098.024.153.044l.048.02a1 1 0 1 1-1 1.732zM8 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>
</svg>Contact <span style={{color:'black'}}> TamilNadu Tourism</span> <svg xmlns="http://www.w3.org/2000/svg"  style={{color:'white'}} width="45" height="45" fill="currentColor" class="bi bi-flower3" viewBox="0 0 16 16">
  <path d="M11.424 8c.437-.052.811-.136 1.04-.268a2 2 0 0 0-2-3.464c-.229.132-.489.414-.752.767C9.886 4.63 10 4.264 10 4a2 2 0 1 0-4 0c0 .264.114.63.288 1.035-.263-.353-.523-.635-.752-.767a2 2 0 0 0-2 3.464c.229.132.603.216 1.04.268-.437.052-.811.136-1.04.268a2 2 0 1 0 2 3.464c.229-.132.489-.414.752-.767C6.114 11.37 6 11.736 6 12a2 2 0 1 0 4 0c0-.264-.114-.63-.288-1.035.263.353.523.635.752.767a2 2 0 1 0 2-3.464c-.229-.132-.603-.216-1.04-.268M9 4a2 2 0 0 1-.045.205q-.059.2-.183.484a13 13 0 0 1-.637 1.223L8 6.142l-.135-.23a13 13 0 0 1-.637-1.223 4 4 0 0 1-.183-.484A2 2 0 0 1 7 4a1 1 0 1 1 2 0M3.67 5.5a1 1 0 0 1 1.366-.366 2 2 0 0 1 .156.142q.142.15.326.4c.245.333.502.747.742 1.163l.13.232-.265.002a13 13 0 0 1-1.379-.06 4 4 0 0 1-.51-.083 2 2 0 0 1-.2-.064A1 1 0 0 1 3.67 5.5m1.366 5.366a1 1 0 0 1-1-1.732l.047-.02q.055-.02.153-.044.202-.048.51-.083a13 13 0 0 1 1.379-.06q.135 0 .266.002l-.131.232c-.24.416-.497.83-.742 1.163a4 4 0 0 1-.327.4 2 2 0 0 1-.155.142M9 12a1 1 0 0 1-2 0 2 2 0 0 1 .045-.206q.058-.198.183-.483c.166-.378.396-.808.637-1.223L8 9.858l.135.23c.241.415.47.845.637 1.223q.124.285.183.484A1.3 1.3 0 0 1 9 12m3.33-6.5a1 1 0 0 1-.366 1.366 2 2 0 0 1-.2.064q-.202.048-.51.083c-.412.045-.898.061-1.379.06q-.135 0-.266-.002l.131-.232c.24-.416.497-.83.742-1.163a4 4 0 0 1 .327-.4q.07-.074.114-.11l.041-.032a1 1 0 0 1 1.366.366m-1.366 5.366a2 2 0 0 1-.155-.141 4 4 0 0 1-.327-.4A13 13 0 0 1 9.74 9.16l-.13-.232.265-.002c.48-.001.967.015 1.379.06q.308.035.51.083.098.024.153.044l.048.02a1 1 0 1 1-1 1.732zM8 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>
</svg></h1>
          <p className="lead">
            Have a question or need assistance? We’re here to help!
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="contact-form-section py-5">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <form
                onSubmit={handleSubmit}
                className="bg-light p-4 rounded shadow"
              >
                <h2 className="text-center text-primary fw-bold mb-4">
                  Get in Touch
                </h2>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-bold">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
</svg>  Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-bold">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-at-fill" viewBox="0 0 16 16">
  <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671"/>
  <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791"/>
</svg>   Email Address
                  </label>
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
                  <label htmlFor="subject" className="form-label fw-bold">
                  <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000000"><path d="M564-578v-76q31-10 64-14.5t68-4.5q23 0 46.5 2.5T792-663v74q-30-7-53-10t-43-3q-34 0-67 6t-65 18Zm0 236v-76q28-9 60-14.5t72-5.5q27 0 50.5 3t45.5 8v74q-30-7-53-10t-43-3q-34 0-67 6t-65 18Zm0-118v-76q32-10 65.5-15t66.5-5q27 0 50.5 3t45.5 8v74q-26-7-49.5-10t-46.5-3q-32 0-64.5 6T564-460ZM264-288q47 0 92 12t88 30v-454q-42-22-87-33t-93-11q-37 0-73.5 6.5T120-716v452q35-13 71-18.5t73-5.5Zm252 42q43-20 88-31t92-11q37 0 73.5 4.5T840-264v-452q-35-13-71-20.5t-73-7.5q-48 0-93 11t-87 33v454Zm-36 102q-49-32-103-52t-113-20q-38 0-76 7.5T115-186q-24 10-45.5-3.5T48-229v-503q0-14 7.5-26T76-776q45-20 92-30t96-10q57 0 111.5 13.5T480-762q51-26 105-40t111-14q49 0 96 10t92 30q13 6 21 18t8 26v503q0 25-15.5 40t-32.5 7q-40-18-82.5-26t-86.5-8q-59 0-113 20t-103 52ZM283-495Z"/></svg>  Subject
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Enter the subject"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label fw-bold">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left-text-fill" viewBox="0 0 16 16">
  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z"/>
</svg>  Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary w-100 fw-bold"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
