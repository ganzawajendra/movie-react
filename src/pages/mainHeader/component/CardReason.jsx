import React from "react";

const CardReason = ({ title, description, icon }) => {
  return (
    <div className="w-full p-5 rounded-lg border border-gray-700 text-manual-white relative overflow-hidden h-70 bg-linear-130 from-blue-900/60 to-red-900/40
    max-sm:h-40">
      <div className="flex flex-col justify-between h-full">
        <div>
          <h2 className="text-xl font-montserrat transition-all duration-300
          lg:text-xl
          md:text-lg
          sm:text-md
          max-sm:text-sm">{title}</h2>
          <p className="font-lato-light my-3 text-gray-400 transition-all duration-300
          lg:text-md
          md:text-sm
          sm:text-sm
          max-sm:text-xs">{description}</p>
        </div>
        <div className=" flex items-center justify-end">
          <p className=" transition-all duration-300
          lg:text-4xl
          md:text-2xl
          sm:text-2xl
          max-sm:text-xl">{icon}</p>
        </div>
      </div>
    </div>
  );
};

export default CardReason;
