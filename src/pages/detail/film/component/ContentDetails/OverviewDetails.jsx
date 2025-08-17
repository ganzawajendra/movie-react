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
        setWriter(
          data.crew.filter(
            (member) =>
              member.job === "Writer" ||
              member.job === "Story" ||
              member.job === "Adaptation"
          )
        );
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching film credits:", error);
        setIsError(true);
      });
  }, [filmId]);

  if (isLoading) {
    return (
      <div className="w-full flex items-center justify-center bg-manual-dark text-white">
        Loading...
      </div>
    );
  } else if (isError) {
    return (
      <div className="w-full flex items-center justify-center bg-manual-dark text-white">
        Error
      </div>
    );
  }

  return (
    <div className="px-3 flex flex-col gap-10">
      {/* Overview */}
      <p className="text-white font-lato">{filmDetails.overview}</p>

      {/* Starring, Genres, dan Writers */}
      <div className="flex items-center gap-4 justify-start">
        <div className="flex flex-col gap-3">
          <p className="text-gray-500 font-montserrat-light">
            Starring
          </p>
          <p className="text-gray-500 font-montserrat-light">Genres</p>
          <p className="text-gray-500 font-montserrat-light">Writers</p>
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-white font-lato line-clamp-1">
            {cast.map((member) => member.name).join(", ")}
          </span>
          <span className="text-white font-lato">
            {filmDetails.genres.map((genre) => genre.name).join(", ")}
          </span>
          <span className="text-white font-lato">
            {writer.map((member) => member.original_name).join(", ")
              ? writer.map((member) => member.original_name).join(", ")
              : "..."}
          </span>
        </div>
      </div>

      {/* Budget */}
      <div className="flex flex-col gap-1">
        <h1 className="text-white max-w-max px-2 font-lato border-b-3 border-red-500">
          Budget
        </h1>
        <span className="text-white font-montserrat">
          {filmDetails.budget
            ? `${filmDetails.budget.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}`
            : "Not Mentioned"}
        </span>
      </div>

      {/* Companies */}
      <div className="flex flex-col gap-1">
        <h1 className="text-white max-w-max px-2 font-lato border-b-3 border-red-500">
          Companies
        </h1>
        <span className="text-white font-montserrat">
          {filmDetails.production_companies.length > 0
            ? filmDetails.production_companies
                .map((company) => company.name)
                .join(", ")
            : "Not Mentioned"}
        </span>
      </div>
    </div>
  );
};

export default OverviewDetails;
