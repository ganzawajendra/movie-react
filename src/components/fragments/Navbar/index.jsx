import React from "react";
import Button from "../Button";
import { Link } from "react-router";
import { IoIosSearch } from "react-icons/io";
import { BsPersonSquare } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {
  const sessionId = localStorage.getItem("session_id");
  return (
    <>
      {sessionId ? (
        <nav className="fixed w-full backdrop-blur-[2px] top-0 text-white h-15 px-40 flex justify-between items-center z-100 bg-gradient-to-b from-black/70">
          <div className="flex items-center gap-10">
            <Link to="/">
              <img src="./img/logoFull.png" alt="Moflix" className="w-25" />
            </Link>
            <ul className="flex items-center gap-5">
              <li>
                <Link>Beranda</Link>
              </li>
              <li>
                <Link>Acara TV</Link>
              </li>
              <li>
                <Link>Film</Link>
              </li>
              <li>
                <Link>Baru & Populer</Link>
              </li>
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
          <Link to="/">
            <img src="./img/logoMerah.png" alt="Moflix" className="h-6" />
          </Link>
          <Button
            navlink="/login"
            style="bg-manual-red text-manual-white button"
          >
            Login
          </Button>
        </nav>
      )}
    </>
  );
};

export default Navbar;
