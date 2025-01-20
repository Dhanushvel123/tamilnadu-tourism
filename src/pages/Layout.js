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
          <Navbar.Brand  as={Link} to="/" id="tit">Tamil Nadu <span className="text-black">Tourism</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" className="custom-nav-link"><svg xmlns="http://www.w3.org/2000/svg" style={{verticalAlign:'baseline'}} width="18" height="16" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
  <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
</svg>Home</Nav.Link>
              <Nav.Link as={Link} to="/packages" className="custom-nav-link"><svg xmlns="http://www.w3.org/2000/svg" height="24px" style={{verticalAlign:'middle'}} viewBox="0 -960 960 960" width="24px" fill="#0d6efd"><path d="M620-163 450-333l56-56 114 114 226-226 56 56-282 282Zm220-397h-80v-200h-80v120H280v-120h-80v560h240v80H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h167q11-35 43-57.5t70-22.5q40 0 71.5 22.5T594-840h166q33 0 56.5 23.5T840-760v200ZM480-760q17 0 28.5-11.5T520-800q0-17-11.5-28.5T480-840q-17 0-28.5 11.5T440-800q0 17 11.5 28.5T480-760Z"/></svg>Packages</Nav.Link>
              <Nav.Link as={Link} to="/modernresort" className="custom-nav-link"><svg xmlns="http://www.w3.org/2000/svg" height="24px" style={{verticalAlign:'top'}} viewBox="0 -960 960 960" width="24px" fill="#0d6efd"><path d="M80-80q29-74 38.5-152.5T130-390q-39-15-64.5-50T40-520v-80q115-38 234.5-116T480-880q86 86 205.5 164T920-600v80q0 45-25.5 80T830-390q2 79 11.5 157.5T880-80H80Zm156-520h488q-78-44-140.5-90.5T480-772q-41 35-103.5 81.5T236-600Zm344 140q25 0 42.5-17.5T640-520H520q0 25 17.5 42.5T580-460Zm-200 0q25 0 42.5-17.5T440-520H320q0 25 17.5 42.5T380-460Zm-200 0q25 0 42.5-17.5T240-520H120q0 25 17.5 42.5T180-460Zm6 300h107q9-60 14-119t8-119q-9-5-18-10.5T280-422q-15 15-32.5 24.5T210-383q-2 57-7 112.5T186-160Zm188 0h212q-8-55-12.5-110T566-381q-26-2-47.5-12.5T480-421q-17 17-39.5 27.5T394-381q-3 56-7.5 111T374-160Zm293 0h107q-12-55-17-110.5T750-383q-20-5-38-14.5T680-422q-8 8-17 13.5T645-398q3 60 8.5 119T667-160Zm113-300q25 0 42.5-17.5T840-520H720q0 25 17.5 42.5T780-460Z"/></svg>Resort</Nav.Link>
              <Nav.Link as={Link} to="/contact" className="custom-nav-link"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-inbound-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zM15.854.146a.5.5 0 0 1 0 .708L11.707 5H14.5a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0v2.793L15.146.146a.5.5 0 0 1 .708 0"/>
</svg>Contact</Nav.Link>
              <Nav.Link as={Link} to="/bookingpage" className="custom-nav-link"><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#0d6efd"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-640v560h560v-560h-80v280l-100-60-100 60v-280H200Zm0 560v-560 560Z"/></svg>Booking</Nav.Link>
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
