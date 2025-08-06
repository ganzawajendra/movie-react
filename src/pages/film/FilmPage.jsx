import React, { useEffect, useState } from "react";
import Navbar from "../../components/fragments/Navbar";
import Footer from "../../components/fragments/Footer";
import { getTrendingMovies } from "../../api/getMovies";
import MovieCard from "../../components/fragments/Card/MovieCard";
import { FaStar } from "react-icons/fa";

const FilmPage = () => {
  const [trendingMovies, setTrendingMovies] = useState();

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    Promise.all([getTrendingMovies()])
      .then(([trendingMovies]) => {
        setTrendingMovies(trendingMovies);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading)
    return (
      <div className="w-full h-screen flex items-center justify-center bg-manual-dark text-white absolute">
        Loading...
      </div>
    );

  if (isError)
    return (
      <div className="w-full h-screen flex items-center justify-center bg-manual-dark text-white absolute">
        Error
      </div>
    );

  console.log(trendingMovies);

  return (
    <>
      <div className="relative z-10">
        <Navbar />
        <div className="px-40 min-h-screen bg-manual-dark pt-20">
          {/* Content 1 */}
          <div className="grid grid-cols-6 gap-5">
            <div
              key={trendingMovies[0].id}
              className="col-span-3 row-span-2 w-full relative"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500/${trendingMovies[0].backdrop_path}`}
                alt={trendingMovies[0].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bg-black/30 w-full h-full top-0 left-0"></div>
              <div className="card-transition-gradient"></div>
              <div className="absolute bottom-10 left-10">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${trendingMovies[0].poster_path}`}
                  alt={trendingMovies[0].title}
                  className="w-30 object-cover rounded"
                />
              </div>
              <div className="absolute bottom-10 left-50">
                <div className="flex flex-col">
                    <h1 className="text-2xl font-montserrat-bold text-white line-clamp-1">
                      {trendingMovies[0].title}
                    </h1>
                    <div className="flex items-center gap-2"> 
                    <FaStar style={{ color: "yellow" }}/>
                    <p className="text-white font-lato-light">{trendingMovies[0].vote_average} (TMDB)</p>
                    </div>
                  <p className="text-white font-lato-light line-clamp-5">
                    {trendingMovies[0].overview}
                  </p>
                </div>
              </div>
            </div>
            {trendingMovies.slice(1, -1).map((movie, item) => (
              <MovieCard
                key={item}
                src={movie.poster_path}
                title={movie.title}
                style="col-span-1 w-full"
              />
            ))}
          </div>
        </div>
      </div>
      <Footer sticky />
    </>
  );
};

export default FilmPage;
