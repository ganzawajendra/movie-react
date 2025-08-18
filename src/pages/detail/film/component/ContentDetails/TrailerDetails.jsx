import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import { getVideosMovie } from '../../../../../api/getMovies'


const TrailerDetails = ({id}) => {
  const [videoYoutube, setVideoYoutube] = useState()
  const filmId = id

  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  
  useEffect(()=> {
    getVideosMovie(filmId).then((data) => {
      setVideoYoutube(data.filter(video => video.type === 'Trailer'));
      setIsLoading(false);
    }).catch((error) => {
      console.error(error);
      setIsError(true);
    });
  },[])

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

  console.table(videoYoutube)

  return (
    <div className='w-full flex flex-col gap-4'>
      {
        videoYoutube.map((video) => (
          <YouTube key={video.id} videoId={video.key} />
        ))
      }
    </div>
  )
}

export default TrailerDetails