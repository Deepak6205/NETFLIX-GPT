import React, { useState, useRef } from "react";
import { Header } from "./Header";
import { checkValidData } from "../utils/validate";
export const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage,setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const handleButtonClick = ()=>{
    
    // by doing this we will get the reference of whole email,password input field karke dekh lo

        // console.log(email) 
        // console.log(password) 
    // by doing this we will get only the required thing
    console.log(email.current.value) 
    console.log(password.current.value)

     const message = checkValidData(email.current.value,password.current.value);
     setErrorMessage(message);
  }

  const togleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/85ff76db-39e5-423a-afbc-97d3e74db71b/null/IN-en-20240909-TRIFECTA-perspective_b22117e0-4610-4d57-a695-20f77d241a4a_large.jpg"
          alt="bg-img"
        />
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className="absolute bg-black p-12 my-36 mx-auto right-0 left-0 w-3/12 text-white bg-opacity-85 rounded-lg">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && <input
          type="text"
          placeholder="Full Name"
          className="my-2 w-full
       py-4 bg-zinc-800 rounded-lg p-4"
        />}
        <input
        ref={email}
          type="email"
          placeholder="Email Address"
          className="my-2 w-full
       py-4 bg-zinc-800 rounded-lg p-4"
        />
        
        <input
        ref={password}
          type="password"
          placeholder="Password"
          className="rounded-lg my-2 w-full py-4 p-4 bg-zinc-800"
        />
        <p className="text-red-600">{errorMessage}</p>
        <button
          type="submit"
          className=" my-6 w-full bg-red-700 py-4 rounded-lg" onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={togleSignInForm}>
          {isSignInForm
            ? "New to Netflix ? Sign Up"
            : "Already registered ? click to Sign In now"}
        </p>
      </form>
    </div>
  );
};
