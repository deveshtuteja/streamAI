import { Link, useParams } from "react-router-dom";
import usePlayMovie from "../hooks/usePlayMovie";

const PlayMovie = () => {
  const { movieId } = useParams();

  const key = usePlayMovie(movieId);

  // Check if key is available before rendering the iframe
  if (key === null) {
    return (
      <div className="font-bold text-white flex flex-col justify-center text-center bg-black text-3xl h-screen w-screen">
        <h2>Loading...</h2>
      </div>
    );
  }
  if (key === undefined) {
    return (
      <div className="font-bold flex justify-center flex-col text-center text-white bg-black text-3xl h-screen w-screen">
        <h2>Sorry : \ No Videos exist for this movie</h2>
        <h3 className="text-xl">Kindly choose some other movie</h3>
        <Link to="/" className="underline">
          Go to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="w-screen h-screen">
      <iframe
        className="w-screen h-screen aspect-video"
        src={`https://www.youtube.com/embed/${key}?autoplay=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default PlayMovie;
