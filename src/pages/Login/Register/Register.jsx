import React, { useContext, useState } from 'react';
import Navigationbar from '../../Shared/Navigationbar/Navigationbar';
import { Alert, Button, Container, Form } from 'react-bootstrap';
import { AuthContext } from '../../../providers/AuthProvider';
import { Link } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';

const Register = () => {

  const { createUser,user } = useContext(AuthContext);

  const [passwordError, setPasswordError] = useState('');

  const handleRegister = event =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoUrl = form.photoUrl.value;
    const password = form.password.value;
    console.log(name, email, password,photoUrl);

    createUser(email,password)
    .then(result => {
      const user = result.user;
      console.log(user);
    })
    .then(error => console.log(error))

  }

  const handlePasswordChange = (event) => {
        const form = event.target.form;
        const password = form.password.value;
    
        if (password.length < 6) {
          setPasswordError('Password must be at least 6 characters');
        }
        
        else {
          setPasswordError('');
        }
      };
  return (
    <>
      <Navigationbar user={user} />
      <Container className='mx-auto mt-5'>
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name='name' required placeholder="Enter your name"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPhotoUrl">
            <Form.Label>Profile photo URL</Form.Label>
            <Form.Control type="url" name='photoUrl' placeholder="Enter your profile photo URL"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name='email' required placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name='password' required placeholder="Password" onChange={handlePasswordChange} />
            {passwordError && <Alert variant="danger">{passwordError}</Alert>}
          </Form.Group>
          <Button variant="primary" type="submit">
            Register
          </Button>
          <br />
          <Form.Text className="text-secondary">
            Already have an account? <Link to='/login'>Log in</Link>
          </Form.Text>
        </Form>
      </Container>
      <Footer />
  </>
  );
};

export default Register;
