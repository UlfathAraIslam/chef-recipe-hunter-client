import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Navigationbar = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="light">
                <Container>
                    <Navbar.Brand className='brand-name'>Japanese cousine</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link to='/' className='text-decoration-none text-secondary' style={{ marginRight: '50px', }}><Nav>Home</Nav></Link>
                            <Link to='/blog' className='text-decoration-none text-secondary'><Nav>blog</Nav></Link>
                        </Nav>
                        <Nav.Link>{user.displayName}</Nav.Link>
                        <Button variant="secondary">Login</Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigationbar;