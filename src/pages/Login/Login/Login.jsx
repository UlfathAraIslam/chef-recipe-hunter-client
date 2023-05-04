// import React, { useContext, useState } from 'react';
// import Navigationbar from '../../Shared/Navigationbar/Navigationbar';
// import Footer from '../../Shared/Footer/Footer';
// import { Button, Container, Form, Alert } from 'react-bootstrap';
// import { Link } from 'react-router-dom';


// import { AuthContext } from '../../../providers/AuthProvider';
// import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
// import app from '../../../firebase/firebase.config';

// const Login = () => {
//     const auth = getAuth(app);

//   const { loginUser } = useContext(AuthContext);
//   const [error, setError] = useState('');

//   const handleLogin = event => {
//     event.preventDefault();
//     const form = event.target;
//     const email = form.email.value;
//     const password = form.password.value;
//     console.log(email, password);

//     loginUser(email, password)
//       .then(result => {
//         const loggedUser = result.user;
//         console.log(loggedUser);
//         // navigate(from, { replace: true });
//         form.reset();
//       })
//       .catch(error => {
//         console.log(error);
//         setError('Invalid email or password.');
//       });
//   };

//   const handleGoogleSignIn = () => {
//     signInWithPopup(auth,provider)
//       .then(result => {
//         const loggedUser = result.user;
//         console.log(loggedUser);
//         // navigate(from, { replace: true });
//       })
//       .catch(error => {
//         console.log(error);
//         setError('Unable to sign in with Google.');
//       });
//   };

//   const handleGitHubSignIn = () => {
//     signInWithGitHub()
//       .then(result => {
//         const loggedUser = result.user;
//         console.log(loggedUser);
//         // navigate(from, { replace: true });
//       })
//       .catch(error => {
//         console.log(error);
//         setError('Unable to sign in with GitHub.');
//       });
//   };

//   return (
//     <>
//       <Navigationbar />
//       <Container className='mx-auto mt-5'>
//         <Form onSubmit={handleLogin}>
//           <Form.Group className='mb-3' controlId='formBasicEmail'>
//             <Form.Label>Email address</Form.Label>
//             <Form.Control type='email' name='email' required placeholder='Enter email' />
//           </Form.Group>

//           <Form.Group className='mb-3' controlId='formBasicPassword'>
//             <Form.Label>Password</Form.Label>
//             <Form.Control type='password' name='password' required placeholder='Password' />
//           </Form.Group>
//           <Button variant='primary' type='submit'>
//             Login
//           </Button>
//           <br />
//           <Button variant='outline-dark' className='mt-3' onClick={handleGoogleSignIn}>
//             Sign in with Google
//           </Button>
//           <Button variant='outline-dark' className='mt-3 ms-3' onClick={handleGitHubSignIn}>
//             Sign in with GitHub
//           </Button>
//           <Form.Text className='text-secondary'>
//             Don't have an account? <Link to='/register'>Register</Link>
//           </Form.Text>
//           {error && <Alert variant='danger' className='mt-3'>{error}</Alert>}
//         </Form>
//       </Container>
//       <Footer />
//     </>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import Navigationbar from '../../Shared/Navigationbar/Navigationbar';
import Footer from '../../Shared/Footer/Footer';
import { Button, Container, Form, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import app from '../../../firebase/firebase.config';


const Login = () => {
    const auth = getAuth(app);
    console.log(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const [error, setError] = useState('');
   

    const handleGoogleSignIn = () => {

        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                // navigate(from, { replace: true });
                setUser(loggedUser);
            })
            .catch(error => {
                console.log(error);
                setError('Failed to sign in with Google.');
            })
    }

    const handleGitHubSignIn = () => {

        signInWithPopup(auth, githubProvider)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                // navigate(from, { replace: true });
                c
            })
            .catch(error => {
                console.log(error);
                setError('Failed to sign in with GitHub.');
            })
    }

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signInWithEmailAndPassword(app.auth(), email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                // navigate(from, { replace: true });
                form.reset();
            })
            .catch(error => {
                console.log(error);
                setError('Invalid email or password.');
            })
    }

    return (
        <>
            <Navigationbar />
            <Container className='mx-auto mt-5'>
                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' required placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' required placeholder="Password" />
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
                        Don't have an account? <Link to='/register'>Register</Link>
                    </Form.Text>
                    {error && <Alert variant='danger' className='mt-3'>{error}</Alert>}
                </Form>
            </Container>
            <Footer />
     </>
    );
};

export default Login;

//  
