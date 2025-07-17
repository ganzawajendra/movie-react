import axios from "axios";

// export const getTopMovies = async () => {
//   const apiKey = import.meta.env.VITE_MOVIE_API_KEY;
//   if (!apiKey) {
//     console.error("API key not found");
//     return;
//   }
//   const movies = await axios.get(
//     `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`
//   );
//   return movies.data.results;
// };
const apiKey = import.meta.env.VITE_MOVIE_API_KEY;
const baseUrl = import.meta.env.VITE_MOVIE_BASE_URL;

export const getTopMovies = async () => {
  const response = await axios.get(`${baseUrl}/top_rated?api_key=${apiKey}`);
  return response.data.results;
};
