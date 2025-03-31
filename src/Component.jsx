import React, { useContext } from "react";
import { FavoriteContext } from "./FavoriteContext";

function MovieCard({ movie }) {
  const { favorites, addToFavorites } = useContext(FavoriteContext);
  const isFav = favorites.some((fav) => fav.id === movie.id);

  return (
    <div className="max-w-sm w-full mx-auto border border-gray-300 rounded-lg overflow-hidden shadow-lg bg-white text-center m-4 transition transform hover:scale-105 hover:shadow-2xl">
      
      <div className="relative w-full h-96 overflow-hidden">  
        <img
          src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : "https://via.placeholder.com/500x750?text=No+Image"}
          alt={movie.title}
          className="w-full h-full object-cover"
        />
        <button
          className={`absolute top-4 right-4 text-2xl p-2 rounded-full transition-all duration-300 
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

      <div className="p-5 h-32 flex flex-col justify-between">
        <h4 className="text-xl font-bold text-gray-800 truncate">{movie.title || "No Title Available"}</h4>
        <p className="text-gray-500 text-sm">
          {movie.release_date ? movie.release_date.split("-")[0] : "Unknown Year"}
        </p>
      </div>
    </div>
  );
}

export default MovieCard;
