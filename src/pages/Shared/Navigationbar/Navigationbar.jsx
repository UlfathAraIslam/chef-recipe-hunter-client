import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import './Navigationbar.css';

const Navigationbar = () => {
  const { user } = useContext(AuthContext);
  return (
    <Navbar expand="md" className="navigationbar ps-1">
        <Navbar.Brand className="brand-name">Japanese food</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="text-decoration-none text-secondary" style={{ marginRight: '50px' }}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/blog" className="text-decoration-none text-secondary">
              Blog
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>{user.displayName}</Nav.Link>
            <Button variant="secondary">Login</Button>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigationbar;