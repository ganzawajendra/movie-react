import { useEffect, useState } from "react";
import Navbar from "../../components/fragments/Navbar";
import Footer from "../../components/fragments/Footer";
import {
  getMovieFromCountry,
  getPopularMovies,
  getTopMovies,
  getTrendingMovies,
} from "../../api/getMovies";
import MovieCard from "../../components/fragments/Card/MovieCard";
import SectionCard from "./components/SectionCard";

const FilmPage = () => {
  const [trendingMovies, setTrendingMovies] = useState();
  const [indonesianMovies, setIndonesianMovies] = useState();
  const [popularMovies, setPopularMovies] = useState();
  const [topMovies, setTopMovies] = useState();

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    Promise.all([
      getTrendingMovies(),
      getMovieFromCountry("id", "id-ID"),
      getPopularMovies(),
      getTopMovies(),
    ])
      .then(([trendingMovies, indonesianMovies, popularMovies, topMovies]) => {
        setTrendingMovies(trendingMovies);
        setIndonesianMovies(indonesianMovies);
        setPopularMovies(popularMovies);
        setTopMovies(topMovies);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-manual-dark text-white absolute">
        Loading...
      </div>
    );
  } else if (isError) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-manual-dark text-white absolute">
        Error
      </div>
    );
  }

  return (
    <>
      <div className="relative z-10">
        <Navbar />
        <div className="px-40 min-h-screen bg-manual-dark py-20 flex flex-col gap-20">
          {/* Content 1 */}
          <SectionCard content={trendingMovies} category="Film Trending">
            {trendingMovies.slice(1, -1).map((movie, item) => (
              <MovieCard
                key={item}
                src={movie.poster_path}
                title={movie.title}
                style="col-span-1 w-full"
                filmId={movie.id}
              />
            ))}
          </SectionCard>
          {/* Content 2 */}
          <SectionCard content={indonesianMovies} category={"Film Indonesia"}>
            {indonesianMovies.slice(1, -1).map((movie, item) => (
              <MovieCard
                key={item}
                src={movie.poster_path}
                title={movie.title}
                style="col-span-1 w-full"
                filmId={movie.id}
              />
            ))}
          </SectionCard>
          {/* Content 3 */}
          <SectionCard content={popularMovies} category={"Film Populer"}>
            {popularMovies.slice(1, -1).map((movie, item) => (
              <MovieCard
                key={item}
                src={movie.poster_path}
                title={movie.title}
                style="col-span-1 w-full"
                filmId={movie.id}
              />
            ))}
          </SectionCard>
          {/* Content 4 */}
          <SectionCard content={topMovies} category={"Film Terbaik"}>
            {topMovies.slice(1, -1).map((movie, item) => (
              <MovieCard
                key={item}
                src={movie.poster_path}
                title={movie.title}
                style="col-span-1 w-full"
                filmId={movie.id}
              />
            ))}
          </SectionCard>
        </div>
      </div>
      <Footer sticky />
    </>
  );
};

export default FilmPage;
