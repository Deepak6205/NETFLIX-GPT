import React from "react";
import { MovieList } from "./MovieList";
import { useSelector } from "react-redux";

export const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div className="bg-black w-screen">
        <div className=" -mt-52 pl-10 pr-10 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />      
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Top-Rated"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Horror"} movies={movies.nowPlayingMovies} />
          
        </div>
        
      </div>
    )
  );
};
