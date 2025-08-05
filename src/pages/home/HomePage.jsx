import React, { useEffect, useState } from "react";
import Navbar from "../../components/fragments/Navbar";
import PosterSection from "./components/PosterSection";
import HomeMovieCard from "./components/HomeMovieCard";
import { getMovieFromCountry, getTrendingMovies } from "../../api/getMovies";
import CategoryFilm from "../../components/fragments/CategoryFilm";

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState();
  const [indonesianMovie, setIndonesianMovie] = useState();

  useEffect(() => {
    // getTrendingMovies().then((data) => {
    //   setTrendingMovies(data);
    // });
    getMovieFromCountry("id", "id-ID").then((data) => {
      setIndonesianMovie(data);
    });
  }, []);

  console.log(indonesianMovie);

  if (!indonesianMovie)
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
        <div className="px-40 bg-manual-dark">
          {/* Content 1 */}
          <div>
            <CategoryFilm>Film Indonesia</CategoryFilm>
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
          <div className="bg-amber-300">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque
            veritatis quis, ducimus ratione id harum consectetur quam facilis
            distinctio? Eius, quas dignissimos. Recusandae, ipsam soluta.
            Dolorum architecto doloribus illum odio?
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
