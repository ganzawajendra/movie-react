import React from "react";

const CardMovie = ({ src, name, children}) => {
  return (
    <div className="bg-gray-800 rounded-lg relative max-w-max hover:scale-105 transition-all duration-300 group">
      <img
        src={src}
        alt={name}
        className="top-0 left-0 w-full h-full object-contain rounded"
      />
      {/* Overlay gradient and hover content */}
      <div className="absolute bottom-0 left-0 p-4 w-full h-full flex flex-col justify-end">
        {/* Gradient overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/60 z-0"></div>
        {/* Movie title with transition */}
        <h3 className="text-white text-xl font-montserrat transform translate-y-8 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 z-10 line-clamp-1">
          {children || name}
        </h3>
      </div>
    </div>
  );
};

export default CardMovie;
