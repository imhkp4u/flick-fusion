import React from "react";
import { IMAGE_CDN_URL } from "../utils/constants";

export const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-36 md:w-48 pr-4">
      {posterPath ? (
        <img alt="poster" src={`${IMAGE_CDN_URL}${posterPath}`} />
      ) : (
        <div className="w-full h-72 bg-gray-300 flex items-center justify-center text-center p-4 text-white placeholder-poster">
          <span>No poster available for this movie</span>
        </div>
      )}
    </div>
  );
};
