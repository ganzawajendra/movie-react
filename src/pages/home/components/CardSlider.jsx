import React from "react";
import CategorySection from "../../../components/fragments/CategorySection";
import { Link } from "react-router";
import { IoIosArrowForward } from "react-icons/io";

const CardSlider = ({category, linkTo, children}) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <CategorySection>{category}</CategorySection>
        <Link className="flex items-end gap-2 text-white" to={`/${linkTo}`}>
          <p className="">Lihat Semua</p>
          <p className="text-xl">
            <IoIosArrowForward />
          </p>
        </Link>
      </div>
      <div className="overflow-x-auto scrollbar-hide">
        <div className="grid grid-flow-col auto-cols-max gap-5 ">
          {children}
        </div>
      </div>
    </div>
  );
};

export default CardSlider;
