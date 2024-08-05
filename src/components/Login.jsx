import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const [errMsg, setErrMsg] = useState("");

  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleBtnClick = () => {
    //validate the form data
    // checkValidData(email, password);
    const msg = checkValidData(
      email.current.value,
      password.current.value,
      name.current.value
    );
    setErrMsg(msg);
    // console.log(msg);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/826348c2-cdcb-42a0-bc11-a788478ba5a2/6d20b198-e7ab-4e9f-a1aa-666faa0298f9/IN-en-20240729-POP_SIGNUP_TWO_WEEKS-perspective_WEB_a67d8c9e-8121-4a74-98e4-8005eb2df227_large.jpg"
          alt="netflix-bg-img"
        />
      </div>
      <form
        className="absolute p-12 w-3/12 bg-[rgba(0,0,0,0.85)] mx-auto right-0 left-0 my-44 text-white rounded-lg"
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
            ? "New to Netlix? Sign Up Now"
            : "Already a user? Sign In Now"}
        </p>
      </form>
    </div>
  );
};
export default Login;
