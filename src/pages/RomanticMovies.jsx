import { useEffect, useState } from 'react';
import axios from 'axios';
import MovieGrid from '../components/MovieGrid';
import Pagination from '../components/Pagination';

export default function RomanticMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 10;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('/api/movies/genre/romantic');
        setMovies(response.data);
      } catch (err) {
        setError('Failed to fetch romantic movies');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center text-red-500">
        {error}
      </div>
    );
  }

  const totalPages = Math.ceil(movies.length / ITEMS_PER_PAGE);

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-yellow-500 mb-6">Romantic Movies</h1>
      <MovieGrid movies={movies} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </main>
  );
}