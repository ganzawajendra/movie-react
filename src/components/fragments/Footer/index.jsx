import React from "react";

const Footer = ({sticky = false}) => {
  return (
    <div className={` ${sticky ? 'w-full z-1 sticky bottom-0' : ''}`}>
      <footer className="bg-manual-dark text-white text-center py-10 transition-all duration-300
      lg:px-40
      md:px-20">
        <div className="grid grid-cols-3 gap-10">
          <div className="flex flex-col items-center justify-center">
            <img src="/img/logoMerah.png" alt="Logo Moflix" className="transition-all duration-300 lg:w-30 md:w-25 " />
            <p className="mt-2 font-montserrat-light tracking-wide transition-all duration-300
            lg:text-md
            md:text-sm">
              Jl. Lorem, ipsum., Lorem
            </p>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h3 className="font-lato-bold mb-2 transition-all duration-300
            lg:text-lg
            md:text-md">Tentang Kami</h3>
            <p className="text-start font-montserrat-light transition-all duration-300
            lg:text-sm
            md:text-sm">
              Moflix adalah platform streaming film dan acara TV terkemuka.
            </p>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h3 className="font-lato-bold mb-2 transition-all duration-300
            lg:text-lg
            md:text-md">Kontak Kami</h3>
            <p className="font-montserrat transition-all duration-300
            lg:text-sm
            md:text-sm">
              Email:{" "}
              <span className="font-montserrat-light transition-all duration-300
              lg:text-sm
              md:text-sm">lorem@gmail.com</span>
            </p>
            <p className="text-sm font-montserrat transition-all duration-300
            lg:text-sm
            md:text-sm">
              Telepon:{" "}
              <span className="font-montserrat-light transition-all duration-300
              lg:text-sm
              md:text-sm">+xxx xxx xxx</span>
            </p>
            <p className="text-sm font-montserrat transition-all duration-300
            lg:text-sm
            md:text-sm">
              Instagram:{" "}
              <span className="font-montserrat-light transition-all duration-300
              lg:text-sm
              md:text-sm">@lorem</span>
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
