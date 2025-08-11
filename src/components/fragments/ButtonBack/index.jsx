import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router';

const ButtonBack = ({to}) => {
  return (
    <div className='flex items-center'>
    <Link to={to} className='text-white font-lato flex items-center max-w-max '>
      <IoIosArrowBack className=' size-5 mr-1'/>
      Kembali
    </Link>
    </div>
  )
}

export default ButtonBack