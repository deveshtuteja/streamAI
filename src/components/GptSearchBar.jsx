import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import { model } from "./gemini";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    //Make an API call to OPEN AI and get Movie Results

    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for the query: " +
      searchText.current.value +
      "only gives name of 5 movies , comma seperated like the example result given head. Example Result: Gadar, Sholey, Don, Golmaal, Koi Mil Gaya";

    const gptResults = await model.generateContent(gptQuery);
    const response = gptResults.response;
    console.log(response.text());
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
