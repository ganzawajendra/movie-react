import React from "react";
import { PiTelevision } from "react-icons/pi";

const HomeTvCard = ({ src, name }) => {
  return (
    <div className="w-60 flex-shrink-0 max-h-max group">
      <div className="relative">
        <img
          src={`https://image.tmdb.org/t/p/w500/${src}`}
          alt={name}
          className="w-full object-contain "
        />
        <div className="absolute bottom-2 right-2 z-10 group-hover:opacity-0 group-hover:-bottom-2 group-hover:scale-0 transition-all duration-300">
          <p className="text-white text-3xl">
            <PiTelevision />
          </p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 group-hover:bg-black/30 transition-all duration-300"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-0 -bottom-5 group-hover:scale-100 group-hover:bottom-5 transition-all duration-300 text-center">
          <p className="text-white font-montserrat text-md">{name}</p>
        </div>
      </div>
    </div>
  );
};

export default HomeTvCard;
