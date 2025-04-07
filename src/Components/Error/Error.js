// File: src/components/ErrorPage/ErrorPage.js
import React from 'react';
import './Error.scss';
import { Helmet } from 'react-helmet-async';

const Error = () => {
  return (
    <div className="msm-error-page-block">

      <Helmet>
        <meta name="description" content="Top-rated share market classes and training in Nagpur." />
        <meta name="keywords" content="Nagpur Share Market, Best Share Market Nagpur, Trading Institute Nagpur, Metta Share Market, Metta , top share market in nagpur ,share market" />
      </Helmet>

      <div className="error-page m-auto">
        <div className="msm-container">
          <div className="eyes my-5">
            <div className="eye">
              <div className="eye__pupil eye__pupil--left"></div>
            </div>
            <div className="eye">
              <div className="eye__pupil eye__pupil--right"></div>
            </div>
          </div>
          <h1 className="display-1 fw-normal mb-3 text-dark">404</h1>
          <p className="lead text-secondary fs-6">Oops! The page you're looking for doesn't exist.</p>
          <a className="btn btn-primary border-0" href="/">Back to Home</a>
        </div>
      </div>
    </div>
  );
};
export default Error;
