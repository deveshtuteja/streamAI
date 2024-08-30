import { API_OPTIONS } from "../utils/constants";
import { useEffect, useState } from "react";

const usePlayMovie = (movieId) => {
  const [key, setKey] = useState(null);
  //fetch trailer video
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length
      ? filterData[0]
      : json?.results.find((video) => video.type === "Clip");

    setKey(trailer?.key);
  };
  useEffect(() => {
    getMovieVideos();
  }, []);

  return key;
};

export default usePlayMovie;
