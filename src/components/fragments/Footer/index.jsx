import React from "react";

const Footer = ({sticky = false}) => {
  return (
    <div className={` ${sticky ? 'w-full z-1 sticky bottom-0' : ''}`}>
      <footer className="bg-manual-dark text-white text-center py-10 transition-all duration-300
      lg:px-40
      md:px-20
      sm:px-10
      max-sm:px-5">
        <div className="grid grid-cols-3 gap-10
        max-sm:grid-cols-1">
          <div className="flex flex-col items-center justify-center">
            <img src="/img/logoMerah.png" alt="Logo Moflix" className="transition-all duration-300 lg:w-30 md:w-25 sm:w-20 max-sm:w-15" />
            <p className="mt-2 font-montserrat-light tracking-wide transition-all duration-300
            lg:text-md
            md:text-sm
            sm:text-xs
            max-sm:text-xs">
              Jl. Lorem, ipsum., Lorem
            </p>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h3 className="font-lato-bold mb-2 transition-all duration-300
            lg:text-lg
            md:text-md
            sm:text-sm
            max-sm:text-sm">Tentang Kami</h3>
            <p className="text-start font-montserrat-light transition-all duration-300
            lg:text-sm
            md:text-sm
            sm:text-xs
            max-sm:text-xs">
              Moflix adalah platform streaming film dan acara TV terkemuka.
            </p>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h3 className="font-lato-bold mb-2 transition-all duration-300
            lg:text-lg
            md:text-md
            sm:text-sm
            max-sm:text-sm">Kontak Kami</h3>
            <p className="font-montserrat transition-all duration-300
            lg:text-sm
            md:text-sm
            sm:text-xs
            max-sm:text-xs">
              Email:{" "}
              <span className="font-montserrat-light transition-all duration-300
              lg:text-sm
              md:text-sm
              sm:text-xs
              max-sm:text-xs">lorem@gmail.com</span>
            </p>
            <p className="text-sm font-montserrat transition-all duration-300
            lg:text-sm
            md:text-sm
            sm:text-xs
            max-sm:text-xs">
              Telepon:{" "}
              <span className="font-montserrat-light transition-all duration-300
              lg:text-sm
              md:text-sm
              sm:text-xs
              max-sm:text-xs">+xxx xxx xxx</span>
            </p>
            <p className="text-sm font-montserrat transition-all duration-300
            lg:text-sm
            md:text-sm
            sm:text-xs
            max-sm:text-xs">
              Instagram:{" "}
              <span className="font-montserrat-light transition-all duration-300
              lg:text-sm
              md:text-sm
              sm:text-xs
              max-sm:text-xs">@lorem</span>
            </p>
          </div>
        </div>
      </footer>
      <div className="bg-manual-red text-center 
      lg:py-3
      md:py-2
      sm:py-2
      max-sm:py-1">
        <p className="text-sm text-white font-lato-light transition-all duration-300
        lg:text-sm
        md:text-sm
        sm:text-xs
        max-sm:text-xs">© Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  );
};

export default Footer;
