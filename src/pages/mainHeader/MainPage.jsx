import React, { useEffect, useState } from "react";
import Navbar from "../../components/fragments/Navbar";
import Button from "../../components/fragments/Button";
import CardMovie from "./component/CardMovie";
import { getTopMovies } from "../../api/getMovies";
import Modal from "./component/Modal";
import { BiCameraMovie } from "react-icons/bi";
import { PiFilmSlate } from "react-icons/pi";
import { BsPersonArmsUp } from "react-icons/bs";
import { PiBinocularsFill } from "react-icons/pi";
import CardReason from "./component/CardReason";
import Footer from "../../components/fragments/Footer";
import CategorySection from "../../components/fragments/CategorySection";

const HomePage = () => {
  const baseImg = import.meta.env.VITE_MOVIE_BASE_IMG_URL;
  const baseOriginalImg = import.meta.env.VITE_MOVIE_BASE_IMG_URL_ORIGINAL;
  const [topMovies, setTopMovies] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const reason = [
    {
      title: "Akses ke Film Terbaru",
      description:
        "Nikmati akses eksklusif ke film-film terbaru yang sedang tayang di bioskop.",
      icon: <BiCameraMovie />,
    },
    {
      title: "Koleksi Film yang Luas",
      description:
        "Jelajahi koleksi film yang luas, mulai dari klasik hingga blockbuster terbaru.",
      icon: <PiFilmSlate />,
    },
    {
      title: "Rekomendasi Personalisasi",
      description: "Dapatkan rekomendasi film yang sesuai dengan selera Anda.",
      icon: <BsPersonArmsUp />,
    },
    {
      title: "Tonton Kapan Saja, Di Mana Saja",
      description:
        "Nikmati film favorit Anda kapan saja dan di mana saja dengan akses online.",
      icon: <PiBinocularsFill />,
    },
  ];

  const handleOpenModal = (id) => {
    setSelectedId(id);
    setModalOpen(true);
  };

  useEffect(() => {
    getTopMovies().then((data) => {
      setTopMovies(data);
    });
  }, []);

  return (
    <>
      <div className="z-10 relative">
        <Navbar />
        <div className="bg-image h-screen flex items-center justify-center relative">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-black/70"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>
          <div className="card-transition-gradient"></div>
          <div className="relative z-20 flex flex-col items-center">
            <h1 className="text-white text-5xl font-montserrat-thin transition-all duration-300
            lg:text-5xl
            md:text-4xl
            sm:text-3xl">
              Welcome to Moflix
            </h1>
            <p className="text-white text-2xl font-lato tracking-wide transition-all duration-300
            lg:text-2xl
            md:text-lg
            sm:text-sm">
              Cari Info Film, Acara TV, dan Film Terbaru
            </p>
            <Button
              navlink="/register"
              style="bg-manual-red text-manual-white mt-7 button"
            >
              Daftar Sekarang
            </Button>
          </div>
        </div>
        <div className="pb-20 bg-manual-dark transition-all duration-300
        lg:px-40
        md:px-20
        sm:px-10">
          <CategorySection>Top Rated Movies</CategorySection>
          <div className="grid grid-cols-5 gap-5 transition-all duration-300
          lg:grid-cols-5
          md:grid-cols-4
          sm:grid-cols-3">
            {/* Movie cards go here */}
            {topMovies.slice(0, 10).map((movie) => (
              <CardMovie
                key={movie.id}
                src={`${baseImg}${movie.poster_path}`}
                name={movie.title}
                id={movie.id}
                onClick={handleOpenModal} // 👉 kirim handler dari sini
              >
                {movie.title}
              </CardMovie>
            ))}

            <Modal
              id={selectedId}
              open={modalOpen}
              onClose={() => setModalOpen(false)}
            />
          </div>
        </div>
        <div className="pb-20 bg-manual-dark relative transition-all duration-300
        lg:px-40
        md:px-20
        sm:px-10">
          <CategorySection>
            Alasan Untuk Bergabung
          </CategorySection>
          <div className="grid gap-5 transition-all duration-300
          lg:grid-cols-4
          md:grid-cols-2
          sm:grid-cols-2">
            {reason.map((item, index) => (
              <CardReason
                key={index}
                title={item.title}
                description={item.description}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer sticky />
    </>
  );
};

export default HomePage;
