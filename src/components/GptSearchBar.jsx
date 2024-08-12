const GptSearchBar = () => {
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 grid grid-cols-12 bg-transparent ">
        <input
          type="text"
          placeholder="What do you wanna watch today?"
          className="p-4 m-4 col-span-9"
        />
        <button className="py-2 px-4 bg-red-700 text-white rounded-lg col-span-3 m-4 hover:bg-red-800">
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
