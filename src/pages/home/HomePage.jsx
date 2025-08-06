import React, { useEffect, useState } from "react";
import Navbar from "../../components/fragments/Navbar";
import PosterSection from "./components/PosterSection";
import HomeMovieCard from "./components/HomeMovieCard";
import {
  getMovieFromCountry,
  getPopularMovies,
  getTrendingMovies,
} from "../../api/getMovies";
import CategorySection from "../../components/fragments/CategorySection";
import { getTopTv, getTrendingTv } from "../../api/getTv";
import HomeTvCard from "./components/HomeTvCard";
import Footer from "../../components/fragments/Footer";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router";
import CardSlider from "./components/CardSlider";

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState();
  const [trendingTv, setTrendingTv] = useState();
  const [indonesianMovies, setIndonesianMovies] = useState();
  const [popularMovies, setPopularMovies] = useState();
  const [topTv, setTopTv] = useState();

  useEffect(() => {
    getTrendingMovies().then((data) => {
      setTrendingMovies(data);
    });

    getMovieFromCountry("id", "id-ID").then((data) => {
      setIndonesianMovies(data);
    });

    getTopTv().then((data) => {
      setTopTv(data);
    });

    getTrendingTv().then((data) => {
      setTrendingTv(data);
    });

    getPopularMovies().then((data) => {
      setPopularMovies(data);
    });
  }, []);

  if (!indonesianMovies || !topTv || !trendingMovies || !trendingTv || !popularMovies)
    return (
      <div className="w-full h-screen flex items-center justify-center bg-manual-dark text-white absolute">
        Loading...
      </div>
    );
  return (
    <>
      <div className="relative z-10">
        <Navbar />
        <div className="">
          <div className="">
            <div className="relative">
              <PosterSection />
            </div>
          </div>
          <div className="px-40 bg-manual-dark flex flex-col gap-10 pb-20">
            {/* Content 1 */}
            <CardSlider linkTo="film" category="Film Indonesia">
              {indonesianMovies.slice(0, 10).map((movie, item) => (
                    <HomeMovieCard
                      key={item}
                      src={movie.poster_path}
                      title={movie.title}
                    />
                  ))}
            </CardSlider>
            {/* Content 2 */}
            <CardSlider linkTo="acara-tv" category="Acara TV Terbaik">
              {topTv.slice(0, 10).map((tv, item) => (
                    <HomeTvCard
                      key={item}
                      src={tv.backdrop_path}
                      name={tv.name}
                    />
                  ))}
            </CardSlider>
            {/* Content 3 */}
            <CardSlider linkTo="film" category="Film Trending">
              {trendingMovies.slice(0, 10).map((movie, item) => (
                    <HomeMovieCard
                      key={item}
                      src={movie.poster_path}
                      title={movie.title}
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
                    <HomeMovieCard
                      key={item}
                      src={movie.poster_path}
                      title={movie.title}
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
