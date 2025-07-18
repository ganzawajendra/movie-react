import React from "react";

const CardReason = ({ title, description, icon }) => {
  return (
    <div className="w-full p-5 rounded-lg border border-gray-700 text-manual-white relative overflow-hidden h-70 bg-linear-130 from-blue-900/60 to-red-900/40">
      <div className="flex flex-col justify-between h-full">
        <div>
          <h2 className="text-xl font-montserrat">{title}</h2>
          <p className="font-lato-light my-3 text-gray-400">{description}</p>
        </div>
        <div className=" flex items-center justify-end">
          <p className="text-4xl ">{icon}</p>
        </div>
      </div>
    </div>
  );
};

export default CardReason;
