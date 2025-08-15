import React, { useEffect, useState } from "react";
import { getSimilarMovies } from "../../../../../api/getMovies";
import MovieCard from "../../../../../components/fragments/Card/MovieCard";

const MoreLikeThisDetails = ({ id }) => {
  const [similarMovies, setSimilarMovies] = useState();

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    // Fetch similar movies using the film ID
    getSimilarMovies(id).then((data) => {
      setSimilarMovies(data.filter(movie => movie.poster_path !== null));
      setIsLoading(false);

    }).catch((error) => {
      console.error("Error fetching similar movies:", error);
      setIsError(true);
    });
  }, [id]);

  if (isLoading) {
    return (
      <div className="w-full flex items-center justify-center bg-manual-dark text-white ">
        Loading...
      </div>
    );
  } else if (isError) {
    return (
      <div className="w-full flex items-center justify-center bg-manual-dark text-white ">
        Error
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-4 gap-4">
      {similarMovies.slice(0, 8).map((movie, item) => (
          <MovieCard
            key={item}
            src={movie.poster_path}
            title={movie.title}
            filmId={movie.id}
          />
        
      ))}
    </div>
  );
};

export default MoreLikeThisDetails;
