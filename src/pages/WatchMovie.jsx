import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function WatchMovie() {
  const { id, episodeId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(`/api/movies/${id}`);
        setMovie(response.data);
      } catch (err) {
        setError('Failed to fetch movie');
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
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">{movie.title}</h1>
        <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center mb-4">
          <p className="text-gray-400">Video Player - Episode {episodeId}</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {[1, 2, 3].map((ep) => (
            <button
              key={ep}
              className={`p-3 rounded-lg text-center transition ${
                ep === Number(episodeId)
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-800 hover:bg-gray-700'
              }`}
            >
              Episode {ep}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}