import React, { useState, useEffect } from 'react';
import MovieCard from './Component';
import { getPopular, searchMovies } from './api';

const genreMap = {
  Horror: 27,
  Action: 28,
  Comedy: 35,
  Romantic: 10749,
  "Sci-Fi": 878,
  Drama: 18,
};

function Home() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [searched, setSearched] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      if (!searched && !selectedGenre) {
        const popularMovies = await getPopular();
        setMovies(popularMovies);
      }
    };
    fetchMovies();
  }, [searched, selectedGenre]);

  const handleSearch = async () => {
    if (search.trim() === "") {
      setSearched(false);
      setSelectedGenre("");
      const popularMovies = await getPopular();
      setMovies(popularMovies);
    } else {
      setSearched(true);
      const results = await searchMovies(search);
      setMovies(results);
    }
  };

  const handleGenreSelect = async (genre) => {
    setSelectedGenre(genre);
    setSearched(false);
    const genreId = genreMap[genre];
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=46dcfd253acf9ca38369193ccb07c77a&with_genres=${genreId}`);
    const data = await response.json();
    setMovies(data.results);
  };

  return (
    <>
      <form className="flex justify-center items-center gap-4 bg-gray-100 p-4 rounded-lg shadow-md w-fit mx-auto mt-6" onSubmit={(e) => e.preventDefault()}>
        <input 
          type="text" 
          placeholder="Enter Movie Name" 
          className="p-2 text-lg border border-gray-300 rounded-md focus:outline-none" 
          value={search} 
          onChange={(e) => setSearch(e.target.value)}
        />
        <button 
          type="button" 
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600" 
          onClick={handleSearch}
        >Search</button>
      </form>

      <div className="flex justify-center gap-4 p-4">
        {Object.keys(genreMap).map((genre) => (
          <button 
            key={genre} 
            className={`p-2 rounded-md ${selectedGenre === genre ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'} hover:bg-blue-500`} 
            onClick={() => handleGenreSelect(genre)}
          >
            {genre}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5 mt-6">
        {movies.length > 0 ? (
          movies.map((movie, index) => (
            <a 
              key={index} 
              href={`https://www.themoviedb.org/movie/${movie.id}`} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <MovieCard movie={movie} />
            </a>
          ))
        ) : (
          <p className="text-center col-span-full text-lg text-gray-600">No movies found.</p>
        )}
      </div>
    </>
  );
}

export default Home;
