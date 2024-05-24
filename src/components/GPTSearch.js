import React from "react";
import { GPTSearchBar } from "./GPTSearchBar";
import { GPTMovieSuggestion } from "./GPTMovieSuggestion";
import { BACKGROUND } from "../utils/constants";

export const GPTSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img src={BACKGROUND} alt="logo" />
      </div>
      <GPTSearchBar />
      <GPTMovieSuggestion />
    </div>
  );
};
