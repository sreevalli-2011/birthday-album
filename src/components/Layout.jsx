// src/components/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import TopBar from './Topbar';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="d-flex flex-column min-vh-100"> {/* Removed bg-dark text-white */}
      <TopBar />
      <main className="flex-grow-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;