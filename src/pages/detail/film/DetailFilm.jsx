import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import Navbar from "../../../components/fragments/Navbar";
import Footer from "../../../components/fragments/Footer";
import ButtonBack from "../../../components/fragments/ButtonBack";
import { getDetailMovie } from "../../../api/getMovies";
import { FaStar } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";
import { TbTimeDuration30 } from "react-icons/tb";
import DetailLayout from "./component/DetailLayout";

const DetailFilm = () => {
  const { filmId } = useParams();
  const [filmDetails, setFilmDetails] = useState();

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const baseImg = import.meta.env.VITE_MOVIE_BASE_IMG_URL;

  const formatDuration = (time) => {
    const hours = Math.floor(time / 60);
    const remainingTime = time % 60;
    return `${hours}h ${remainingTime}m`;
  };

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
            <div className="h-100 overflow-hidden relative flex items-center">

              {/* Background Image */}
              <img
                src={`${baseImg}/${filmDetails.backdrop_path}`}
                alt={filmDetails.title}
                className="object-cover w-full"
              />
              <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-[#181f20] to-transparent"></div>
            </div>

            {/* Content Movie */}
            <div className="absolute top-70 px-10 w-full">
              <div className="flex gap-3">

                {/* Poster Movie */}
                <img
                  src={`${baseImg}/${filmDetails.poster_path}`}
                  alt={filmDetails.title}
                  className="w-90"
                />

                {/* Details Movie */}
                <div className="pt-30 w-full">
                  {/* Details Movie General */}
                  <div className="flex items-center">
                    <div className="w-full">
                      {/* Movie Title */}
                      <h2 className="text-white font-montserrat text-2xl">
                        {filmDetails.title}
                      </h2>
                      <div className="flex">
                        {/* Movie Year */}
                        <p className="text-gray-500 font-lato">{filmDetails.release_date.slice(0, 4)}</p>
                        <span className="text-gray-500 font-lato mx-3">|</span>
                        {/* Movie Duration */}
                        <p className="text-gray-500 font-lato">{formatDuration(filmDetails.runtime)}</p>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        {/* Movie Rating */}
                        <p className="text-white font-lato text-xl">
                          {filmDetails.vote_average}
                        </p>
                        <FaStar style={{ color: "yellow" }} />
                      </div>
                    </div>
                  </div>

                  {/* Details Movie Additional */}
                  <DetailLayout filmDetails={filmDetails}></DetailLayout>
                </div>
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
