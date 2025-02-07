import React, { useContext } from "react";
import { FavoriteContext } from "./FavoriteContext";

function Fav() {
  const { favorites, removeFromFavorites } = useContext(FavoriteContext);

  return (
    <div className="p-6 text-white">
      <h1 className="text-2xl font-bold mb-4">Favorite Movies</h1>

      {favorites.length === 0 ? (
        <p className="text-gray-400">List is empty.</p>
      ) : (
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {favorites.map((movie) => (
            <li
              key={movie.id}
              className="p-4 border border-gray-700 rounded-lg bg-gray-800 shadow-lg flex flex-col items-center"
            >
              {/* Movie Image (Uniform Size) */}
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
                className="w-40 h-60 object-cover rounded-lg"
              />

              {/* Movie Title */}
              <h2 className="text-lg font-semibold mt-2">{movie.title}</h2>

              {/* Remove Button */}
              <button
                className="mt-2 px-4 py-1 text-sm bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                onClick={() => removeFromFavorites(movie.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Fav;
