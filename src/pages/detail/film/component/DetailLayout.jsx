import React, { useState } from "react";
import { Link } from "react-router";
import OverviewDetails from "./ContentDetails/OverviewDetails";
import TrailerDetails from "./ContentDetails/TrailerDetails";
import CastDetails from "./ContentDetails/CastDetails";
import MoreLikeThisDetails from "./ContentDetails/MoreLikeThisDetails";

const DetailLayout = ({filmDetails, id}) => {
    const [content, setContent] = useState("overview");
    const renderContent = () => {
        switch (content) {
            case "overview":
                return <OverviewDetails filmDetails={filmDetails} id={id}/>;
            case "trailer":
                return <TrailerDetails id={id} />;
            case "cast":
                return <CastDetails filmDetails={filmDetails} id={id} />;
            case "moreLikeThis":
                return <MoreLikeThisDetails id={id} />;
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
        <button className={`cursor-pointer py-1 px-3 border-b-3 ${content === "moreLikeThis" ? "border-red-500" : "border-black"} w-full`} onClick={() => setContent("moreLikeThis")}>
            <h1 className="text-white font-montserrat">More Like This</h1>
        </button>
        <button className={`cursor-pointer py-1 px-3 border-b-3 ${content === "cast" ? "border-red-500" : "border-black"} w-full`} onClick={() => setContent("cast")}>
            <h1 className="text-white font-montserrat">Cast</h1>
        </button>
      </div>
      <div className="py-5 min-h-max max-h-[35rem] overflow-y-auto scrollbar-hide no-scrollbar">
        {renderContent()}
      </div>
    </div>
  );
};

export default DetailLayout;
