import React, { useState } from "react";
import Header from "./Header";

const Login = () => {

const [isSignInForm, setIsSignInForm] = useState(true);

const toggleSignInForm = () =>{
  setIsSignInForm(!isSignInForm);
};

  return (
    <div>
      <Header />

      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/1fd8c6d0-20db-4667-860e-dd1ad7353ac0/10f8d166-7c8c-499a-b16f-57c3740cdeae/IN-en-20240624-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="bgImage"
        ></img>
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">

        <h1 className="font-bold text-3xl py-4">{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>

        {!isSignInForm && (
          <input type="text" placeholder="Full Name" className="p-2 my-4 w-full bg-gray-800 rounded-sm bg-opacity-60 border-2 border-gray-600 "/>
        )}

        <input type="text" placeholder="Email Address" className="p-2 my-4 w-full bg-gray-800 rounded-sm bg-opacity-60 border-2 border-gray-600 "/>

        <input type="password" placeholder="Password" className="p-2 my-4 w-full bg-gray-800 rounded-sm bg-opacity-60 border-2 border-gray-600"/>

        {!isSignInForm && (
          <input type="password" placeholder="Confirm Password" className="p-2 my-4 w-full bg-gray-800 rounded-sm bg-opacity-60 border-2 border-gray-600"/>
        )}

        <button className="p-2 my-8 bg-red-700 w-full rounded-md cursor-pointer">{isSignInForm ? 'Sign In' : 'Sign Up'}</button>

        <p className="py-3 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? 'New to Netflix? Sign Up' : 'Already Registered? Sign In'}</p>
      </form>
    </div>
  );
};
export default Login;
