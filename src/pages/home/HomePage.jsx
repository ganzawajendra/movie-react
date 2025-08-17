import React, { useEffect, useState } from "react";
import Navbar from "../../components/fragments/Navbar";
import PosterSection from "./components/PosterSection";
import MovieCard from "../../components/fragments/Card/MovieCard";
import {
  getMovieFromCountry,
  getPopularMovies,
  getTrendingMovies,
} from "../../api/getMovies";
import { getTopTv, getTrendingTv } from "../../api/getTv";
import HomeTvCard from "../../components/fragments/Card/TvCard";
import Footer from "../../components/fragments/Footer";
import CardSlider from "./components/CardSlider";

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState();
  const [trendingTv, setTrendingTv] = useState();
  const [indonesianMovies, setIndonesianMovies] = useState();
  const [popularMovies, setPopularMovies] = useState();
  const [topTv, setTopTv] = useState();

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    Promise.all([
      getTrendingMovies(),
      getMovieFromCountry("id", "id-ID"),
      getTopTv(),
      getTrendingTv(),
      getPopularMovies(),
    ])
    .then(([trendingMovies, indonesianMovies, topTv, trendingTv, popularMovies]) => {
      setTrendingMovies(trendingMovies);
      setIndonesianMovies(indonesianMovies);
      setTopTv(topTv);
      setTrendingTv(trendingTv);
      setPopularMovies(popularMovies);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      setIsError(true);
    })
    .finally(() => {
      setIsLoading(false);
    });
  }, []);

  if(isLoading) return (
    <div className="w-full h-screen flex items-center justify-center bg-manual-dark text-white absolute">
      Loading...
    </div>
  )

  if(isError) return (
    <div className="w-full h-screen flex items-center justify-center bg-manual-dark text-white absolute">
      Error
    </div>
  )

  return (
    <>
      <div className="relative z-10">
        <Navbar />
        <div>
          <div className="relative">
            <PosterSection />
          </div>
          <div className="px-40 bg-manual-dark flex flex-col gap-10 pb-20">
            {/* Content 1 */}
            <CardSlider linkTo="film" category="Film Indonesia">
              {indonesianMovies.slice(0, 10).map((movie, item) => (
                <MovieCard
                  key={item}
                  src={movie.poster_path}
                  title={movie.title}
                  filmId={movie.id}
                  width = "w-40"
                />
              ))}
            </CardSlider>
            {/* Content 2 */}
            <CardSlider linkTo="acara-tv" category="Acara TV Terbaik">
              {topTv.slice(0, 10).map((tv, item) => (
                <HomeTvCard key={item} src={tv.backdrop_path} name={tv.name} />
              ))}
            </CardSlider>
            {/* Content 3 */}
            <CardSlider linkTo="film" category="Film Trending">
              {trendingMovies.slice(0, 10).map((movie, item) => (
                <MovieCard
                  key={item}
                  src={movie.poster_path}
                  title={movie.title}
                  filmId={movie.id}
                  width = "w-40"
                />
              ))}
            </CardSlider>
            {/* Content 4 */}
            <CardSlider linkTo="acara-tv" category="Acara TV Trending">
              {trendingTv.slice(0, 10).map((trendingTv, item) => (
                <HomeTvCard
                  key={item}
                  src={trendingTv.backdrop_path}
                  name={trendingTv.name}
                />
              ))}
            </CardSlider>
            {/* Content 5 */}
            <CardSlider linkTo="film" category="Film Populer">
              {popularMovies.slice(0, 10).map((movie, item) => (
                <MovieCard
                  key={item}
                  src={movie.poster_path}
                  title={movie.title}
                  filmId={movie.id}
                  width = "w-40"
                />
              ))}
            </CardSlider>
          </div>
        </div>
      </div>
      <Footer sticky />
    </>
  );
};

export default HomePage;
