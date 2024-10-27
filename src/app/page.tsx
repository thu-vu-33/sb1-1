'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import MovieGrid from '@/components/MovieGrid';
import { Movie } from '@/mocks/types';

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get<Movie[]>('/api/movies');
        setMovies(response.data);
      } catch (err) {
        setError('Failed to fetch movies');
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

  return (
    <main className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-yellow-500 mb-6">Most Viewed Recently</h2>
      <MovieGrid movies={movies} />
    </main>
  );
}