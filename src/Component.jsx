import React, { useContext } from "react";
import { FavoriteContext } from "./FavoriteContext";

function MovieCard({ movie }) {
  const { favorites, addToFavorites } = useContext(FavoriteContext);
  const isFav = favorites.some((fav) => fav.id === movie.id);

  return (
    <div className="w-64 border border-gray-300 rounded-lg overflow-hidden shadow-md bg-white text-center m-1 relative">
      <div className="relative">
        <div className="w-full overflow-hidden">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-full object-cover"
          />
        </div>

        <button
          className={`absolute top-2 right-2 text-2xl p-2 rounded-full transition
            ${isFav ? "text-red-500" : "text-gray-400 hover:text-red-600"}`}
          title={isFav ? "Already in Favorites" : "Add to Favorites"}
          onClick={(e) => {
            e.preventDefault(); 
            !isFav && addToFavorites(movie);
          }}
        >
          ♥
        </button>
      </div>

      <div className="p-4">
        <h4 className="text-xl font-bold mt-3">{movie.title}</h4>
        <p className="text-gray-500 text-sm mt-2">{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
}

export default MovieCard;
