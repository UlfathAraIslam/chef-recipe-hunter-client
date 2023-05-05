import React, { useState } from 'react';
import Navigationbar from '../../Shared/Navigationbar/Navigationbar';
import Footer from '../../Shared/Footer/Footer';
import { Button, Container, Form, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../../../firebase/firebase.config';

const Login = () => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const [error, setError] = useState(null);
  const [user, setUser] = useState({});

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setUser(loggedUser);
      })
      .catch(error => {
        console.log(error);
        setError('Failed to sign in with Google.');
      });
  };

  const handleGitHubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setUser(loggedUser);
      })
      .catch(error => {
        console.log(error);
        setError('Failed to sign in with GitHub.');
      });
  };

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setUser(loggedUser);
        form.reset();
      })
      .catch(error => {
        console.log(error);
        setError('Invalid email or password.');
      });
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
          <Button variant="primary" type="submit">
            Login
          </Button>
          <br />
          <Button variant="secondary" onClick={handleGoogleSignIn}>
            Sign in with Google
          </Button>
          <Button variant="secondary" onClick={handleGitHubSignIn}>
            Sign in with GitHub
          </Button>
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
// import React, { useState, useEffect } from 'react';
// import Navigationbar from '../../Shared/Navigationbar/Navigationbar';
// import Footer from '../../Shared/Footer/Footer';
// import { Button, Container, Form, Alert } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
// import app from '../../../firebase/firebase.config';

// const Login = () => {
//   const auth = getAuth(app);
//   const googleProvider = new GoogleAuthProvider();
//   const githubProvider = new GithubAuthProvider();

//   const [error, setError] = useState(null);
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged(user => {
//       if (user) {
//         setUser(user);
//       } else {
//         setUser(null);
//       }
//     });
//     return unsubscribe;
//   }, [auth]);

//   const handleGoogleSignIn = () => {
//     signInWithPopup(auth, googleProvider)
//       .then(result => {
//         const loggedUser = result.user;
//         console.log(loggedUser);
//         setUser(loggedUser);
//       })
//       .catch(error => {
//         console.log(error);
//         setError('Failed to sign in with Google.');
//       });
//   };

//   const handleGitHubSignIn = () => {
//     signInWithPopup(auth, githubProvider)
//       .then(result => {
//         const loggedUser = result.user;
//         console.log(loggedUser);
//         setUser(loggedUser);
//       })
//       .catch(error => {
//         console.log(error);
//         setError('Failed to sign in with GitHub.');
//       });
//   };

//   const handleLogin = event => {
//     event.preventDefault();
//     const form = event.target;
//     const email = form.email.value;
//     const password = form.password.value;
//     console.log(email, password);

//     signInWithEmailAndPassword(auth, email, password)
//       .then(result => {
//         const loggedUser = result.user;
//         console.log(loggedUser);
//         setUser(loggedUser);
//         form.reset();
//       })
//       .catch(error => {
//         console.log(error);
//         setError('Invalid email or password.');
//       });
//   };

//   return (
//     <>
//       <Navigationbar />
//       <Container className="mx-auto mt-5">
//         {user ? (
//           <>
//             <p>Welcome, {user.displayName || user.email}!</p>
//             {user.photoURL && <img src={user.photoURL} alt="User profile" />}
//           </>
//         ) : (
//           <Form onSubmit={handleLogin}>
//             <Form.Group className="mb-3" controlId="formBasicEmail">
//               <Form.Label>Email address</Form.Label>
//               <Form.Control type="email" name="email" required placeholder="Enter email" />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicPassword">
//               <Form.Label>Password</Form.Label>
//               <Form.Control type="password" name="password" required placeholder="Password" />
//             </Form.Group>
//             <Button variant="primary" type="submit">
//               Login
//             </Button>
//             <br />
//             <Button variant="secondary" onClick={handleGoogleSignIn}>
//               Sign in with Google
//             </Button>
//             <Button variant="secondary" onClick={handleGitHubSignIn}>
//               Sign in with GitHub
//             </Button>
//             <Form.Text className="text-secondary">
//               Don't have an account? <Link to="/register">Register</Link>
//             </Form.Text>
//             {error && <Alert variant="danger" className="mt-3">{error}</Alert>}
//           </Form>
//         )}
//       </Container>
//       <Footer />
//     </>
//   );
// };

// export default Login;