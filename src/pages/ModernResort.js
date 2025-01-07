import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ModernResort.css";

import a1 from './ReactImg/boating.jpg';
import a2 from './ReactImg/resort food.jpg';
import a3 from './ReactImg/guide.jpg';
import a4 from './ReactImg/resort room.jpg';
import a5 from './ReactImg/resort campfire.jpg';
import a6 from './ReactImg/resort hill station.jpg';


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

const ModernResort = () => {
  return (
    <div className="modern-resort">
      {/* Hero Section */}
      <div className="hero1-section d-flex align-items-center justify-content-center text-center text-light">
        <div className="container mt-5">
          <h1 className="display-3 fw-bold text-primary " style={{textShadow:'white 2px 4px'}}>Discover <span style={{color:'black'}}> TamilNadu </span> Resorts</h1>
          <p className="lead">
            Unwind, Explore, and Savor at our luxurious Tamil Nadu resorts.
          </p>
          <a href="#packages" className="btn btn-outline-light btn-lg mt-3">
            Discover More <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>
          </a>
        </div>
      </div>

      {/* Packages Section */}
      <section id="packages" className="py-5">
        <div className="container-fluid">
          <h2 className="text-center text-black fw-bold mb-5">Our Services <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#000000"><path d="M400-483.33q-66 0-109.67-43.67-43.66-43.67-43.66-109.67t43.66-109.66Q334-790 400-790t109.67 43.67q43.66 43.66 43.66 109.66T509.67-527Q466-483.33 400-483.33ZM80-162.67v-100q0-34.33 17.33-62.66 17.34-28.34 49.34-43.34 65-30 127.33-45.33 62.33-15.33 126-15.33h12.33q6.34 0 11.67.66-6.67 15.34-10.5 30.84t-6.17 35.16H400q-62.33 0-118.17 14.34Q226-334 174.67-308.67q-13.67 7-20.84 19.67-7.16 12.67-7.16 26.33v33.34H410q5.33 19 13.33 35.5T442-162.67H80ZM658-120l-10.67-64q-15.33-5-30.5-13.17Q601.67-205.33 590-216l-56 14-30-50.67 46.67-42.66q-2-10.67-2-25.34 0-14.66 2-25.33L504-388.67l30-50.66 56 14q11.67-10.67 26.83-18.84 15.17-8.16 30.5-13.16l10.67-64h62.67l10.66 64q15.34 5 30.5 13.33 15.17 8.33 26.84 19.33l56-14.66 30 51.33L828-345.33q2 10 2 25t-2 25l46.67 42.66-30 50.67-56-14q-11.67 10.67-26.84 18.83-15.16 8.17-30.5 13.17l-10.66 64H658Zm31.33-120.67q35 0 57.5-22.5t22.5-57.5q0-35-22.5-57.5t-57.5-22.5q-35 0-57.5 22.5t-22.5 57.5q0 35 22.5 57.5t57.5 22.5ZM400-550q37 0 61.83-24.83 24.84-24.84 24.84-61.84t-24.84-61.83Q437-723.33 400-723.33t-61.83 24.83q-24.84 24.83-24.84 61.83t24.84 61.84Q363-550 400-550Zm0-86.67Zm10 407.34Z"/></svg></h2>
          <div className="row g-4">
            {/* Activities Card */}
            <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow">
                <img
                  src={a1}
                  className="card-img-top"
                  alt="Activities"
                />
                <div className="card-body">
                  <h5 className="card-title text-primary">Adventure Activities <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#0d6efd"><path d="m126-420 307.33-445.33V-420H126Zm127.67-66.67h113V-653l-113 166.33ZM509.33-420q16.67-49.33 27-113 10.34-63.67 10.34-133.67 0-68-10.17-135t-27.17-117Q561-900 617.17-852q56.16 48 103.66 115.33 47.5 67.34 79 148.84T833.33-420h-324ZM594-486.67h166q-17-83.66-60.17-159-43.16-75.33-93.5-125.66 4 27 5.5 53.83t1.5 50.83q0 46.34-5.83 95-5.83 48.67-13.5 85ZM360-197.33q-34.67 0-65.67-18T240-260.67q-14 14.34-32.5 27.67-18.5 13.33-37.17 20.67-31-20.67-55.83-57.17t-33.17-77.17h797.34Q870.33-306 845.5-269.5q-24.83 36.5-55.83 57.17Q771-219.67 752.5-233 734-246.33 720-260.67q-23.67 27.34-54.5 45.34-30.83 18-65.5 18t-65.67-18q-31-18-54.33-45.34-23.33 27.34-54.33 45.34-31 18-65.67 18ZM80-40v-66.67h40q32 0 61.83-10.33 29.84-10.33 58.17-35.67 28.33 25.34 58.5 35.5Q328.67-107 360-107q32 0 61.67-10.17 29.66-10.16 58.33-35.5 28.33 25.34 58.5 35.5Q568.67-107 600-107q32 0 61.67-10.17 29.66-10.16 58.33-35.5 28.67 25.34 58.33 35.67Q808-106.67 840-106.67h40V-40h-40q-29.67 0-60-8.17-30.33-8.16-60-28.5-29.67 20.34-60 28.5Q629.67-40 600-40t-60-8.17q-30.33-8.16-60-28.5-29.67 20.34-60 28.5Q389.67-40 360-40t-60-8.17q-30.33-8.16-60-28.5-29.67 20.34-60 28.5Q149.67-40 120-40H80Zm286.67-446.67Zm227.33 0Z"/></svg></h5>
                  <p className="card-text text-muted">
                    Dive into adventure with activities like trekking, boating,
                    and zip-lining.
                  </p>
                  <button className="btn btn-primary w-100 rounded-pill">
                    Explore Activities 
                  </button>
                </div>
              </div>
            </div>

            {/* Food Card */}
            <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow">
                <img
                  src={a2}
                  className="card-img-top"
                  alt="Food"
                />
                <div className="card-body">
                  <h5 className="card-title " style={{color:'purple'}} >Gourmet Dining <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#800080"><path d="M283.33-80v-367.33q-51.66-12-87.5-53.67Q160-542.67 160-600v-280h66.67v280h56.66v-280H350v280h56.67v-280h66.66v280q0 57.33-35.83 99T350-447.33V-80h-66.67Zm410 0v-320H576.67v-296.67q0-80.33 51.5-131.83Q679.67-880 760-880v800h-66.67Z"/></svg></h5>
                  <p className="card-text text-muted">
                    Indulge in authentic Tamil Nadu cuisine and global flavors
                    prepared by top chefs.
                  </p>
                  <button className="btn  w-100 rounded-pill" style={{color:'white',backgroundColor:'purple'}} >
                    Reserve a Table
                  </button>
                </div>
              </div>
            </div>

            {/* Tourist Guide Card */}
            <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow">
                <img
                  src={a3}
                  className="card-img-top"
                  alt="Guide"
                />
                <div className="card-body">
                  <h5 className="card-title text-danger">Tourist Guides <svg xmlns="http://www.w3.org/2000/svg" height="29px" viewBox="0 -960 960 960" width="29px" fill="#dc3545"><path d="M186.67-120q-27 0-46.84-19.83Q120-159.67 120-186.67v-586.66q0-27 19.83-46.84Q159.67-840 186.67-840h586.66q27 0 46.84 19.83Q840-800.33 840-773.33v586.66q0 27-19.83 46.84Q800.33-120 773.33-120H186.67Zm0-653.33v586.66h586.66v-586.66h-96V-494l-98.66-59.33L480-494v-279.33H186.67Zm0 586.66v-586.66 586.66Z"/></svg></h5>
                  <p className="card-text text-muted">
                    Explore Tamil Nadu’s heritage and beauty with expert
                    guidance.
                  </p>
                  <button className="btn btn-danger w-100 rounded-pill">
                    Hire a Guide
                  </button>
                </div>
              </div>
            </div>

   {/* room Card */}
   <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow">
                <img
                  src={a4}
                  className="card-img-top"
                  alt="room"
                />
                <div className="card-body">
                  <h5 className="card-title text-info">Relaxing Rooms <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#0dcaf0"><path d="M80-200v-250q0-25.67 10.33-47.67 10.34-22 29.67-37v-114.66Q120-696 152-728t78.67-32H404q22.33 0 41.67 9.5Q465-741 480-724.67q15-16.33 34-25.83t41.33-9.5h173.34q46.66 0 79 32Q840-696 840-649.33v114.66q19.33 15 29.67 37Q880-475.67 880-450v250h-66.67v-80H146.67v80H80Zm433.33-356.67h260v-92.66q0-19-12.83-31.5t-31.83-12.5H553.33q-17 0-28.5 13.16-11.5 13.17-11.5 30.84v92.66Zm-326.66 0h260v-92.66q0-17.67-11.5-30.84-11.5-13.16-28.5-13.16h-176q-18.34 0-31.17 12.83-12.83 12.83-12.83 31.17v92.66Zm-40 210h666.66V-450q0-17-11.5-28.5t-28.5-11.5H186.67q-17 0-28.5 11.5t-11.5 28.5v103.33Zm666.66 0H146.67h666.66Z"/></svg></h5>
                  <p className="card-text text-muted">
                    Feel free and get relaxed in our room and see the elegent view at outside .
                  </p>
                  <button className="btn btn-info w-100 rounded-pill">
                    Reserve a Table
                  </button>
                </div>
              </div>
            </div>

 {/* Campfire Card */}
 <div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow">
                <img
                  src={a5}
                  className="card-img-top"
                  alt="fire"
                />
                <div className="card-body">
                  <h5 className="card-title text-warning" >Camp Fire <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="#ffc107"><path d="M80-80v-184l358.67-484.67-68-91.33 54-39.33 55.33 75 56-75L589.33-840 522-748.67 880-264v184H80Zm400-612.33L146.67-242v95.33h136.66L480-422l196.67 275.33h136.66V-242L480-692.33ZM365.33-146.67h229.34L480-307.33 365.33-146.67ZM480-422l196.67 275.33L480-422 283.33-146.67 480-422Z"/>
                  </svg><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-fire" viewBox="0 0 16 16">
  <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15"/>
</svg></h5>
                  <p className="card-text text-muted">
                    spend your night time at camp and enjoy with your friends while eating 
                    Marshmallow .
                  </p>
                  <button className="btn btn-warning btn-text-light  w-100 rounded-pill">
                    Book a Campfire
                  </button>
                </div>
              </div>
            </div>

{/* Hillstation Card */}
<div className="col-lg-4 col-md-6">
              <div className="card border-0 shadow">
                <img
                  src={a6}
                  className="card-img-top"
                  alt="hill"
                />
                <div className="card-body">
                  <h5 className="card-title text-success" >Hillstation <svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="#198754"><path d="m40-240 240-320 190 253.33h316.67L560-608 443.33-453.33l-42-55.34L560-720l360 480H40Zm513.67-66.67Zm-380.34 0h213.34L280-449 173.33-306.67Zm0 0h213.34-213.34Z"/></svg></h5>
                  <p className="card-text text-muted">
                    Thrilling climbing experience at hill station and at forest to reach the peek with friends is more fun.
                  </p>
                  <button className="btn btn-success   w-100 rounded-pill" >
                    Book a Hillstation  trip
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials py-5 bg-light">
        <div className="container-fluid">
          <h2 className="text-center text-black fw-bold mb-5">What Guests Say <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m363-390 117-71 117 71-31-133 104-90-137-11-53-126-53 126-137 11 104 90-31 133ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z"/></svg></h2>
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <p className="text-muted">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
</svg> " It was an unforgettable experience! The food and activities were
                    top-notch."
                  </p>
                  <h6 className="text-dark fw-bold">- Meera P.</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <p className="text-muted">
                  <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-person-bounding-box" viewBox="0 0 16 16">
  <path d="M1.5 1a.5.5 0 0 0-.5.5v3a.5.5 0 0 1-1 0v-3A1.5 1.5 0 0 1 1.5 0h3a.5.5 0 0 1 0 1zM11 .5a.5.5 0 0 1 .5-.5h3A1.5 1.5 0 0 1 16 1.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 1-.5-.5M.5 11a.5.5 0 0 1 .5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 1 0 1h-3A1.5 1.5 0 0 1 0 14.5v-3a.5.5 0 0 1 .5-.5m15 0a.5.5 0 0 1 .5.5v3a1.5 1.5 0 0 1-1.5 1.5h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 1 .5-.5"/>
  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
</svg> "The guides made our trip so enriching. Highly recommended!"
                  </p>
                  <h6 className="text-dark fw-bold">- Arjun V.</h6>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card border-0 shadow-sm">
                <div className="card-body">
                  <p className="text-muted">
<svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
</svg>  "Perfect getaway spot. Amazing service and beautiful
                    surroundings."
                  </p>
                  <h6 className="text-dark fw-bold">- Priya S.</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section py-5 text-light text-center">
        <div className="container">
          <h2 className="fw-bold">Plan Your Dream Getaway Today!</h2>
          <p className="lead">
            Your perfect vacation in Tamil Nadu is just a click away.
          </p>
          <a href="/bookingpage" className="btn btn-outline-light btn-lg rounded-pill mt-3">
            Book Now <svg xmlns="http://www.w3.org/2000/svg" style={{verticalAlign:'middle'}} width="24" height="24" fill="currentColor" class="bi bi-airplane-fill" viewBox="0 0 16 16">
  <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849"/>
</svg>
          </a>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default ModernResort;
