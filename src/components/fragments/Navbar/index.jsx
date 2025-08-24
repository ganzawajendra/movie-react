import React from "react";
import Button from "../Button";
import { Link, useLocation } from "react-router";
import { IoIosSearch } from "react-icons/io";
import { BsPersonSquare } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {
  const sessionId = localStorage.getItem("session_id");
  const locationURL = useLocation().pathname;

  const currentPath = (q) => {
    if (locationURL.startsWith(q)){
      return "font-lato-bold text-white"
    }
  }

  const url = [
    {
      name : "Beranda",
      path : "/beranda"
    },
    {
      name : "Film",
      path : "/film"
    },
    {
      name : "Acara TV",
      path : "/acara-tv"
    },
    {
      name : "Baru & Populer",
      path : "/baru-populer"
    }
  ]
  return (
    <>
      {sessionId ? (
        <nav className="fixed w-full backdrop-blur-[2px] top-0 text-white h-15 flex justify-between items-center z-100 bg-gradient-to-b from-black/70 transition-all duration-300
        lg:px-40
        md:px-20
        sm:px-10
        max-sm:px-5">
          <div className="flex items-center gap-10">
            <Link to="/">
              <img src="/img/logoFull.png" alt="Moflix" className="w-25" />
            </Link>
            <ul className="flex items-center gap-5">
              {url.map((item, index) => (
                <li key={index}>
                  <Link to={item.path} className={`${currentPath(item.path)} text-md text-gray-300 transition-all duration-300`}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center gap-5">
            <button className="cursor-pointer">
              <p className="text-2xl">
                <IoIosSearch />
              </p>
            </button>
            <button className="flex items-center gap-1 cursor-pointer">
              <p className="text-xl">
                <BsPersonSquare />
              </p>
              <p>
                <IoMdArrowDropdown />
              </p>
            </button>
          </div>
        </nav>
      ) : (
        <nav className="fixed w-full backdrop-blur-[2px] top-0 text-white h-15 px-40 flex justify-between items-center z-100">
          {locationURL === "/login" || locationURL === "/register" ? (
            <Link to="/">
              <img src="./img/logoFull.png" alt="Moflix" className="w-25" />
            </Link>
          ) : (
            <>
              <Link to="/">
                <img src="./img/logoMerah.png" alt="Moflix" className="h-6" />
              </Link>
              <Button
                navlink="/login"
                style="bg-manual-red text-manual-white button"
              >
                Login
              </Button>
            </>
          )}
        </nav>
      )}
    </>
  );
};

export default Navbar;
