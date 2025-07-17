import React from "react";
import Button from "../Button";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="fixed w-full backdrop-blur-[2px] top-0 text-white h-15 px-40 flex justify-between items-center z-100">
      <Link to="/">
        <img src="./img/logoMerah.png" alt="Moflix" className="h-6" />
      </Link>
      <Button navlink="/login" style="bg-manual-red text-manual-white">
        Login
      </Button>
    </nav>
  );
};

export default Navbar;
