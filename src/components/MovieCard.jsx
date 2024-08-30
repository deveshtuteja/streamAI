import { useNavigate } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath, id }) => {
  const navigate = useNavigate();
  const handleMovieClick = () => {
    navigate("/movie/" + id);
  };
  if (!posterPath) return null;
  return (
    <div className="w-36 md:w-48 pr-4 cursor-pointer">
      <img
        src={IMG_CDN_URL + posterPath}
        alt="movie-poster"
        onClick={() => handleMovieClick()}
      />
    </div>
  );
};

export default MovieCard;
