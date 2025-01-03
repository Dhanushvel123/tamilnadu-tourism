import { Outlet, Link } from "react-router-dom";
import './Layout.css';
import { Navbar, Nav, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = () => {
  return (
    <div>
      {/* Navbar with fixed position and transparent background */}
      <Navbar bg="transparent" expand="lg" fixed="top" className="navbar-custom">
        <Container>
          <Navbar.Brand href="/" style={{ color: 'blue', fontWeight: 'bold' }}>Tamil Nadu Tourism</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" className="custom-nav-link">Home</Nav.Link>
              <Nav.Link as={Link} to="/packages" className="custom-nav-link">Packages</Nav.Link>
              <Nav.Link as={Link} to="/modernresort" className="custom-nav-link">Resort</Nav.Link>
              <Nav.Link as={Link} to="/contact" className="custom-nav-link">Contact</Nav.Link>
              <Nav.Link as={Link} to="/bookingpage" className="custom-nav-link">BookingPage</Nav.Link>
            </Nav>
            <button type="button" className="btn btn-outline-primary custom-btn">
              <Nav.Link as={Link} id="reg" to="/register" className="custom-btn-link">Register</Nav.Link>
            </button>
            &nbsp; &nbsp;
            <button type="button" id="log" className="btn btn-outline-success custom-btn">
              <Nav.Link as={Link} to="/login" className="custom-btn-link">Login</Nav.Link>
            </button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Offset for fixed navbar */}
      <div style={{ paddingTop: '70px' }}></div>

      {/* Page Content */}
      <Container fluid>
        <Outlet />
      </Container>
    </div>
  );
};

export default Layout;
