import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ActionMovies from './pages/ActionMovies';
import RomanticMovies from './pages/RomanticMovies';
import MovieDetails from './pages/MovieDetails';
import WatchMovie from './pages/WatchMovie';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/action" element={<ActionMovies />} />
        <Route path="/romantic" element={<RomanticMovies />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/movie/:id/watch/:episodeId" element={<WatchMovie />} />
      </Routes>
    </div>
  );
}

export default App;