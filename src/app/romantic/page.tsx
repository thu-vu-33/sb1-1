'use client';

import { useState } from 'react';
import MovieGrid from '@/components/MovieGrid';
import Pagination from '@/components/Pagination';

const romanticMovies = [
  {
    id: 3,
    title: 'Love Story',
    image: '/love-story.jpg',
    genre: 'Romantic'
  },
  {
    id: 4,
    title: 'Sweet Romance',
    image: '/sweet-romance.jpg',
    genre: 'Romantic'
  }
];

const ITEMS_PER_PAGE = 10;

export default function RomanticMovies() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(romanticMovies.length / ITEMS_PER_PAGE);

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-yellow-500 mb-6">Romantic Movies</h1>
      <MovieGrid movies={romanticMovies} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </main>
  );
}