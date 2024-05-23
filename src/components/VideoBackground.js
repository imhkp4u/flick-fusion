import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

export const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailer(movieId);
  return (
    <div>
      <iframe
        className="w-screen aspect-video border-none"
        src={
          "https://www.youtube.com/embed/XeDbyVODQ5M?si" +
          trailerVideo?.key +
          "&autoplay=1&mute=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};
