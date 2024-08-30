import { useNavigate } from "react-router-dom";

const VideoTitle = ({ title, overview, movieId }) => {
  const navigate = useNavigate();
  const handlePlayClick = () => {
    navigate("/movie/" + movieId);
  };
  return (
    <div className="w-screen aspect-video pt-[30%] md:pt-[17%] px-4 md:px-24 absolute text-white bg-gradient-to-l from-black">
      <h1 className="text-lg md:text-5xl font-bold">{title}</h1>
      <p className="hidden md:inline-block text-lg py-6 w-1/4">{overview}</p>
      <div className="my-1 md:my-0">
        <button
          className="bg-white text-black p-2 md:p-4 px-4 md:px-12 text-lg md:text-xl rounded-lg hover:bg-opacity-80"
          onClick={handlePlayClick}
        >
          ▶️Play
        </button>
        <button className="bg-white text-white p-2 md:p-4 px-4 md:px-12 text-lg md:text-xl bg-opacity-30 rounded-lg mx-2 hover:bg-opacity-10">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hidden sm:inline ltr-4z3qvp e1svuwfo1"
            data-name="CircleI"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z"
              fill="currentColor"
            ></path>
          </svg>{" "}
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
