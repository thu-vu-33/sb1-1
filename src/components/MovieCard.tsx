import Image from 'next/image';
import Link from 'next/link';
import { Movie } from '@/mocks/types';

interface MovieCardProps {
  movie: Movie;
}

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <Link href={`/movie/${movie.id}`}>
      <div className="group relative overflow-hidden rounded-lg cursor-pointer">
        <Image
          src={movie.image}
          alt={movie.title}
          width={300}
          height={450}
          className="w-full h-[300px] object-cover transition-transform group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <h3 className="text-lg font-bold text-white">{movie.title}</h3>
          {movie.views && (
            <p className="text-sm text-gray-300">{movie.views.toLocaleString()} views</p>
          )}
          {movie.genre && (
            <p className="text-sm text-gray-300">{movie.genre}</p>
          )}
        </div>
      </div>
    </Link>
  );
}