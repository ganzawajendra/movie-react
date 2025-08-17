import React, { useEffect, useState } from 'react'
import { getCreditsMovie } from '../../../../../api/getMovies';
import CastCard from '../../../../../components/fragments/Card/CastCard';

const CastDetails = ({filmDetails, id}) => {
  const [cast, setCast] = useState();

  useEffect(() => {
    getCreditsMovie(id).then((data) => {
      setCast(data.cast.filter(cast => cast.profile_path !== null && cast.profile_path !== ''));
    }).catch((error) => {
      console.error("Error fetching cast details:", error);
    });
  }, []);
  console.log(filmDetails)

  return (
    <div>
      <div className="mb-4">
          <h1 className="text-white max-w-max px-2 font-lato border-b-3 border-red-500">
            Top Cast
          </h1>
        </div>
      <CastCard listCast={cast} />
    </div>
  )
}

export default CastDetails