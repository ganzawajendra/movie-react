import axios from "axios";
const apiKey = import.meta.env.VITE_MOVIE_API_KEY;
const baseUrl = import.meta.env.VITE_MOVIE_BASE_URL;

export const getTopMovies = async () => {
  const response = await axios.get(`${baseUrl}/top_rated?api_key=${apiKey}`);
  return response.data.results;
};

export const getMovieDetails = async (id) => {
    const response = await axios.get(`${baseUrl}/${id}?api_key=${apiKey}`);
    return response.data;
}