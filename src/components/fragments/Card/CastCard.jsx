import React from "react";

const CastCard = ({ listCast }) => {
    const baseImg = import.meta.env.VITE_MOVIE_BASE_IMG_URL;
  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2">
        <h1 className="text-white max-w-max px-2 font-lato border-b-3 border-red-500">Top Cast</h1>
        </div>
        {listCast &&
          listCast.map((cast) => (
            <div key={cast.id} className="flex gap-2">
              <img src={`${baseImg}/${cast.profile_path}`} alt={`Profile ${cast.name}`} className="size-30 object-cover object-center rounded" />
              <div>
              <h2 className="text-white font-montserrat">{cast.name}</h2>
              <p className="text-gray-400">{cast.character}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CastCard;
