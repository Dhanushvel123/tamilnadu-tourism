import { Outlet,Link } from "react-router-dom";
import './Layout.css';
import { Navbar} from "react-bootstrap";
import {Nav} from "react-bootstrap";
import{Container} from "react-bootstrap";

import'bootstrap/dist/css/bootstrap.min.css';
const Layout =()=>{
    return(
     /*   <>
            <nav>
                <ul>
                    <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/blogs">Blogs</Link>
                </li>
                <li>
                <Link to="/contact">Contact</Link>
                </li>
                <li>
                <Link to="/nopage">Nopage</Link>
                </li>
                </ul>
            </nav>
            <Outlet />
        </>*/
        <div>
            <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">Tamil Nadu Tourism</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/packages">Packages</Nav.Link>
                    <Nav.Link as={Link} to="/modernresort">Resort</Nav.Link>
                    <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                    <Nav.Link as={Link} to="/bookingpage">BookingPage</Nav.Link>
                  </Nav>
                  <button type="button"   className="btn btn-outline-primary"> <Nav.Link as={Link} to="/register">Register</Nav.Link></button>
                &nbsp; &nbsp;
                  <button type="button"  className="btn btn-outline-success"> <Nav.Link as={Link} to="/login">Login</Nav.Link></button>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            <Container fluid>
                <Outlet />
            </Container>
        </div>
    )
}

export default Layout;