// src/components/TopBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './TopBar.css';

const TopBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center text-dark" to="/">
          <img src="/images/logo.png" alt="devkvasu Logo" className="brand-logo" />
          <span className="brand-text">devkvasu photography</span>
        </Link>

        {/* --- START OF CHANGES --- */}
        {/* This contact-info div is now OUTSIDE the 'collapse' div. */}
        {/* It will be visible on all screen sizes by default. */}
        <div className="contact-info text-dark d-flex align-items-center ms-auto me-3 me-lg-0 order-lg-last">
          {/* ms-auto will push it to the right on small screens. */}
          {/* me-3 adds some space from toggler, me-lg-0 removes it on large screens. */}
          {/* order-lg-last keeps it at the end on large screens if other nav items exist. */}
          <span className="contact-icon me-2">&#9742;</span>
          <a href="tel:+15551234567" className="nav-link text-dark p-0">
            9948225875
          </a>
        </div>
        {/* --- END OF CHANGES --- */}

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {/* This span displays the hamburger icon */}
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          {/* This div is for your actual navigation links that collapse on mobile */}
          <div className="navbar-nav ms-auto">
            {/* Example of other nav links if you have them: */}
            {/* <Link className="nav-link text-dark" to="/about">About</Link> */}
            {/* <Link className="nav-link text-dark" to="/services">Services</Link> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopBar;