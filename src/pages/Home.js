import Carousel from 'react-bootstrap/Carousel';
import './Home.css';
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
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Blogs.css';
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
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m160-120-80-80h800l-80 80H160Zm-40-120q6-18 16-34t24-30v-296h-40v-60h40v-30h-40v-60h40v-30h-40v-60h280q33 0 56.5 23.5T480-760v10h360v60H480v10q0 33-23.5 56.5T400-600h-80v244q14 2 28 6t26 12q26-65 83-103.5T583-480q90 0 153.5 61.5T800-268v28H120Zm334-80h252q-17-36-50-58t-73-22q-42 0-77 21t-52 59ZM320-750h80v-30h-80v30Zm0 90h80v-30h-80v30Zm-100-90h40v-30h-40v30Zm0 90h40v-30h-40v30Zm0 314q10-5 19.5-7.5T260-358v-242h-40v254Zm360 26Z"/></svg>
      ),
      description: "Explore the rich and diverse culinary delights of Tamil Nadu, from spicy Chettinad dishes to the famous filter coffee.",
      image: b1,
      link: "#foods",
    },
    {
      title: "Gallery",
      icon:(<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M120-200q-33 0-56.5-23.5T40-280v-400q0-33 23.5-56.5T120-760h400q33 0 56.5 23.5T600-680v400q0 33-23.5 56.5T520-200H120Zm600-320q-17 0-28.5-11.5T680-560v-160q0-17 11.5-28.5T720-760h160q17 0 28.5 11.5T920-720v160q0 17-11.5 28.5T880-520H720Zm40-80h80v-80h-80v80ZM120-280h400v-400H120v400Zm40-80h320L375-500l-75 100-55-73-85 113Zm560 160q-17 0-28.5-11.5T680-240v-160q0-17 11.5-28.5T720-440h160q17 0 28.5 11.5T920-400v160q0 17-11.5 28.5T880-200H720Zm40-80h80v-80h-80v80Zm-640 0v-400 400Zm640-320v-80 80Zm0 320v-80 80Z"/></svg>),
      description:
        "A visual journey through the enchanting landscapes, vibrant festivals, and timeless heritage of Tamil Nadu.",
       image: b2,
      link: "#gallery",
    },
    {
      title: "Travel Tips",
      icon:(<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-200v-80h320v80H320Zm10-120q-69-41-109.5-110T180-580q0-125 87.5-212.5T480-880q125 0 212.5 87.5T780-580q0 81-40.5 150T630-320H330Zm24-80h252q45-32 69.5-79T700-580q0-92-64-156t-156-64q-92 0-156 64t-64 156q0 54 24.5 101t69.5 79Zm126 0Z"/></svg>),
      description:
        "Get essential travel advice, safety tips, and insider information to make your trip to Tamil Nadu memorable and hassle-free.",
      image: b3,
      link: "#traveltips",
    },
    {
      title: "Attractions",
      icon:(<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m280-40 123-622q6-29 27-43.5t44-14.5q23 0 42.5 10t31.5 30l40 64q18 29 46.5 52.5T700-529v-71h60v560h-60v-406q-48-11-89-35t-71-59l-24 120 84 80v300h-80v-240l-84-80-72 320h-84Zm17-395-85-16q-16-3-25-16.5t-6-30.5l30-157q6-32 34-50.5t60-12.5l46 9-54 274Zm243-305q-33 0-56.5-23.5T460-820q0-33 23.5-56.5T540-900q33 0 56.5 23.5T620-820q0 33-23.5 56.5T540-740Z"/></svg>),
      description:
        "Discover the top attractions in Tamil Nadu, from serene beaches to majestic temples and breathtaking hill stations.",
      image: b4,
      link: "#attractions",
    },
    {
      title: "Activities to Explore ",
      icon:(<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M80-40v-80h40q32 0 62-10t58-30q28 20 58 29.5t62 9.5q32 0 62.5-9.5T480-160q28 20 58 29.5t62 9.5q32 0 62.5-9.5T720-160q27 20 57.5 30t62.5 10h40v80h-40q-31 0-61-7.5T720-70q-29 15-59 22.5T600-40q-31 0-61-7.5T480-70q-29 15-59 22.5T360-40q-31 0-61-7.5T240-70q-29 15-59 22.5T120-40H80Zm260-760 222 41q14 2 27 11t22 25l35 62q26 45 72 73t102 28v80q-78 0-142-39T577-621l-90 61 153 120v154q16 11 31 23t29 23q-21 18-46 29t-54 11q-36 0-67-17t-53-43q-22 26-53 43t-67 17q-10 0-19.5-1.5T322-206q-86-59-144-119t-58-104q0-31 24-41t50-10q29 0 67 8.5t81 24.5l-21-124q-4-20 4.5-39.5T352-642l86-58q-3 0-14.5-2.5t-25.5-5-25.5-5Q361-715 358-715l-113 77-45-66 140-96Zm72 284 18 106q27 13 67 34.5t63 35.5v-60L412-516Zm268-224q-33 0-56.5-23.5T600-820q0-33 23.5-56.5T680-900q33 0 56.5 23.5T760-820q0 33-23.5 56.5T680-740Z"/></svg>),
      description:
        "Experience the thrill of adventure with activities like surfing, boating, hiking, and outdoor games in Tamil Nadu.",
      image: b5,
      link: "#thingstodo",
    },
    {
      title: "Snow Kingdom",
      icon:(<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" style={{color:'black'}} class="bi bi-snow2" viewBox="0 0 16 16">
  <path d="M8 16a.5.5 0 0 1-.5-.5v-1.293l-.646.647a.5.5 0 0 1-.707-.708L7.5 12.793v-1.086l-.646.647a.5.5 0 0 1-.707-.708L7.5 10.293V8.866l-1.236.713-.495 1.85a.5.5 0 1 1-.966-.26l.237-.882-.94.542-.496 1.85a.5.5 0 1 1-.966-.26l.237-.882-1.12.646a.5.5 0 0 1-.5-.866l1.12-.646-.884-.237a.5.5 0 1 1 .26-.966l1.848.495.94-.542-.882-.237a.5.5 0 1 1 .258-.966l1.85.495L7 8l-1.236-.713-1.849.495a.5.5 0 1 1-.258-.966l.883-.237-.94-.542-1.85.495a.5.5 0 0 1-.258-.966l.883-.237-1.12-.646a.5.5 0 1 1 .5-.866l1.12.646-.237-.883a.5.5 0 0 1 .966-.258l.495 1.849.94.542-.236-.883a.5.5 0 0 1 .966-.258l.495 1.849 1.236.713V5.707L6.147 4.354a.5.5 0 1 1 .707-.708l.646.647V3.207L6.147 1.854a.5.5 0 1 1 .707-.708l.646.647V.5a.5.5 0 0 1 1 0v1.293l.647-.647a.5.5 0 1 1 .707.708L8.5 3.207v1.086l.647-.647a.5.5 0 1 1 .707.708L8.5 5.707v1.427l1.236-.713.495-1.85a.5.5 0 1 1 .966.26l-.236.882.94-.542.495-1.85a.5.5 0 1 1 .966.26l-.236.882 1.12-.646a.5.5 0 0 1 .5.866l-1.12.646.883.237a.5.5 0 1 1-.26.966l-1.848-.495-.94.542.883.237a.5.5 0 1 1-.26.966l-1.848-.495L9 8l1.236.713 1.849-.495a.5.5 0 0 1 .259.966l-.883.237.94.542 1.849-.495a.5.5 0 0 1 .259.966l-.883.237 1.12.646a.5.5 0 0 1-.5.866l-1.12-.646.236.883a.5.5 0 1 1-.966.258l-.495-1.849-.94-.542.236.883a.5.5 0 0 1-.966.258L9.736 9.58 8.5 8.866v1.427l1.354 1.353a.5.5 0 0 1-.707.708l-.647-.647v1.086l1.354 1.353a.5.5 0 0 1-.707.708l-.647-.647V15.5a.5.5 0 0 1-.5.5"/>
</svg>),
      description:
        "Experience the thrill of snow with freezing activities and indoor games in Chennai-Tamil Nadu.",
      image: b6,
      link: "#snowking",
    },
  ];
  return (
    <div className="blogs-page py-5 container-fluid w-100" > 
      <Container>
        <h2 className="text-center text-primary fw-bold mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ verticalAlign: 'top' }}
            height="40px"
            viewBox="0 -960 960 960"
            width="40px"
            fill="#0d6efd"
          >
            <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-180q45-45 80-93 30-41 55-90t25-97q0-66-47-113t-113-47q-66 0-113 47t-47 113q0 48 25 97t55 90q35 48 80 93Zm0-220q-25 0-42.5-17.5T420-540q0-25 17.5-42.5T480-600q25 0 42.5 17.5T540-540q0 25-17.5 42.5T480-480Z" />
          </svg>
          Explore Our Blogs
        </h2>
        <Row className="g-4">
          {blogCategories.map((category, index) => (
            <Col xs={12} sm={6} lg={4} key={index}>
              <Card className="h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src={category.image}
                  className="card-img"
                  alt={category.title}
                />
                <Card.Body>
                  <Card.Title className="fw-bold d-flex align-items-center">
                    <span className="ms-2 "style={{color:'purple'}}>{category.title}  {category.icon}</span>
                  </Card.Title>
                  <Card.Text>{category.description}</Card.Text>
                  <Button variant="primary" href={category.link}>
                    Read More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
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
    <h1 className="text-primary text-center"  style={{textShadow:'black 3px 0px 3px'}}><svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" fill="currentColor" class="bi bi-globe-central-south-asia" viewBox="0 0 16 16">
  <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M4.882 1.731a.48.48 0 0 0 .14.291.487.487 0 0 1-.126.78l-.291.146a.7.7 0 0 0-.188.135l-.48.48a1 1 0 0 1-1.023.242l-.02-.007a1 1 0 0 0-.462-.04 7 7 0 0 1 2.45-2.027m-3 9.674.86-.216a1 1 0 0 0 .758-.97v-.184a1 1 0 0 1 .445-.832l.04-.026a1 1 0 0 0 .152-1.54L3.121 6.621a.414.414 0 0 1 .542-.624l1.09.818a.5.5 0 0 0 .523.047.5.5 0 0 1 .724.447v.455a.8.8 0 0 0 .131.433l.795 1.192a1 1 0 0 1 .116.238l.73 2.19a1 1 0 0 0 .949.683h.058a1 1 0 0 0 .949-.684l.73-2.189a1 1 0 0 1 .116-.238l.791-1.187A.45.45 0 0 1 11.743 8c.16 0 .306.084.392.218.557.875 1.63 2.282 2.365 2.282l.04-.001a7.003 7.003 0 0 1-12.658.905Z"/>
</svg>Home , <span style={{color:'black'}}>Blogs </span> </h1>
    
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



