
// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AlbumPage from './pages/AlbumPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Make sure you have App.css in src/ as well

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="album" element={<AlbumPage />} />
        {/* You can add more routes here for other pages */}
      </Route>
    </Routes>
  );
}

export default App;