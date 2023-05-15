import React, { useContext, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';

import Navigationbar from '../../Shared/Navigationbar/Navigationbar';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import { AuthContext } from '../../../providers/AuthProvider';

const Login = () => {
  // const history = useHistory();
  const { signIn, signInWithGoogle, signInWithGitHub, user } = useContext(AuthContext);

  // useEffect(() => {
  //   if (user) {
  //     // Redirect to the home page
  //     history.push('/');
  //   }
  // }, [user, history]);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
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
      <Container className="mx-auto mt-5">
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" required placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" name="password" required placeholder="Password" />
          </Form.Group>
            <Button variant="primary mb-4" type="submit">
              Login
            </Button>
          <br />
          <Button variant="secondary mb-4" onClick={handleGoogleSignIn}>
            Sign in with Google
          </Button>
          <br />
          <Button variant="secondary mb-4" onClick={handleGitHubSignIn}>
            Sign in with GitHub
          </Button>
          <br />
          <Form.Text className="text-secondary">
            Don't have an account? <Link to="/register">Register</Link>
          </Form.Text>
          {/* {error && <Alert variant="danger" className="mt-3">{error}</Alert>} */}
        </Form>
      </Container>
      <Footer />
    </>
  );
};

export default Login;
