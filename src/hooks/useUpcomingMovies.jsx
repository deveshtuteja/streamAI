import { useEffect } from "react";
import { addUpcomingMov } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";

const useUpcomingMovies = () => {
  const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);
  //Fetch data from tmdb and put into store
  const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addUpcomingMov(json.results));
  };
  useEffect(() => {
    !upcomingMovies && getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
