import React from "react";

const CategorySection = ({children}) => {
  return (
    <h2 className="text-white uppercase font-lato-bold mb-5 transition-all duration-300
    lg:text-xl
    md:text-lg
    sm:text-md">
      {children}
    </h2>
  );
};

export default CategorySection;
