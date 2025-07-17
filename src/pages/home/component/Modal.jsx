import React, { useEffect, useState } from "react";
import { getMovieDetails } from "../../../api/getMovies";

const Modal = ({ onClose, open, id }) => {
  const [movieDetails, setMovieDetails] = useState(null);
  const baseUrl = import.meta.env.VITE_MOVIE_BASE_IMG_URL;

  useEffect(() => {
    if (!id) return;
    getMovieDetails(id).then((data) => {
      setMovieDetails(data);
    });
  }, [id]);

  if (!open) return null;

  return (
    <div
      onClick={onClose}
      className="z-50 fixed inset-0 bg-black/30 flex items-center justify-center transition-all duration-300 ease-in-out"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-manual-dark rounded-lg w-1/2 overflow-hidden border border-gray-700"
      >
        {!movieDetails ? (
          <p>Loading...</p>
        ) : (
          <>
            <div className="relative">
              <img
                src={`${baseUrl}${movieDetails.backdrop_path}`}
                alt={movieDetails.title}
                className="w-full h-90 object-cover"
              />
              <div className="card-detail-gradient"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/70"></div>
              <img src={`${baseUrl}${movieDetails.poster_path}`} alt="" className="absolute top-10 left-10 w-40 rounded"/>
            </div>
            <div className="px-10 pb-10">
              <h2 className="text-white font-montserrat text-2xl">{movieDetails.title}</h2>
              <ul className="flex items-center gap-3 my-3">
                {movieDetails.genres && (movieDetails.genres.slice(0, 2).map((genre) => (
                  <li key={genre.id} className="text-white/60 font-lato text-sm py-1 px-3 bg-gray-700 rounded">{genre.name}</li>
                )))}
                <li className="text-white/60 font-lato text-sm py-1 px-3 bg-gray-700 rounded">{movieDetails.release_date.split("-")[0]}</li>
              </ul>
              <p className="text-white font-lato text-sm">{movieDetails.overview}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
