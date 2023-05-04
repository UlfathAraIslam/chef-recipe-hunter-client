import React, { useContext, useState } from 'react';
import Navigationbar from '../../Shared/Navigationbar/Navigationbar';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import { AuthContext } from '../../../providers/AuthProvider';

const Register = () => {
    const {createUser, setUser} = useContext(AuthContext);

  const [name, setName] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePhotoUrlChange = (event) => {
    setPhotoUrl(event.target.value);
  };

  const handleRegister = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;
  
    console.log(name,photoUrl,email,password);
  
    createUser(name, photoUrl, email, password)
      .then((userCredential) => {
        const createdUser = userCredential.user;
        return createdUser.updateProfile({
          displayName: name,
          photoURL: photoUrl,
        })
      })
      .then(() => {
        const createdUser = auth.currentUser;
        setUser(createdUser);
      })
      .catch(error => {
          console.log(error);
      })
  }
  
  

  return (
    <>
      <Navigationbar />
      <Container className='mx-auto mt-5'>
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name='name' required placeholder="Enter your name" value={name} onChange={handleNameChange} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPhotoUrl">
            <Form.Label>Profile photo URL</Form.Label>
            <Form.Control type="url" name='photoUrl' placeholder="Enter your profile photo URL" value={photoUrl} onChange={handlePhotoUrlChange} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name='email' required placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name='password' required placeholder="Password" />
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
