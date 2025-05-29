// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    // Add d-flex, flex-column, justify-content-center, align-items-center to the main container
    <div className="container d-flex flex-column justify-content-center align-items-center my-5 bg-white p-4 rounded shadow-sm">
      <h1 className="text-center">Welcome to devkvasu photography!</h1> {/* Keep text-center on h1/p */}
      <p className="lead text-center">Your beautiful memories, preserved.</p> {/* Keep text-center on h1/p */}
      <Link to="/album" className="btn btn-primary btn-lg mt-3">View Birthday Album</Link>
    </div>
  );
};

export default HomePage;