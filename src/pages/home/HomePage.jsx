import React, { useEffect, useState } from "react";
import Navbar from "../../components/fragments/Navbar";
import PosterSection from "./components/PosterSection";
import HomeMovieCard from "./components/HomeMovieCard";
import { getMovieFromCountry, getTrendingMovies } from "../../api/getMovies";
import CategorySection from "../../components/fragments/CategorySection";
import { getTopTv } from "../../api/getTv";
import HomeTvCard from "./components/HomeTvCard";

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState();
  const [indonesianMovie, setIndonesianMovie] = useState();
  const [topTv, setTopTv] = useState();

  useEffect(() => {
    // getTrendingMovies().then((data) => {
    //   setTrendingMovies(data);
    // });
    getMovieFromCountry("id", "id-ID").then((data) => {
      setIndonesianMovie(data);
    });

    getTopTv().then((data) => {
      setTopTv(data);
    });
  }, []);

  console.log(topTv);

  if (!indonesianMovie || !topTv)
    return (
      <div className="w-full h-screen flex items-center justify-center bg-manual-dark text-white absolute">
        Loading...
      </div>
    );
  return (
    <>
      <Navbar />
      <div className="">
        <div className="">
          <div className="relative">
            <PosterSection />
          </div>
        </div>
        <div className="px-40 bg-manual-dark flex flex-col gap-10 pb-20">
          {/* Content 1 */}
          <div>
            <CategorySection>Film Indonesia</CategorySection>
            <div className="overflow-x-auto scrollbar-hide">
              <div className="grid grid-flow-col auto-cols-max gap-5 ">
                {indonesianMovie.slice(0, 10).map((movie, item) => (
                  <HomeMovieCard
                    key={item}
                    src={movie.poster_path}
                    title={movie.title}
                  />
                ))}
              </div>
            </div>
          </div>
          {/* Content 2 */}
          <div>
            <CategorySection>Acara TV Terbaik</CategorySection>
            <div className="overflow-x-auto scrollbar-hide">
              <div className="grid grid-flow-col auto-cols-max gap-5 ">
                {topTv.slice(0, 10).map((tv, item) => (
                  <HomeTvCard
                    key={item}
                    src={tv.backdrop_path}
                    name={tv.name}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
