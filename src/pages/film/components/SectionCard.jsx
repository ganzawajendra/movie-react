import React, { useRef, useState } from "react";
import { FaStar } from "react-icons/fa";
import CategorySection from "../../../components/fragments/CategorySection";

const SectionCard = ({ content, children, category }) => {
  const baseImg = import.meta.env.VITE_MOVIE_BASE_IMG_URL;
  const [overviewExpanded, setOverviewExpanded] = useState(false);
  const [height, setHeight] = useState("4.5rem");
  const contentRef = useRef(null);

  const handleToggle = () => {
    setOverviewExpanded(!overviewExpanded);
    setHeight(
      overviewExpanded ? "4.5rem" : `${contentRef.current.scrollHeight}px`
    );
  };

  return (
    <div>
      <CategorySection>{category}</CategorySection>
      <div className="grid grid-cols-6 gap-5">
        <div
          key={content[0].id}
          className="col-span-3 row-span-2 w-full relative"
        >
          <img
            src={`${baseImg}/${content[0].backdrop_path}`}
            alt={content[0].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bg-black/30 w-full h-full top-0 left-0"></div>
          <div className="card-transition-gradient"></div>
          <div className="absolute bottom-10 left-10">
            <img
              src={`${baseImg}/${content[0].poster_path}`}
              alt={content[0].title}
              className="w-30 object-cover rounded"
            />
          </div>
          <div className="absolute bottom-10 left-50 right-10">
            <div className="flex flex-col">
              <h1 className="text-2xl font-montserrat-bold text-white">
                {content[0].title}
              </h1>
              <div className="flex items-center gap-2">
                <FaStar style={{ color: "yellow" }} />
                <p className="text-white font-lato-light">
                  {content[0].vote_average} (TMDB)
                </p>
              </div>
              <div>
                <div
                  className="overflow-hidden transition-all duration-500 ease-in-out"
                  style={{ height }}
                >
                  <p ref={contentRef} className="text-white font-lato-light">
                    {content[0].overview}
                  </p>
                </div>
                <div className="flex justify-end">
                  <button
                    className="text-white mt-2 cursor-pointer transition-all duration-300"
                    onClick={handleToggle}
                  >
                    {overviewExpanded
                      ? "Lihat Lebih Sedikit"
                      : "Lihat Selengkapnya"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default SectionCard;
