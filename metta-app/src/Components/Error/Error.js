// File: src/components/ErrorPage/ErrorPage.js
import React from 'react';
import './Error.css';

const Error = () => {
  return (
    <div className="error-page">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist or might have been moved.</p>
      <a href="/" className="home-link">Go Back to Home</a>
    </div>
  );
};

export default Error;
