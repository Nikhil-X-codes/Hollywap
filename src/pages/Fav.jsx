import { useFav } from '../contexts/fav';
import { useTheme } from '../contexts/toggle';

function Fav() {
  const { favItems, removeFromFav } = useFav();
  const { theme } = useTheme();

  const bgColor = theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50';
  const cardBg = theme === 'dark' ? 'bg-gray-800' : 'bg-white';
  const borderColor = theme === 'dark' ? 'border-gray-700' : 'border-gray-200';
  const textColor = theme === 'dark' ? 'text-gray-100' : 'text-gray-800';
  const secondaryText = theme === 'dark' ? 'text-gray-400' : 'text-gray-600';

  return (
    <div className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 ${bgColor}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className={`text-3xl md:text-4xl font-bold mb-2 ${textColor}`}>
            My Favorite Movies
          </h1>
          <p className={`text-lg ${secondaryText}`}>
            {favItems.length} {favItems.length === 1 ? 'movie' : 'movies'} saved
          </p>
        </div>

        {/* Content */}
        {favItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-24 w-24 text-gray-400 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
            <h3 className={`text-xl font-medium mb-2 ${textColor}`}>
              Your favorites list is empty
            </h3>
            <p className={`max-w-md text-center ${secondaryText}`}>
              You haven't added any movies to your favorites yet. Start exploring and add some!
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {favItems.map((movie) => (
              <div
                key={movie.Title}
                className={`rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${cardBg} ${borderColor}`}
              >
                <div className="relative pt-[150%]">
                  <img
                    src={movie.Poster}
                    alt={movie.Title}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    onError={(e) => (e.target.src = 'https://via.placeholder.com/300x450?text=No+Poster')}
                  />
                </div>
                <div className="p-4">
                  <h3 className={`font-bold text-lg mb-1 truncate ${textColor}`}>
                    {movie.Title}
                  </h3>
                  <p className={`text-sm mb-4 ${secondaryText}`}>
                    {movie.Year} {movie.Runtime && `• ${movie.Runtime}`}
                  </p>
                  <div className="flex justify-center">
                    <button
                      onClick={() => removeFromFav(movie.Title)}
                      className={`px-4 py-2 rounded-full flex items-center space-x-2 transition-colors ${
                        theme === 'dark'
                          ? 'bg-red-900/30 text-red-400 hover:bg-red-900/50'
                          : 'bg-red-100 text-red-600 hover:bg-red-200'
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Remove</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Fav;