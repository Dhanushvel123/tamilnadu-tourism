import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

// Images for packages
import d4 from './ReactImg/thanjavur.jpg';
import d5 from './ReactImg/ooty.jpeg';
import d6 from './ReactImg/thiru.jpg';
import d7 from './ReactImg/church.jpg';
import d8 from './ReactImg/madurai.jpg';
import d9 from './ReactImg/kodaikanal.jpg';
import d10 from './ReactImg/vedanthangal.jpg';
import d11 from './ReactImg/adiyogi siva.jpg';
import d12 from './ReactImg/rameswaram.jpg';


const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-4 w-100 mt-5" style={{ minHeight: '400px' }}>
        <div className="row">
      <div className="container-fluid">
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

// Packages data
const packages = [
  {
    title: 'Heritage Tour: Brihadeeswara Temple',
    location: 'Thanjavur',
    description: 'Explore the architectural marvel of the Chola dynasty.',
    img: d4,
    price: '₹6,000',
    rating: 4.5,
  },
  {
    title: 'Hill Station Retreat: Ooty',
    location: 'Udhagamandalam',
    description: 'Relax amidst the cool, scenic hills of Ooty.',
    img: d5,
    price: '₹7,000',
    rating: 4.7,
  },
  {
    title: 'Historic Tour: Thiruvalluvar Statue',
    location: 'Kanniyakumari',
    description: 'Visit the iconic monument dedicated to the poet-saint.',
    img: d6,
    price: '₹5,500',
    rating: 4.2,
  },
  {
    title: 'Religious Tour: Velankanni Church',
    location: 'Velankanni',
    description: 'A serene pilgrimage site with historic significance.',
    img: d7,
    price: '₹4,500',
    rating: 4.3,
  },
  {
    title: 'Spiritual Retreat: Meenakshi Temple',
    location: 'Madurai',
    description: 'Experience the grandeur of this historic temple.',
    img: d8,
    price: '₹5,000',
    rating: 4.8,
  },
  {
    title: 'Hill Adventure: Kodaikanal',
    location: 'Kodaikanal',
    description: 'A perfect destination for nature lovers and trekkers.',
    img: d9,
    price: '₹7,500',
    rating: 4.6,
  },
  {
    title: 'Wildlife Excursion: Vedanthangal Sanctuary',
    location: 'Madurantakam',
    description: 'Witness a variety of migratory birds in their habitat.',
    img: d10,
    price: '₹4,000',
    rating: 4.0,
  },
  {
    title: 'Cultural Tour: Adiyogi Shiva',
    location: 'Coimbatore',
    description: 'Explore the spirituality and grandeur of Adiyogi.',
    img: d11,
    price: '₹5,800',
    rating: 4.4,
  },
  {
    title: 'Beach Getaway: Dhanushkodi',
    location: 'Ramanathapuram',
    description: 'Relax at the serene beaches of Dhanushkodi.',
    img: d12,
    price: '₹6,200',
    rating: 4.5,
  },
];

// Component to render star ratings using the provided SVG
const renderStars = (rating) => {
  const fullStar = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="gold"
      className="bi bi-star-fill"
      viewBox="0 0 16 16"
    >
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
    </svg>
  );

  const halfStar = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="gold"
      className="bi bi-star-half"
      viewBox="0 0 16 16"
    >
      <path d="M5.354 5.119L7.538.792a.5.5 0 01.927 0l2.184 4.327 4.898.696a.5.5 0 01.283.95l-3.522 3.356.83 4.73a.5.5 0 01-.746.592L8 13.187l-4.389 2.256a.5.5 0 01-.746-.592l.83-4.73L.173 6.765a.5.5 0 01.283-.95l4.898-.696z" />
    </svg>
  );

  const emptyStar = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="gray"
      className="bi bi-star"
      viewBox="0 0 16 16"
    >
      <path d="M2.866 14.85c-.078.444.36.79.746.592l4.389-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L7.538.792a.5.5 0 00-.927 0l-2.184 4.327-4.898.696a.5.5 0 00-.283.95l3.522 3.356-.83 4.73z" />
    </svg>
  );

  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(fullStar);
    } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
      stars.push(halfStar);
    } else {
      stars.push(emptyStar);
    }
  }
  return <div className="d-flex">{stars}</div>;
};

// Packages component
const Packages = () => {
  return (
    <div className="container-fluid my-4">
      <h1 className="text-center  text-primary mb-4"  style={{textShadow:'black 0px 5px 5px'}}><svg xmlns="http://www.w3.org/2000/svg" height="42px" style={{verticalAlign:'top'}} viewBox="0 -960 960 960" width="42px" fill="#0d6efd"><path d="M160-80v-240h120v240H160Zm200 0v-476q-50 17-65 62.5T280-400h-80q0-128 75-204t205-76q100 0 150-49.5T680-880h80q0 88-37.5 157.5T600-624v544h-80v-240h-80v240h-80Zm120-640q-33 0-56.5-23.5T400-800q0-33 23.5-56.5T480-880q33 0 56.5 23.5T560-800q0 33-23.5 56.5T480-720Z"/></svg>Tour <span style={{color:'black'}}> Packages</span></h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {packages.map((pkg, index) => (
          <div className="col " key={index}>
            <Card className="h-100  shadow-sm">
              <Card.Img variant="top" src={pkg.img} alt={pkg.title} />
              <Card.Body>
                <Card.Title className="text-success">{pkg.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted"><h3 style={{color:'purple'}}>{pkg.location}</h3></Card.Subtitle>
                <Card.Text>{pkg.description}</Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="rating">{renderStars(pkg.rating)}{pkg.rating}</div>
                  <span className="text-primary fw-bold">{pkg.price}</span>
                </div>
              </Card.Body>
              <Card.Footer>
                <Button variant="outline-primary" href='/bookingpage' className="w-100">
                  Book Now
                </Button>
              </Card.Footer>
            </Card>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default Packages;
