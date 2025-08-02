import axios from "axios";

const apiKey = import.meta.env.VITE_MOVIE_API_KEY;
const baseURL = import.meta.env.VITE_BASE_URL;
const accessToken = import.meta.env.VITE_MOVIE_API_TOKEN;

export const tmdb = axios.create({
    baseURL,
    params: {
        api_key: apiKey,
    },
});

export const secureTmdb = axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});


