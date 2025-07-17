import React, { useEffect, useState } from "react";
import Navbar from "../../components/fragments/Navbar";
import MainHeader from "../../assets/images/mainHeader.png";
import movie1 from "../../assets/images/movie1.jpg";
import Button from "../../components/fragments/Button";
import CardMovie from "./component/CardMovie";
import axios from "axios";
import { getTopMovies } from "../../api/getMovies";

const HomePage = () => {

  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    getTopMovies().then((data) => {
      setTopMovies(data);
    });
  }, []);

  return (
    <div>
      <Navbar />
      <div className="bg-image h-screen flex items-center justify-center">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black/70"></div>
        <div className="absolute bottom-0 left-0 w-full h-3/4 bg-gradient-to-t from-black/100"></div>
        <div className="relative flex flex-col items-center">
          <h1 className="text-white text-5xl font-montserrat-thin ">
            Welcome to Moflix
          </h1>
          <p className="text-white text-2xl font-lato tracking-wide">
            Cari Info Film, Acara TV, dan Film Terbaru
          </p>
          <Button
            navlink="/register"
            style="bg-manual-red text-manual-white mt-7"
          >
            Daftar Sekarang
          </Button>
        </div>
      </div>
      <div className="pb-20 px-40 bg-black">
        <h2 className="text-white text-xl uppercase font-lato-bold mb-5">
          Top Rated Movies
        </h2>
        <div className="grid grid-cols-5 gap-5">
          {/* Movie cards go here */}
          {topMovies.slice(0, 10).map((movie) => (
            <CardMovie
              key={movie.id}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}.jpg`}
              name={movie.title}
            >
              {movie.title}
            </CardMovie>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
