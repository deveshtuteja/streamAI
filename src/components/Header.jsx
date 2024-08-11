import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
      //Unsubscribe when the component unmounts
      return () => unsubscribe();
    });
  }, []);

  const handleGptSearchClick = () => {
    //Toggle GPT search
    dispatch(toggleGptSearchView());
  };

  return (
    <div className="absolute px-12 pt-8 pb-2 z-10 flex justify-between w-screen bg-gradient-to-b from-black bg-black">
      <img
        className="w-36 fill-current"
        src={LOGO_URL}
        alt="netflix-logo-img"
      />
      {user && (
        <div className="flex p-2">
          <button
            className="p-2 mx-4 my-2 rounded-lg bg-purple-800 text-white"
            onClick={handleGptSearchClick}
          >
            GPT Search
          </button>
          <img src={user.photoURL} alt="user-icon" className="w-12 h-12" />
          <button
            className="font-extrabold p-2 text-white"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
