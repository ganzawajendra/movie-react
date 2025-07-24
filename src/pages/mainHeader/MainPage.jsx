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

const HomePage = () => {
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
        <div className="absolute bottom-0 z-20 left-0 w-full h-3/4 bg-gradient-to-t from-black/100"></div>
        <div className="relative z-20 flex flex-col items-center">
          <h1 className="text-white text-5xl font-montserrat-thin ">
            Welcome to Moflix
          </h1>
          <p className="text-white text-2xl font-lato tracking-wide">
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
      <div className="pb-20 px-40 bg-black">
        <h2 className="text-white text-xl uppercase font-lato-bold mb-5">
          Top Rated Movies
        </h2>
        <div className="grid grid-cols-5 gap-5">
          {/* Movie cards go here */}
          {topMovies.slice(0, 10).map((movie) => (
            <CardMovie
              key={movie.id}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}.jpg`}
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
      <div className="pb-20 px-40 bg-black relative">
        <h2 className="text-white text-xl uppercase font-lato-bold mb-5">
          Alasan Lainnya untuk Bergabung
        </h2>
        <div className="grid grid-cols-4 gap-5">
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
      <Footer sticky/>
    </>
  );
};

export default HomePage;
