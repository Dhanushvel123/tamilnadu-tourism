import React from 'react';
import d1 from './ReactImg/logo.jpg';
import d2 from './ReactImg/mount.jpg';
import d3 from './ReactImg/bridge.jpg';
import d4 from './ReactImg/thanjavur.jpg';
import d5 from './ReactImg/ooty.jpeg';
import d6 from './ReactImg/thiru.jpg';
import d7 from './ReactImg/church.jpg';
import d8 from './ReactImg/madurai.jpg';
import d9 from './ReactImg/kodaikanal.jpg';
import d10 from './ReactImg/vedanthangal.jpg';
import d11 from './ReactImg/adiyogi siva.jpg';
import d12 from './ReactImg/rameswaram.jpg';

import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Home.css';

import "./Blogs.css";
import b1 from './ReactImg/bfood.jpg';
import b2 from './ReactImg/gallery.jpg';
import b3 from './ReactImg/traveltips.jpg';
import b4 from './ReactImg/attract.jpg';
import b5 from './ReactImg/surf.jpg';
import b6 from './ReactImg/snow kingdom.jpg';
const Blogs = () => {
  const blogCategories = [
    {
      title: "Foods",
      description:
        "Explore the rich and diverse culinary delights of Tamil Nadu, from spicy Chettinad dishes to the famous filter coffee.",
      image: b1,
      link: "#foods",
    },
    {
      title: "Gallery",
      description:
        "A visual journey through the enchanting landscapes, vibrant festivals, and timeless heritage of Tamil Nadu.",
      image: b2,
      link: "#gallery",
    },
    {
      title: "Travel Tips",
      description:
        "Get essential travel advice, safety tips, and insider information to make your trip to Tamil Nadu memorable and hassle-free.",
      image: b3,
      link: "#traveltips",
    },
    {
      title: "Attractions",
      description:
        "Discover the top attractions in Tamil Nadu, from serene beaches to majestic temples and breathtaking hill stations.",
      image:b4,
      link: "#attractions",
    },
    {
      title: "Activities to Explore",
      description:
        "Experience the thrill of adventure with activities like surfing, boating, hiking, and outdoor games in Tamil Nadu.",
      image: b5,
      link: "#thingstodo",
    },
    {
      title: "Snow Kingdom",
      description:
        "Experience the thrill of snow with freezing activities and indoor games in Chennai-Tamil Nadu.",
      image: b6,
      link: "#snowking",
    },
  ];

  return (
    <div className="blogs-page w-100">
 

      {/* Blog Cards Section */}
      <div className="blog-cards-section py-5">
        <div className="container-fluid">
          <h2 className="text-center text-primary fw-bold mb-4"><svg xmlns="http://www.w3.org/2000/svg" style={{verticalAlign:'top'}} height="40px" viewBox="0 -960 960 960" width="40px" fill="#0d6efd"><path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-180q45-45 80-93 30-41 55-90t25-97q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 48 25 97t55 90q35 48 80 93Zm0-220q-25 0-42.5-17.5T420-540q0-25 17.5-42.5T480-600q25 0 42.5 17.5T540-540q0 25-17.5 42.5T480-480Z"/></svg>Explore Our Blogs</h2>
          <div className="row g-4">
            {blogCategories.map((category, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className="card h-100 shadow-sm">
                  <img
                    src={category.image}
                    style={{height:'320px'}}
                    className="card-img-top"
                    alt={category.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{category.title}</h5>
                    <p className="card-text">{category.description}</p>
                    <button type='button' className="btn btn-primary">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-4 w-100" style={{ minHeight: '400px' }}>
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

const Home =()=>{
    return(
        <div>
    <h1 className="text-primary text-center"><svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" fill="currentColor" class="bi bi-globe-central-south-asia" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M4.882 1.731a.48.48 0 0 0 .14.291.487.487 0 0 1-.126.78l-.291.146a.7.7 0 0 0-.188.135l-.48.48a1 1 0 0 1-1.023.242l-.02-.007a1 1 0 0 0-.462-.04 7 7 0 0 1 2.45-2.027m-3 9.674.86-.216a1 1 0 0 0 .758-.97v-.184a1 1 0 0 1 .445-.832l.04-.026a1 1 0 0 0 .152-1.54L3.121 6.621a.414.414 0 0 1 .542-.624l1.09.818a.5.5 0 0 0 .523.047.5.5 0 0 1 .724.447v.455a.8.8 0 0 0 .131.433l.795 1.192a1 1 0 0 1 .116.238l.73 2.19a1 1 0 0 0 .949.683h.058a1 1 0 0 0 .949-.684l.73-2.189a1 1 0 0 1 .116-.238l.791-1.187A.45.45 0 0 1 11.743 8c.16 0 .306.084.392.218.557.875 1.63 2.282 2.365 2.282l.04-.001a7.003 7.003 0 0 1-12.658.905Z"/>
</svg>Home  </h1>
    
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img className="d-block w-100" src={d1}  alt="First slide"  />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100"src={d2} alt="Second slide"  />
        <Carousel.Caption>
          <h5 className='text-info'>Second slide label</h5>
          <p className='text-info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={d3} alt="Third slide"   />
        <Carousel.Caption>
          <h5 className='text-white'>Third slide label</h5>
          <p className='text-white'>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <br/>
    <div class="row row-cols-1 row-cols-md-3 g-3">
  <div class="col" className='cimg'>
    <Card style={{ width: '23rem' }}>
      <Card.Img variant="top" src={d4}  />
      <Card.Body>
        <Card.Title className='= text-warning'> Brihadeeswara Temple -Thanjavur</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="outline-primary" ><a className='fs-5 text-decoration-none' style={{color:'black'}} href='/packages' >More Details</a></Button>
      </Card.Body>
    </Card>
    </div>

    <div class="col" className='cimg'>
    <Card style={{ width: '23rem' }}>
      <Card.Img variant="top" src={d7}/>
      <Card.Body>
        <Card.Title className='= text-warning'>Church-Velankanni</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="outline-primary" ><a className='fs-5 text-decoration-none' style={{color:'black'}} href='/packages' >More Details</a></Button>
      </Card.Body>
    </Card>
    </div>

    <div class="col" className='cimg'>
    <Card style={{ width: '23rem' }}>
      <Card.Img variant="top" src={d11}  />
      <Card.Body>
        <Card.Title className='= text-warning'>Adiyogi Shiva-Coimbatore </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="outline-primary" ><a className='fs-5 text-decoration-none' style={{color:'black'}} href='/packages' >More Details</a></Button>
      </Card.Body>
    </Card>
    </div>

    <div class="col" className='cimg'>
    <Card style={{ width: '23rem' }}>
      <Card.Img variant="top" src={d5} />
      <Card.Body>
        <Card.Title className='= text-success'>Ooty (short for Udhagamandalam)</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="outline-primary" ><a className='fs-5 text-decoration-none' style={{color:'black'}} href='/packages' >More Details</a></Button>
      </Card.Body>
    </Card>
    </div>

    <div class="col" className='cimg'>
    <Card style={{ width: '23rem' }}>
      <Card.Img variant="top" src={d9}  />
      <Card.Body>
        <Card.Title className='= text-success'>Hill Station-Kodaikanal</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="outline-primary" ><a className='fs-5 text-decoration-none' style={{color:'black'}} href='/packages' >More Details</a></Button>      </Card.Body>
    </Card>
    </div>

    <div class="col" className='cimg'>
    <Card style={{ width: '23rem' }}>
      <Card.Img variant="top" src={d10} className='cimg' />
      <Card.Body>
        <Card.Title className='= text-success'>Vedanthangal Bird Sanctuary- Madurantakam  </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="outline-primary" ><a className='fs-5 text-decoration-none' style={{color:'black'}} href='/packages' >More Details</a></Button>      </Card.Body>
    </Card>
    </div>

    <div class="col" className='cimg'>
    <Card style={{ width: '23rem' }}>
      <Card.Img variant="top" src={d8}  />
      <Card.Body>
        <Card.Title className='= text-danger'> Meenakshi Amman Temple-Madurai</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="outline-primary" ><a className='fs-5 text-decoration-none' style={{color:'black'}} href='/packages' >More Details</a></Button>      </Card.Body>
    </Card>
    </div>

    <div class="col" className='cimg'>
    <Card style={{ width: '23rem' }}>
      <Card.Img variant="top" src={d6}  />
      <Card.Body>
        <Card.Title className='= text-danger'>Thiruvalluvar Statue-Kanniyakumari</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="outline-primary" ><a className='fs-5 text-decoration-none' style={{color:'black'}} href='/packages' >More Details</a></Button>      </Card.Body>
    </Card>
    </div>

    <div class="col" className='cimg'>
    <Card style={{ width: '23rem' }}>
      <Card.Img variant="top" src={d12}  />
      <Card.Body>
        <Card.Title className='= text-danger'>Dhanushkodi-Ramanathapuram</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="outline-primary" ><a className='fs-5 text-decoration-none' style={{color:'black'}} href='/packages' >More Details</a></Button>      </Card.Body>
    </Card>
    
    </div>

<Blogs/>
<Footer/>
    </div>
</div>
    )

}
export default Home;



