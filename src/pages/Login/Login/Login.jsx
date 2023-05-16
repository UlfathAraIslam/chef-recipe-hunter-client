import React, { useContext, useEffect, useState } from 'react';
import { Button, Container, Form, Alert, Spinner } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navigationbar from '../../Shared/Navigationbar/Navigationbar';
import Footer from '../../Shared/Footer/Footer';
import { AuthContext } from '../../../providers/AuthProvider';

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const { signIn, signInWithGoogle, signInWithGitHub, user, loading } = useContext(AuthContext);

  const location = useLocation();

  const from = location.state?.from.pathname || '/';

  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
  
    try {
      await signIn(email, password);
    } catch (error) {
      console.log(error.code);
      if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
        setError('Invalid email or password.');
        return;
        
      } else {
        setError('An error occurred. Please try again later.');
        return;
      }
    }
  };
  

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };

  const handleGitHubSignIn = () => {
    signInWithGitHub()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Navigationbar />
      <Container className="d-flex justify-content-center align-items-center mt-5">
        <Form onSubmit={handleLogin} style={{ width: '300px' }}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email"  placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword" className='mb-3'>
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password"  placeholder="Password" />
          </Form.Group>
          <Button variant="primary primaryButton mb-3" style={{ width: '300px' }} type="submit"> Login
          </Button>
          <br />
          <Button variant="primary primaryButton mb-3" style={{ width: '300px' }} onClick={handleGoogleSignIn}>
            Sign in with Google
          </Button>
          <Button variant="primary primaryButton mb-3" style={{ width: '300px' }} onClick={handleGitHubSignIn}>
            Sign in with GitHub
          </Button>
          <br />
          <Form.Text className="text-secondary">
            Don't have an account? <Link to="/register">Register</Link>
          </Form.Text>
          {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
        </Form>
      </Container>
      <Footer />
    </>
  );
};

export default Login;
