import React from 'react'
import { useParams } from 'react-router'
import Navbar from '../../../components/fragments/Navbar'
import Footer from '../../../components/fragments/Footer'

const DetailFilm = () => {
    const { filmId } = useParams()

    console.log(filmId)
  return (
    <>
    <div className='relative z-10'>
    <Navbar />
        <div className='px-40 min-h-screen bg-manual-dark py-20 flex flex-col gap-20'>
        <h1 className='text-white'> HEllo</h1>
        </div>
    </div>
    <Footer sticky />
    </>
  )
}

export default DetailFilm