import React, { useEffect, useState } from "react";
import Navbar from "../../components/fragments/Navbar";
import PosterSection from "./components/PosterSection";

const HomePage = () => {
  useEffect(() => {
    if (localStorage.getItem("session_id") === null) {
      window.location.href = "/login";
    }
  }, []);
  return (
    <>
      <Navbar />
      <div>
        <PosterSection />
      </div>
    </>
  );
};

export default HomePage;
