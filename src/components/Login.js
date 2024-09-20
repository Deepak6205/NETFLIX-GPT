import React, { useState, useRef } from "react";
import { Header } from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_IMG, USER_AVATAR } from "../utils/Constants";
export const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // by doing this we will get the reference of whole email,password input field karke dekh lo

    // console.log(email)
    // console.log(password)
    // by doing this we will get only the required thing
    console.log(email.current.value);
    console.log(password.current.value);

    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    //means koi string value present hai i.e email ya password valid nahi hai to yahi pe return kar do aage proceed mat ho
    if (message) return;

    // else sab sahi hai to proceed karo sign in / sign up ke liye

    if (!isSignInForm) {
      // that means sign up karo

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          // once my user is signedUp then update the user profile

          updateProfile(user, {
            displayName: name.current.value,
            photoURL:USER_AVATAR,
          })
            .then(() => {
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
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "_" + errorMessage);
        });
    } else {
      //sign in kro

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
          setErrorMessage(errorCode + "_" + errorMessage);
        });
    }
  };

  const togleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={BG_IMG}
          alt="bg-img"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg-black p-12 my-36 mx-auto right-0 left-0 w-3/12 text-white bg-opacity-85 rounded-lg"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="my-2 w-full
       py-4 bg-zinc-800 rounded-lg p-4"
          />
        )}
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
          className=" my-6 w-full bg-red-700 py-4 rounded-lg"
          onClick={handleButtonClick}
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
