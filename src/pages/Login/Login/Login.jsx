import React from 'react';
import Navigationbar from '../../Shared/Navigationbar/Navigationbar';
import Footer from '../../Shared/Footer/Footer';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <Navigationbar />
            <Container className='mx-auto mt-5'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' required placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' required placeholder="Password" required />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                    <br />
                    <Form.Text className="text-secondary">
                        Don't have an account? <Link to='/register'>Register</Link>
                    </Form.Text>
                    <Form.Text className="text-success"></Form.Text>
                    <Form.Text className="text-success"></Form.Text>
                </Form>
            </Container>
            <Footer />
        </>
    );
};

export default Login;