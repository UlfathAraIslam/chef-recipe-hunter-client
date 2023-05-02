import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg"variant="light">
            <Container>
                <Navbar.Brand className='brand-name'>Japanese cousine</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Home</Nav.Link>
                        <Nav.Link href="#pricing">Blog</Nav.Link>
                    </Nav>
                    <Button variant="secondary">Login</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;