import axios from "axios";
import { tmdb } from "./tmdb";
const apiKey = import.meta.env.VITE_MOVIE_API_KEY;
const baseUrl = import.meta.env.VITE_MOVIE_BASE_URL;

export const getTopMovies = async () => {
  const response = await axios.get(`${baseUrl}/top_rated?api_key=${apiKey}`);
  return response.data.results;
};

export const getDetailMovie = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}?api_key=${apiKey}`);
  return response.data;
};

export const getPopularMovies = async () => {
  const response = await tmdb.get(
    "/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"
  );
  return response.data.results;
};

export const getTrendingMovies = async () => {
  const response = await tmdb.get("/trending/movie/week");
  return response.data.results;
};

export const getMovieFromCountry = async (id_country, language) => {
  const region = id_country.toUpperCase();
  const response = await tmdb.get(
    `/discover/movie?include_adult=false&include_video=false&language=${language}&page=1&region=${region}&sort_by=popularity.desc&with_origin_country=${region}&with_original_language=${id_country}&year=2025`
  );
  return response.data.results;
};
