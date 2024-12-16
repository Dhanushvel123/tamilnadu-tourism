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
      title: "Things to Do",
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
          <h2 className="text-center text-primary fw-bold mb-4">Explore Our Blogs</h2>
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
                    <a href={category.link} className="btn btn-primary">
                      Read More
                    </a>
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
    <footer className="bg-dark text-light pt-4  w-100" style={{height:'400px'}}> 
      <div className="container-fluid">
        <div className="row">
          {/* About Section */}
          <div className="col-md-4 mb-3">
            <h5 className="text-warning">About Tamil Nadu Tourism</h5>
            <p>
              Experience the rich culture, vibrant festivals, and breathtaking attractions that Tamil Nadu has to offer. Plan your visit today!
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3 " style={{border:'2px solid white'}}>
            <h5 className="text-warning">Quick Links</h5>
            <div className=' border'>
              <ul style={{listStyleType:'none',padding:'5px'}}>
         <li><a className='text-white fs-5' style={{textDecoration:'none'}} href='/'>Home </a></li>
         <li> <a className='text-white fs-5' style={{textDecoration:'none'}} href='/packages'>Packages</a></li>
       <li><a className='text-white fs-5' style={{textDecoration:'none'}} href='/modernResort'>Resort</a></li>
         <li> <a className='text-white fs-5' style={{textDecoration:'none'}} href='/contact'>Contact</a></li>
        <li><a className='text-white fs-5' style={{textDecoration:'none'}} href='/bookingpage'>Booking</a></li>
        </ul>
          </div>
          </div>

          {/* Contact Information */}
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

        {/* Footer Bottom */}
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
    <h1 className="text-primary">This is Home page </h1>
    
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
        <Button variant="outline-primary" >Go somewhere</Button>
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
        <Button variant="outline-primary">Go somewhere</Button>
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
        <Button variant="outline-primary">Go somewhere</Button>
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
        <Button variant="outline-primary">Go somewhere</Button>
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
        <Button variant="outline-primary">Go somewhere</Button>
      </Card.Body>
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
        <Button variant="outline-primary">Go somewhere</Button>
      </Card.Body>
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
        <Button variant="outline-primary">Go somewhere</Button>
      </Card.Body>
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
        <Button variant="outline-primary">Go somewhere</Button>
      </Card.Body>
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
        <Button variant="outline-primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    
    </div>

<Blogs/>
<Footer/>
    </div>
</div>
    )

}
export default Home;



