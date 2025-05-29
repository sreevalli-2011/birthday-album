// src/components/AlbumGrid.jsx
import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import HTMLFlipBook from 'react-pageflip';
import './AlbumGrid.css';

const AlbumGrid = ({ images }) => {
  // State to control if two pages are shown
  const [showTwoPages, setShowTwoPages] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      // Show two pages if window width is greater than 768px (common breakpoint)
      setShowTwoPages(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);
    // Call once on mount to set initial state
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="album-grid-container">
      <HTMLFlipBook
        width={450}
        height={550}
        minWidth={300}
        maxWidth={700}
        minHeight={400}
        maxHeight={800}
        showCover={true}
        flippingTime={800}
        size="stretch"
        autoSize={true}
        startPage={0}
        maxShadowOpacity={0.5}
        showPageCorners={true}
        className="demo-book"
        usePortrait={!showTwoPages}
      >
        {images.map((image, index) => (
          <div className="album-page" key={image.id}>
            <img src={image.src} alt={image.alt} className="img-fluid" />
            <div className="page-number">{index + 1}</div>
          </div>
        ))}
      </HTMLFlipBook>
    </div>
  );
};

export default AlbumGrid;