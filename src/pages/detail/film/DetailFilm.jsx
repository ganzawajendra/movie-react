import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import Navbar from "../../../components/fragments/Navbar";
import Footer from "../../../components/fragments/Footer";
import ButtonBack from "../../../components/fragments/ButtonBack";
import { getDetailMovie } from "../../../api/getMovies";

const DetailFilm = () => {
  const { filmId } = useParams();
  const [filmDetails, setFilmDetails] = useState();

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const baseImg = import.meta.env.VITE_MOVIE_BASE_IMG_URL;

  useEffect(() => {
    // Fetch film details using filmId
    getDetailMovie(filmId)
      .then((data) => {
        setFilmDetails(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching film details:", error);
        setIsError(true);
        setIsLoading(false);
      });
  }, [filmId]);

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

  console.log(filmDetails);

  return (
    <>
      <div className="relative z-10">
        <Navbar />
        <div className="px-40 min-h-screen bg-manual-dark py-20 flex flex-col gap-10">
          <ButtonBack to="/film" />
          <div className="relative">
            <div className="h-70 overflow-hidden relative">
              <img
                src={`${baseImg}/${filmDetails.backdrop_path}`}
                alt={filmDetails.title}
                className="object-cover w-full"
              />
              <div className="card-transition-gradient"></div>
            </div>
            <div className="absolute top-40 px-10">
              <div className="bg-amber-100">
                {/* Details Film */}
                <img src={`${baseImg}/${filmDetails.poster_path}`} alt={filmDetails.title} className="w-40" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer sticky />
    </>
  );
};

export default DetailFilm;
