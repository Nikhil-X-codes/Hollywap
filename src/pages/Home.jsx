import React, { useState, useEffect } from 'react';
import Card from '../components/card';
import { searchMovies } from '../services/api';
import { useTheme } from '../contexts/toggle';

function Home() {
  const { theme } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isTyping, setIsTyping] = useState(false);

   const movieCollection = [
  {
    Title: "The Shawshank Redemption",
    Year: "1994",
    imdbID: "tt0111161",
    Poster: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_SX300.jpg",
    Runtime: "142 min",
    imdbRating: "9.3",
    Genre: "Drama"
  },
  {
    Title: "The Godfather",
    Year: "1972",
    imdbID: "tt0068646",
    Poster: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    Runtime: "175 min",
    imdbRating: "9.2",
    Genre: "Crime, Drama"
  },
  {
    Title: "Pulp Fiction",
    Year: "1994",
    imdbID: "tt0110912",
    Poster: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    Runtime: "154 min",
    imdbRating: "8.9",
    Genre: "Crime, Drama"
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Poster: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    Runtime: "201 min",
    imdbRating: "8.9",
    Genre: "Adventure, Fantasy"
  },
  {
    Title: "Forrest Gump",
    Year: "1994",
    imdbID: "tt0109830",
    Poster: "https://m.media-amazon.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    Runtime: "142 min",
    imdbRating: "8.8",
    Genre: "Drama, Romance"
  },
  {
    Title: "Inception",
    Year: "2010",
    imdbID: "tt1375666",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    Runtime: "148 min",
    imdbRating: "8.8",
    Genre: "Action, Adventure, Sci-Fi"
  },
  {
    Title: "The Matrix",
    Year: "1999",
    imdbID: "tt0133093",
    Poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    Runtime: "136 min",
    imdbRating: "8.7",
    Genre: "Action, Sci-Fi"
  },
  {
    Title: "Parasite",
    Year: "2019",
    imdbID: "tt6751668",
    Poster: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
    Runtime: "132 min",
    imdbRating: "8.6",
    Genre: "Comedy, Drama, Thriller"
  },
  {
    Title: "Interstellar",
    Year: "2014",
    imdbID: "tt0816692",
    Poster: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    Runtime: "169 min",
    imdbRating: "8.6",
    Genre: "Adventure, Drama, Sci-Fi"
  },
  {
    Title: "The Silence of the Lambs",
    Year: "1991",
    imdbID: "tt0102926",
    Poster: "https://m.media-amazon.com/images/M/MV5BNjNhZTk0ZmEtNjJhMi00YzFlLWE1MmEtYzM1M2ZmMGMwMTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    Runtime: "118 min",
    imdbRating: "8.6",
    Genre: "Crime, Drama, Thriller"
  },
  {
    Title: "The Green Mile",
    Year: "1999",
    imdbID: "tt0120689",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_SX300.jpg",
    Runtime: "189 min",
    imdbRating: "8.6",
    Genre: "Crime, Drama, Fantasy"
  },
  {
    Title: "Gladiator",
    Year: "2000",
    imdbID: "tt0172495",
    Poster: "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    Runtime: "155 min",
    imdbRating: "8.5",
    Genre: "Action, Adventure, Drama"
  },
  {
    Title: "The Departed",
    Year: "2006",
    imdbID: "tt0407887",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_SX300.jpg",
    Runtime: "151 min",
    imdbRating: "8.5",
    Genre: "Crime, Drama, Thriller"
  },
  {
    Title: "Whiplash",
    Year: "2014",
    imdbID: "tt2582802",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTA5NDZlZGUtMjAxOS00YTRkLTkwYmMtYWQ0NWEwZDZiNjEzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    Runtime: "106 min",
    imdbRating: "8.5",
    Genre: "Drama, Music"
  },
  {
    Title: "Joker",
    Year: "2019",
    imdbID: "tt7286456",
    Poster: "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
    Runtime: "122 min",
    imdbRating: "8.4",
    Genre: "Crime, Drama, Thriller"
  }
];

  useEffect(() => {
    const timer = setTimeout(() => {
      const fetchMovies = async () => {
        if (!searchQuery.trim()) {
          setMovies(movieCollection);
          setIsTyping(false);
          return;
        }

        setLoading(true);
        setError(null);
        setIsTyping(false);

        try {
          const data = await searchMovies(searchQuery);
          if (data?.Search) {
            setMovies(data.Search);
          } else {
            setMovies([]);
            if (data?.Error) setError(data.Error);
          }
        } catch (err) {
          setError('Failed to fetch movies');
        } finally {
          setLoading(false);
        }
      };

      fetchMovies();
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  useEffect(() => {
    setMovies(movieCollection);
  }, []);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
    setIsTyping(true);
  };

  const bgColor = theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50';
  const textColor = theme === 'dark' ? 'text-gray-100' : 'text-gray-800';
  const inputBgColor = theme === 'dark' ? 'bg-gray-800' : 'bg-white';
  const inputBorderColor = theme === 'dark' ? 'border-gray-700' : 'border-gray-300';
  const inputFocusColor = theme === 'dark' ? 'focus:border-blue-500' : 'focus:border-blue-400';
  const placeholderColor = theme === 'dark' ? 'placeholder-gray-400' : 'placeholder-gray-500';
  const errorColor = theme === 'dark' ? 'text-red-400' : 'text-red-600';
  const emptyStateColor = theme === 'dark' ? 'text-gray-400' : 'text-gray-500';

  return (
    <div className={`${bgColor} min-h-screen transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
            Discover Amazing Movies
          </h1>
          <p className={`text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Search for your favorite movies, explore details, and save them to your favorites
          </p>
        </div>

        {/* Search Section */}
        <div className="relative mb-12 max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for movies..."
              className={`w-full px-6 py-4 rounded-xl shadow-lg text-lg ${inputBgColor} ${inputBorderColor} ${inputFocusColor} ${placeholderColor} ${textColor} transition-all duration-300 focus:ring-2 ${theme === 'dark' ? 'focus:ring-blue-500' : 'focus:ring-blue-400'} focus:outline-none`}
              value={searchQuery}
              onChange={handleInputChange}
            />
            <svg
              className={`absolute right-4 top-1/2 transform -translate-y-1/2 h-6 w-6 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          {isTyping && (
            <p className={`mt-2 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'} transition-opacity duration-200`}>
              Start typing to search movies...
            </p>
          )}
        </div>

        {/* Content Section */}
        <div className="transition-all duration-300">
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className={`animate-spin rounded-full h-12 w-12 border-t-2 ${theme === 'dark' ? 'border-blue-500' : 'border-blue-400'}`}></div>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <div className="inline-block p-4 rounded-lg bg-opacity-20 bg-red-500">
                <svg
                  className="w-12 h-12 mx-auto mb-4 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className={`text-xl font-medium ${errorColor}`}>Oops! Something went wrong</p>
                <p className={`mt-2 ${emptyStateColor}`}>{error}</p>
              </div>
            </div>
          ) : movies.length > 0 ? (
            <>
              <h2 className={`text-2xl font-bold mb-6 ${textColor}`}>
                {searchQuery ? 'Search Results' : 'Popular Movies'}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                {movies.map((movie, index) => (
                  <Card key={index} movie={movie} theme={theme} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <div className="inline-block p-4 rounded-lg bg-opacity-20 bg-blue-500">
                <svg
                  className="w-12 h-12 mx-auto mb-4 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className={`text-xl font-medium ${emptyStateColor}`}>No movies found</p>
                <p className={`mt-2 ${emptyStateColor}`}>Try a different search term</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;