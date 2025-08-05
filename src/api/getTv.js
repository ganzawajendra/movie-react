import { tmdb } from "./tmdb"

export const getTopTv = async () => {
    const response = await tmdb.get("/tv/top_rated?language=en-US&page=1")
    return response.data.results
}