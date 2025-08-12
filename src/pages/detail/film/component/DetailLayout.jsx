import React, { useState } from "react";
import { Link } from "react-router";
import OverviewDetails from "./ContentDetails/OverviewDetails";
import TrailerDetails from "./ContentDetails/TrailerDetails";

const DetailLayout = ({filmDetails}) => {
    const [content, setContent] = useState("overview");

    const contentDetail = [
        <OverviewDetails key="overview" filmDetails={filmDetails} />,
        <TrailerDetails key="trailer" filmDetails={filmDetails} />
    ]

    const renderContent = () => {
        switch (content) {
            case "overview":
                return <OverviewDetails filmDetails={filmDetails} />;
            case "trailer":
                return <TrailerDetails filmDetails={filmDetails} />;
            default:
                return null;
        }
    }

  return (
    <div>
      <div className="flex justify-around mt-10">
        <button className={`cursor-pointer py-1 px-3 border-b-3 ${content === "overview" ? "border-red-500" : "border-black"} w-full`} onClick={() => setContent("overview")}>
            <h1 className="text-white font-montserrat">Overview</h1>
        </button>
        <button className={`cursor-pointer py-1 px-3 border-b-3 ${content === "trailer" ? "border-red-500" : "border-black"} w-full`} onClick={() => setContent("trailer")}>
            <h1 className="text-white font-montserrat">Trailers</h1>
        </button>
        <button className="cursor-pointer py-1 px-3 border-b-3 w-full">
            <h1 className="text-white font-montserrat">More Like This</h1>
        </button>
        <button className="cursor-pointer py-1 px-3 border-b-3 w-full">
            <h1 className="text-white font-montserrat">Details</h1>
        </button>
      </div>
      <div className="py-5">
        {renderContent()}
      </div>
    </div>
  );
};

export default DetailLayout;
