// src/pages/AlbumPage.jsx
import React from 'react';
import AlbumGrid from '../components/AlbumGrid'; // Import your AlbumGrid component
import birthdayImages from '../data/birthdayImages';
import './AlbumPage.css'; // For the overall page background and container styling

const AlbumPage = () => {
  return (
    // This container will hold the title, AlbumGrid, and total images count
    <div className="album-page-container p-4 rounded shadow-sm">
      <h2 className="text-center mb-4">Birthday Album</h2>

      {/* Render AlbumGrid and pass the birthdayImages data */}
      <AlbumGrid images={birthdayImages} />

      <p className="mt-4 text-center">Total Images: {birthdayImages.length}</p>
    </div>
  );
};

export default AlbumPage;