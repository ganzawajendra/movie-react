import axios from "axios";

const apiKey = import.meta.env.VITE_MOVIE_API_KEY;
const baseURL = import.meta.env.VITE_BASE_URL;

export const tmdb = axios.create({
    baseURL,
    params: {
        api_key: apiKey,
    },
});

