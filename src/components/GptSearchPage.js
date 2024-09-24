import React from "react";
import { GptSearchBar } from "./GptSearchBar";
import { GptMovieSuggestion } from "./GptMovieSuggestion";
import { BG_IMG } from "../utils/Constants";
export const GptSearchPage = () => {
  return (
    <div>
      <div className="absolute -z-10 w-screen">
        <img src={BG_IMG} alt="bg-img" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};
