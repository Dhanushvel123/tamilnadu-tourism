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
const Blogs = () => {
  const blogCategories = [
    {
      title: "Foods",
      description:
        "Explore the rich and diverse culinary delights of Tamil Nadu, from spicy Chettinad dishes to the famous filter coffee.",
      image: "https://via.placeholder.com/300x200?text=Foods",
      link: "#foods",
    },
    {
      title: "Gallery",
      description:
        "A visual journey through the enchanting landscapes, vibrant festivals, and timeless heritage of Tamil Nadu.",
      image: "https://via.placeholder.com/300x200?text=Gallery",
      link: "#gallery",
    },
    {
      title: "Travel Tips",
      description:
        "Get essential travel advice, safety tips, and insider information to make your trip to Tamil Nadu memorable and hassle-free.",
      image: "https://via.placeholder.com/300x200?text=Travel+Tips",
      link: "#traveltips",
    },
    {
      title: "Attractions",
      description:
        "Discover the top attractions in Tamil Nadu, from serene beaches to majestic temples and breathtaking hill stations.",
      image: "https://via.placeholder.com/300x200?text=Attractions",
      link: "#attractions",
    },
    {
      title: "Things to Do",
      description:
        "Experience the thrill of adventure with activities like surfing, boating, hiking, and outdoor games in Tamil Nadu.",
      image: "https://via.placeholder.com/300x200?text=Things+to+Do",
      link: "#thingstodo",
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

    </div>
</div>
    )

}
export default Home;




