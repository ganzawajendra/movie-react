import React, { useEffect, useState } from "react";
import { getPopularMovies } from "../../../api/getMovies";
import Button from "../../../components/fragments/Button";
import { IoIosArrowForward } from "react-icons/io";

const PosterSection = () => {
  const [popularMovies, setPopularMovies] = useState();
  const [nextSlide, setNextSlide] = useState(0);

  const handleNextSlide = () => {
    setNextSlide(nextSlide + 1);
    if (nextSlide === 9) {
      setNextSlide(0);
    }
  };

  useEffect(() => {
    getPopularMovies().then((data) => {
      console.log(data);
      setPopularMovies(data);
    });
  }, []);

  if (!popularMovies) return <div>Loading...</div>;

  return (
    <>
      <div className="flex">
        {popularMovies.slice(nextSlide, nextSlide + 1).map((movie) => (
          <div key={movie.id} className="relative min-w-screen">
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
              alt={movie.title}
              className="w-full h-screen object-cover"
            />
            <div className="card-detail-gradient"></div>
            <div className="absolute left-40 top-1/2 transfrom -translate-y-1/2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="bg-manual-red p-1 rounded shadow w-12 ">
                    <p className="text-white font-lato-bold text-center leading-4">
                      Top <span className="text-xl font-montserrat">10</span>
                    </p>
                  </div>
                  <p className="text-white font-lato-bold text-2xl">
                    Film No. {nextSlide + 1} Terpopuler
                  </p>
                </div>
                
              </div>
              <div className="w-1/2">
                <h1 className="text-white font-montserrat text-4xl my-5">
                  {movie.title}
                </h1>
              </div>
              <div className="w-1/2 my-2">
                <p className="line-clamp-4 text-white font-lato text-shadow-lg text-lg">
                  {movie.overview}
                </p>
              </div>
              <div>
                <Button
                  navlink={`/movie/${movie.id}`}
                  style="bg-white text-black hover:bg-gray-300 transition-all duration-300 font-lato"
                >
                  Detail Film
                </Button>
              </div>
            </div>
            <div className="absolute flex justify-end right-40 top-1/2 transfrom -translate-y-1/2">
                  <button
                    className="bg-manual-red p-1 rounded-full size-8 cursor-pointer flex justify-center items-center"
                    onClick={handleNextSlide}
                  >
                    <p className="text-white text-xl">
                      <IoIosArrowForward />
                    </p>
                  </button>
                </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PosterSection;
