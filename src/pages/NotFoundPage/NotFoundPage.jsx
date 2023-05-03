import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import errorImage from './error-image.png';

const NotFoundPage = () => {
  const { error, status } = useRouteError() || {};
  return (
      <div className='text-center mt-5'>
      <img src='error-image.png' alt="Oops! Page not found." />
        <h1>Oops! Page not found.</h1>
        <p>The page you are looking for does not exist.</p>
        <h2>
          <span>Error</span> {status || 400}
        </h2>
        <p>{error?.message}</p>
        <Link to='/'>Back to homepage</Link>
      </div>
  );
};

export default NotFoundPage;

