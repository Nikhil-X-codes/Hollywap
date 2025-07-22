import React from "react";
import { useFav } from "../contexts/fav";

function Card({ movie, theme }) {
  const { addToFav, removeFromFav, isFav } = useFav();
  const isFavorite = isFav(movie.Title);

  const hasRuntime = movie?.Runtime;
  const hasRating = movie?.imdbRating;
  const hasGenre = movie?.Genre;

  const cardBg = theme === 'dark' ? 'bg-gray-800' : 'bg-white';
  const textColor = theme === 'dark' ? 'text-gray-100' : 'text-gray-800';
  const hoverBg = theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100';
  const favoriteColor = theme === 'dark' ? 'text-pink-400' : 'text-pink-600';
  const yearColor = theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600';
  const overlayBg = theme === 'dark' ? 'bg-gray-900' : 'bg-gray-800';

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    if (isFavorite) {
      removeFromFav(movie.Title);
    } else {
      addToFav(movie);
    }
  };

  const handleCardClick = () => {
    const url = movie?.imdbID
      ? `https://www.imdb.com/title/${movie.imdbID}/`
      : "https://www.omdbapi.com/";
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      onClick={handleCardClick}
      className={`relative max-w-xs overflow-hidden rounded-lg shadow-lg ${cardBg} cursor-pointer transition-all duration-300 group hover:shadow-xl hover:scale-[1.02] ${hoverBg}`}
    >
      <button
        className={`absolute top-3 right-3 z-40 p-2 bg-black bg-opacity-50 rounded-full transition-all duration-200 hover:bg-opacity-70 ${
          isFavorite ? favoriteColor : "text-gray-300"
        }`}
        onClick={handleFavoriteClick}
        aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill={isFavorite ? "currentColor" : "none"}
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      </button>

      <div className="relative pt-[120%] overflow-hidden">
        <img
          src={movie?.Poster}
          alt={movie?.Title || "Movie poster"}
          className="absolute top-0 left-0 w-full h-full object-contain z-10"
          loading="lazy"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/300x450?text=No+Poster';
          }}
        />
      </div>

      <div className="absolute inset-0 flex flex-col justify-end p-4 text-center z-20">
        <h3 className="text-lg font-bold text-white [text-shadow:_1px_1px_3px_rgb(0_0_0_/_90%)]">
          {movie?.Title}
        </h3>
        <p className="text-yellow-300 [text-shadow:_1px_1px_2px_rgb(0_0_0_/_80%)]">
          {movie?.Year}
        </p>
      </div>

      <div className={`absolute inset-0 ${overlayBg} bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 z-30`}>
        <div className="space-y-2 text-sm text-gray-300">
          {hasRuntime && (
            <div className="flex items-center">
              <span className="text-indigo-400 mr-2">⏱</span>
              <span>{movie.Runtime}</span>
            </div>
          )}
          {hasRating && (
            <div className="flex items-center">
              <span className="text-indigo-400 mr-2">⭐</span>
              <span>{movie.imdbRating}</span>
            </div>
          )}
          {hasGenre && (
            <div className="flex items-center">
              <span className="text-indigo-400 mr-2">🎬</span>
              <span>{movie.Genre}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;