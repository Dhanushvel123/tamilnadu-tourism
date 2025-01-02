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
          <Navbar.Brand href="/" style={{color:'blue'}}>Tamil Nadu Tourism</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/packages">Packages</Nav.Link>
              <Nav.Link as={Link} to="/modernresort">Resort</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
              <Nav.Link as={Link} to="/bookingpage">BookingPage</Nav.Link>
            </Nav>
            <button type="button" className="btn btn-outline-primary">
              <Nav.Link as={Link} to="/register">Register</Nav.Link>
            </button>
            &nbsp; &nbsp;
            <button type="button" className="btn btn-outline-success">
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
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
