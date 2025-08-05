import React from "react";

const HomeMovieCard = ({src, title}) => {
  return (
    <>
      <div className="w-40 flex-shrink-0">
          <img 
          src={`https://image.tmdb.org/t/p/w500/${src}`}
          alt={title}
          className="w-full object-contain"/>
        </div>
    </>
  );
};

export default HomeMovieCard;
