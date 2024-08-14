import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { AVATAR_URL, BG_URL } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const [errMsg, setErrMsg] = useState("");
  const dispatch = useDispatch();

  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleBtnClick = () => {
    let msg = "";
    if (!isSignInForm) {
      msg = checkValidData(
        email.current.value,
        password.current.value,
        name.current?.value || ""
      );
    } else {
      msg = checkValidData(email.current.value, password.current.value);
    }
    setErrMsg(msg);

    if (msg) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: AVATAR_URL,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              setErrMsg(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMsg(errorCode + " - " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMsg(errorCode + " - " + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={BG_URL}
          alt="netflix-bg-img"
          className="h-screen object-cover md:object-fill md:w-screen md:h-screen"
        />
      </div>
      <form
        className="absolute p-12 w-full md:w-3/12 bg-[rgba(0,0,0,0.85)] mx-auto right-0 left-0 my-44 text-white rounded-lg"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="my-4 p-2 w-full bg-[rgba(0,0,0,0.85)] border border-solid border-transparent-50 rounded-sm"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or mobile number"
          className="my-4 p-2 w-full bg-[rgba(0,0,0,0.85)] border border-solid border-transparent-50 rounded-sm"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="my-4 p-2 w-full bg-[rgba(0,0,0,0.85)] border border-solid border-transparent-50 rounded-sm"
        />
        <p className="text-red-500 text-lg">{errMsg}</p>
        <button
          className="my-4 p-2 bg-red-700 w-full rounded-sm font-semibold"
          onClick={handleBtnClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="p-2 my-2 hover:cursor-pointer" onClick={toggleSignIn}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already a user? Sign In Now"}
        </p>
      </form>
    </div>
  );
};
export default Login;
