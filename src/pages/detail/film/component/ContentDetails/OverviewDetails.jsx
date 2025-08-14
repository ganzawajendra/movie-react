import React, { useEffect, useState } from "react";
import { getCreditsMovie } from "../../../../../api/getMovies";

const OverviewDetails = ({ filmDetails, id }) => {
  const [cast, setCast] = useState();
  const [writer, setWriter] = useState();
  const filmId = id;

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    // Fetch film credits using filmId
    getCreditsMovie(filmId)
      .then((data) => {
        setCast(data.cast);
        setWriter(data.crew.filter((member) => member.job === "Writer" || member.job === "Story" || member.job === "Adaptation"));
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching film credits:", error);
        setIsError(true);
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

  return (
    <div className="px-3">
      <p className="text-white ">{filmDetails.overview}</p>
      <div className="flex items-center gap-4 mt-10 justify-start">
        <div className="flex flex-col gap-3">
          <p className="text-gray-500 font-montserrat-light text-sm">Starring</p>
          <p className="text-gray-500 font-montserrat-light text-sm">Genres</p>
          <p className="text-gray-500 font-montserrat-light text-sm">Writers</p>
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-white font-montserrat-light text-sm line-clamp-1">
            {cast.map((member) => member.name).join(", ")}
          </span>
          <span className="text-white font-montserrat-light text-sm">
            {filmDetails.genres.map((genre) => genre.name).join(", ")}
          </span>
          <span className="text-white font-montserrat-light text-sm">
            {writer.map((member) => member.original_name).join(", ") ? writer.map((member) => member.original_name).join(", ") : "..."}
          </span>
        </div>
      </div>
    </div>
  );
};

export default OverviewDetails;
