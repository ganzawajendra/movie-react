import React from "react";

const Footer = ({sticky = false}) => {
  return (
    <div className={` ${sticky ? 'w-full z-1 sticky bottom-0' : ''}`}>
      <footer className="bg-manual-dark text-white text-center px-40 py-10">
        <div className="grid grid-cols-3 gap-10">
          <div className="flex flex-col items-center justify-center">
            <img src="/img/logoMerah.png" alt="Logo Moflix" className="w-30" />
            <p className="mt-2 font-montserrat-light tracking-wide">
              Jl. Lorem, ipsum., Lorem
            </p>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h3 className="text-lg font-lato-bold mb-2">Tentang Kami</h3>
            <p className="text-sm text-start font-montserrat-light">
              Moflix adalah platform streaming film dan acara TV terkemuka.
            </p>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h3 className="text-lg font-lato-bold mb-2">Kontak Kami</h3>
            <p className="text-sm font-montserrat">
              Email:{" "}
              <span className="font-montserrat-light">lorem@gmail.com</span>
            </p>
            <p className="text-sm font-montserrat">
              Telepon:{" "}
              <span className="font-montserrat-light">+xxx xxx xxx</span>
            </p>
            <p className="text-sm font-montserrat">
              Instagram:{" "}
              <span className="font-montserrat-light">@lorem</span>
            </p>
          </div>
        </div>
      </footer>
      <div className="bg-manual-red text-center py-3">
        <p className="text-sm text-white font-lato-light">© Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  );
};

export default Footer;
