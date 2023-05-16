import React, { useContext, useEffect, useState } from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import './Navigationbar.css';

const Navigationbar = () => {

  const { user, logOut } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const [isHovering, setIsHovering] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (user) {
      setName(user.displayName || '');
      setPhotoUrl(user.photoURL || '');
    }
  }, [user]);

  const handleLogout = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
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
          <NavLink
            to="/"
            className={`text-decoration-none ${
              location.pathname === '/' ? 'text-primary' : 'text-secondary'
            }`}
            style={{ marginRight: '50px' }}
            activeClassName="active-route"
            exact
          >
            Home
          </NavLink>
          <NavLink
            to="/blog"
            className={`text-decoration-none ${
              location.pathname === '/blog' ? 'text-primary' : 'text-secondary'
            } me-4`}
            activeClassName="active-route"
            exact
          >
            Blog
          </NavLink>
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
                  <img
                    src={photoUrl}
                    alt={name}
                    className="user-photo rounded me-4"
                    width={50}
                    height={50}
                  />
                  {isHovering && <span className="user-name mb-5">{name}</span>}
                </div>
              )}
              <Button className='primaryButton' onClick={handleLogout}>Log out</Button>
            </>
          )}
          {!user && (
            <Link to="/login">
              <Button className='primaryButton'>Login</Button>
            </Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigationbar;


