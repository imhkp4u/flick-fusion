import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addGPTMovies } from "../utils/gptSlice";
// import openai from "../utils/openai";

export const GPTSearchBar = () => {
  const key = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchHandler = async (movieName) => {
    // API trial period is over so below code will not work
    // const gptQuery =
    //   "Act as a movie recommendatio system and suggest some movies for the query: " +
    //   searchText.current.value +
    //   ". only give me 10 names of movies comma separated like the example result given ahead. Example Result: Gadar, Sholay, 3 Idiots, Krish";
    // const gptResults = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: searchText.current.value }],
    //   model: "gpt-3.5-turbo",
    // });
    // console.log(gptResults.choices);
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movieName}`,
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addGPTMovies({ movies: json.results, searchTerm: movieName }));
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-1/2 bg-blue-300 grid grid-cols-12 rounded-xl"
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[key].searchPlaceholder}
        />
        <button
          onClick={() => searchHandler(searchText.current.value)}
          className=" col-span-3 py-2 px-4 m-4 bg-red-700 text-white rouded-lg"
        >
          {lang[key].search}
        </button>
      </form>
    </div>
  );
};
