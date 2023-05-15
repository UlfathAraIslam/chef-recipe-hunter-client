

import React, { useContext, useEffect, useState } from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import './Navigationbar.css';

const Navigationbar = () => {
  const { user, logOut} = useContext(AuthContext);

  const [name, setName] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    if (user) {
      // Update the name and photo URL state if user data is available
      setName(user.displayName || '');
      setPhotoUrl(user.photoURL || '');
    }
  }, [user]);

  const handleLogout = () => {
    logOut()
      .then()
      .catch(error => console.log(error));
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <Navbar expand="md" className="navigationbar ps-1">
      <Navbar.Brand className="brand-name">Japanese food</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Link as={Link} to="/" className="text-decoration-none text-secondary" style={{ marginRight: '50px' }}>
            Home
          </Link>
          <Link as={Link} to="/blog" className="text-decoration-none text-secondary me-4">
            Blog
          </Link>
          {user && (
            <Link as={Link} to="/" className="text-decoration-none text-secondary">
              Recipe
            </Link>
          )}
        </Nav>
        <Nav>
          {user && (
            <>
              {photoUrl && (
                <div
                  className="user-photo-container"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <img src={photoUrl} alt={name} className="user-photo rounded me-4" width={50} height={50}  />
                  {isHovering && <span className="user-name mb-5">{name}</span>}
                </div>
              )}
              <Button onClick={handleLogout}>Log out</Button>
            </>
          )}
          {!user && (
            <Link to="/login">
              <Button>Login</Button>
            </Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigationbar;
