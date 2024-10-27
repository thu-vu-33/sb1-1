import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function MovieCard({ movie }) {
  return (
    <Link to={`/movie/${movie.id}`}>
      <div className="group relative overflow-hidden rounded-lg cursor-pointer">
        <img
          src={movie.image}
          alt={movie.title}
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

MovieCard.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    views: PropTypes.number,
    genre: PropTypes.string,
  }).isRequired,
};

export default MovieCard;