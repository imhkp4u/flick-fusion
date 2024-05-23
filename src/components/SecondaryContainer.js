import React from "react";
import { MovieList } from "./MovieList";
import { useSelector } from "react-redux";

export const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );
  const popularMovies = useSelector((store) => store.movies.popularMovies);
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
  return (
    nowPlayingMovies &&
    popularMovies && (
      <div className="bg-black">
        <div className="-mt-52 pl-12 relative z-20">
          <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
          <MovieList title={"Popular"} movies={popularMovies} />
          <MovieList title={"Top Rated"} movies={topRatedMovies} />
        </div>
      </div>
    )
  );
};
