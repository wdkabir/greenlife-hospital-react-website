import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import logo from '../../../images/greenlife-hospital-logo.png';


const Header = () => {
  const { user, logout } = useFirebase();
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
  <Container>
  <Navbar.Brand to="/home">
      <img
        src={logo}
        width="200"
        height="50"
        className="d-inline-block align-top"
        alt="learn-area-logo"
      />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav" >
      <Nav className="ms-auto align-items-center ">
        <NavLink to="/home" className="nav-link" >Home</NavLink>
        <NavLink to="/services" className="nav-link">Services</NavLink>
        <NavLink to="/about" className="nav-link">About</NavLink>
        <NavLink to="/contact" className="nav-link">Contact</NavLink>
        {!user?.email && <Nav.Link as={NavLink} to="/login">
                                <Button variant="success" className="m-1 menu-font-size">Log In/Registation</Button>
                            </Nav.Link>
                            }
                            {user?.email &&
                                <NavDropdown className="menu-font-size" title={user.displayName} id="basic-nav-dropdown">
                                    <NavDropdown.Item><input onClick={logout} type="submit" value="LogOut" className="btn" /></NavDropdown.Item>
                                </NavDropdown>
                            }
                            <Nav.Link as={NavLink} to="/appointment">
                                <Button variant="success" className="m-1 menu-font-size">Appointment</Button>
                            </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        
        </>
    );
};

export default Header;