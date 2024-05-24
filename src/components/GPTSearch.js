import React from "react";
import { GPTSearchBar } from "./GPTSearchBar";
import { GPTMovieSuggestion } from "./GPTMovieSuggestion";
import { BACKGROUND } from "../utils/constants";

export const GPTSearch = () => {
  return (
    <>
      <div className="absolute -z-10">
        <img
          className="w-screen h-screen object-cover"
          src={BACKGROUND}
          alt="logo"
        />
      </div>
      <div className="">
        <GPTSearchBar />
        <GPTMovieSuggestion />
      </div>
    </>
  );
};
