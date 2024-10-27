import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`/api/movies/${id}`);
        setMovie(response.data);
      } catch (err) {
        setError('Failed to fetch movie details');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  if (error || !movie) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center text-red-500">
        {error || 'Movie not found'}
      </div>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative aspect-video">
          <img
            src={movie.image}
            alt={movie.title}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
          <p className="text-gray-300 mb-4">{movie.views?.toLocaleString()} views</p>
          <p className="text-gray-300 mb-6">{movie.genre}</p>
          <Link
            to={`/movie/${movie.id}/watch/1`}
            className="inline-block bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
          >
            Watch Now
          </Link>
        </div>
      </div>
    </main>
  );
}