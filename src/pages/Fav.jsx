import { useFav } from '../contexts/fav';
import { useTheme } from '../contexts/toggle';

function Fav() {
  const { favItems, removeFromFav } = useFav();
  const { theme } = useTheme();

  return (
    <div className={`p-4 min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <h2 className="text-2xl font-bold mb-4">My Favorite Movies</h2>
      {favItems.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {favItems.map((movie) => (
            <div
              key={movie.Title}
              className={`border rounded-lg overflow-hidden shadow-lg ${
                theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
              }`}
            >
             <img
  src={movie.Poster}
  alt={movie.Title}
  className="w-full object-contain" 
  onError={(e) => (e.target.src = 'https://via.placeholder.com/300x450?text=No+Poster')}
/>
              <div className="p-4">
                <h3 className="font-bold">{movie.Title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{movie.Year}</p>
                <button
                  onClick={() => removeFromFav(movie.Title)}
                  className="mt-2 text-red-500 hover:underline text-sm"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Fav;
