import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import { model } from "../utils/gemini";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";
const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    //Make an API call to OPEN AI and get Movie Results

    const gptQuery =
      "Please suggest 5 movies related to the search term: " +
      searchText.current.value +
      ". Return only the movie names, separated by commas. Example: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    const gptResults = await model.generateContent(gptQuery);
    const response = await gptResults.response;
    const responseText = await response.text();
    console.log(responseText);
    // Andaz Apna Apna, Chupke Chupke, Hera Pheri, Jaane Bhi Do Yaaro,  Golmaal (1979)
    const gptMovies = responseText.split(",");
    console.log(gptMovies);
    // ["Andaz Apna Apna", "Chupke Chupke", "Hera Pheri", "Jaane Bhi Do Yaaro",  "Golmaal (1979)"] array

    //Search TMDB API for each movie
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    // [Promise, Promise, Promise, Promise, Promise]
    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 grid grid-cols-12 bg-transparent"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="p-4 m-4 col-span-9 rounded-md"
        />
        <button
          className="py-2 px-4 bg-red-700 text-white rounded-lg col-span-3 m-4 hover:bg-red-800"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
