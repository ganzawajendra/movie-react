import React from "react";
import { Link } from "react-router";

const MovieCard = ({src, title, style = "", filmId}) => {
  const baseImg = import.meta.env.VITE_MOVIE_BASE_IMG_URL;

  return (
    <>
    <Link to={`/film/detail/${filmId}`}>
      <div className={`w-full flex-shrink-0 ${style} overflow-hidden relative group`}>
          <img 
          src={`${baseImg}/${src}`}
          alt={title}
          className="w-full object-contain"/>
          <img src="/img/tmdbLogo.png" alt="Logo TMDB" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:top-1/4 transition-all duration-300 w-20 z-2"/>
          <div className="absolute w-full bottom-0 transform -translate-x-50 p-2 group-hover:-translate-x-0 transition-all duration-300 z-2">
            <h3 className="text-white text-sm text-center font-montserrat">{title}</h3>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-black/0 group-hover:bg-black/40 transition-all duration-300"></div>
        </div>
    </Link>
    </>
  );
};  

export default MovieCard;
