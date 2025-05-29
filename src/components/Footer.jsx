// src/components/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-white text-dark text-center py-3 mt-auto border-top"> {/* Changed to white bg, dark text */}
      <div className="container">
        <p>&copy; {new Date().getFullYear()} devkvasu photography. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;