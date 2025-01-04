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
              <Nav.Link as={Link} to="/" className="custom-nav-link"><svg xmlns="http://www.w3.org/2000/svg" style={{verticalAlign:'baseline'}} width="18" height="16" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
  <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
</svg>Home</Nav.Link>
              <Nav.Link as={Link} to="/packages" className="custom-nav-link"><svg xmlns="http://www.w3.org/2000/svg" style={{verticalAlign:'middle'}} className="icon" height="16px" viewBox="0 -960 960 960" width="16px" fill="#0000F5"><path d="M620-163 450-333l56-56 114 114 226-226 56 56-282 282Zm220-397h-80v-200h-80v120H280v-120h-80v560h240v80H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h167q11-35 43-57.5t70-22.5q40 0 71.5 22.5T594-840h166q33 0 56.5 23.5T840-760v200ZM480-760q17 0 28.5-11.5T520-800q0-17-11.5-28.5T480-840q-17 0-28.5 11.5T440-800q0 17 11.5 28.5T480-760Z"/></svg>Packages</Nav.Link>
              <Nav.Link as={Link} to="/modernresort" className="custom-nav-link"><svg xmlns="http://www.w3.org/2000/svg"  style={{verticalAlign:'top'}} height="22px" viewBox="0 -960 960 960" width="22px" fill="#0000F5"><path d="M96-96q26-79 33.5-157.5T139-401q-38-14-64.5-48T48-528v-72q115-25 233.5-104T480-864q81 84 197.5 161T912-600v72q0 45-27 79t-65 48q2 69 10 147.5T864-96H96Zm157-504h454q-80-42-131-85t-96-81q-46 38-96.5 81T253-600Zm326 135q26 0 44.5-18.5T642-528H516q0 26 18 44.5t45 18.5Zm-198 0q26 0 44.5-18.5T444-528H318q0 26 18 44.5t45 18.5Zm-198 0q27 0 45-18.5t18-44.5H120q0 26 18.5 44.5T183-465Zm7 297h113q9-58 13.5-118t7.5-120q-11-4-23-13.5T282-437q-15 15-32 25.5T211-396q-2 56-5.5 114.5T190-168Zm186 0h208q-8-55-12-113t-7-114q-27-2-48.5-13T480-437q-16 18-37.5 29T395-395q-3 56-7 114t-12 113Zm281 0h113q-12-55-15.5-113.5T749-396q-21-5-39-15.5T678-437q-8 8-19.5 17T636-407q3 60 8 120.5T657-168Zm120-297q26 0 44.5-18.5T840-528H714q0 26 18 44.5t45 18.5Z"/></svg>Resort</Nav.Link>
              <Nav.Link as={Link} to="/contact" className="custom-nav-link"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-inbound-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zM15.854.146a.5.5 0 0 1 0 .708L11.707 5H14.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793L15.146.146a.5.5 0 0 1 .708 0"/>
</svg>Contact</Nav.Link>
              <Nav.Link as={Link} to="/bookingpage" className="custom-nav-link"><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#0000F5"><path d="M216-144q-29 0-50.5-21.5T144-216v-528q0-29.7 21.5-50.85Q187-816 216-816h528q29.7 0 50.85 21.15Q816-773.7 816-744v528q0 29-21.15 50.5T744-144H216Zm0-600v528h528v-528h-72v312l-96-48-96 48v-312H216Zm0 528v-528 528Z"/></svg>Booking</Nav.Link>
            </Nav>
            <button type="button" className="btn btn-outline-primary custom-btn">
              <Nav.Link as={Link} id="reg" to="/register" className="custom-btn-link"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill-add" viewBox="0 0 16 16">
  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path d="M2 13c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4"/>
</svg>Register</Nav.Link>
            </button>
            &nbsp; &nbsp;
            <button type="button" id="log" className="btn btn-outline-success custom-btn">
              <Nav.Link as={Link} to="/login" className="custom-btn-link"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill-check" viewBox="0 0 16 16">
  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path d="M2 13c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4"/>
</svg>Login</Nav.Link>
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
