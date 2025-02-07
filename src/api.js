const apikey = "46dcfd253acf9ca38369193ccb07c77a";
const url = "https://api.themoviedb.org/3"; 

export const getPopular = async () => {
    try {
        const response = await fetch(`${url}/movie/popular?api_key=${apikey}`);
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
        const response = await fetch(`${url}/search/movie?api_key=${apikey}&query=${encodeURIComponent(query)}`);
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

