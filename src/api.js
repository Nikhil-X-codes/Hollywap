const apiKey = import.meta.env.VITE_MOVIEDB_API_KEY;    // Use Vite environment variables
const apiUrl = import.meta.env.VITE_MOVIEDB_URL;

export const getPopular = async () => {
  try {
    const response = await fetch(`${apiUrl}/movie/popular?api_key=${apiKey}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching popular movies:", error);
    return [];
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await fetch(`${apiUrl}/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error searching movies:", error);
    return [];
  }
};
