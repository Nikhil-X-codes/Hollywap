const baseURL =  import.meta.env.VITE_API_URL;                                                                                          
const apiKey = import.meta.env.VITE_API_KEY;

export const getMovieById = async (movieId) => {
    const url = `${baseURL}?i=${movieId}&apikey=${apiKey}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching movie data by ID:', error);
        return null;
    }
};


export const searchMovies = async (query, page = 1) => {
    const url = `${baseURL}?s=${encodeURIComponent(query)}&page=${page}&apikey=${apiKey}`;
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.Response === "True") {
            return data; 
        } else {
            console.warn('No results:', data.Error);
            return null;
        }
    } catch (error) {
        console.error('Error searching movies:', error);
        return null;
    }
};
