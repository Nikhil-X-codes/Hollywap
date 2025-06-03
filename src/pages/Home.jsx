import React, { useState, useEffect, use } from 'react';
import Card from '../components/card';
import { searchMovies} from '../services/api'; 
import { useTheme } from '../contexts/toggle';

function Home() {
  const { theme } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

   useEffect(() => {
    const fetchMovies = async () => {

      if (!searchQuery.trim()) {
        setMovies([]);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const data = await searchMovies(searchQuery);
        console.log("Fetched movies:", data);

        if (data && data.Search) {
          setMovies(data.Search);
        } 
        
        else {
          setMovies([]);
          if (data?.Error) setError(data.Error);
        }
      } 
      
      catch (err) {
        setError('Failed to fetch movies');
      } 
      
      finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [searchQuery]);

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
    setMovies(movieCollection);
  }, []);
  
  const bgColor = theme === 'dark' ? 'bg-gray-900' : 'bg-white';
  const textColor = theme === 'dark' ? 'text-gray-100' : 'text-gray-800';
  const borderColor = theme === 'dark' ? 'border-gray-700' : 'border-gray-300';
  const placeholderColor = theme === 'dark' ? 'placeholder-gray-400' : 'placeholder-gray-500';
  const errorColor = theme === 'dark' ? 'text-red-400' : 'text-red-500';
  const emptyStateColor = theme === 'dark' ? 'text-gray-400' : 'text-gray-500';

  return (
    <div className={`${bgColor} min-h-screen`}>
      <div className={`max-w-4xl mx-auto p-4 ${textColor}`}>
        <div className="relative flex items-center mb-8">
          <input
            type="text"
            placeholder="Search movies..."
            className={`w-full px-4 py-2 border rounded shadow-sm ${borderColor} ${placeholderColor} ${bgColor} ${textColor}`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {loading ? (
          <div className="text-center py-12">
            <p className={emptyStateColor}>Loading...</p>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className={errorColor}>{error}</p>
          </div>
        ) : movies.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {movies.map((movie, index) => (
              <Card key={index} movie={movie} theme={theme} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className={emptyStateColor}>No movies found</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;