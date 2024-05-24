import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

export const GPTSearchBar = () => {
  const key = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className=" w-1/2 bg-blue-300 grid grid-cols-12 rounded-xl">
        <input
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[key].searchPlaceholder}
        />
        <button className=" col-span-3 py-2 px-4 m-4 bg-red-700 text-white rouded-lg">
          {lang[key].search}
        </button>
      </form>
    </div>
  );
};
