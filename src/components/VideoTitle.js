import React from "react";

export const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[15%] px-24 absolute text-white">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="bg-white text-black p-4 px-12 text-xl hover:bg-opacity-80 rounded-lg">
          ▶ Play
        </button>
        <button className="mx-2 bg-white text-black p-4 px-12 text-xl hover:bg-opacity-80 rounded-lg">
          More info
        </button>
      </div>
    </div>
  );
};
