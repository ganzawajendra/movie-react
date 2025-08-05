import React from "react";

const CategorySection = ({children}) => {
  return (
    <h2 className="text-white text-xl uppercase font-lato-bold mb-5">
      {children}
    </h2>
  );
};

export default CategorySection;
