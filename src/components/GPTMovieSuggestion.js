import React from "react";
import { useSelector } from "react-redux";
import { MovieList } from "./MovieList";

export const GPTMovieSuggestion = () => {
  const { gptMovies, searchTerm } = useSelector((store) => store.gpt);
  return (
    gptMovies && (
      <div className="p-4 m-4 bg-black text-white opacity-70">
        <MovieList
          title={`Search Results for '${searchTerm}' :`}
          movies={gptMovies}
        />
      </div>
    )
  );
};
