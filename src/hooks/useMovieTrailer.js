import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/Constants";
import { addtrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) =>{
    const dispatch = useDispatch();
    // fetch trailer video & updating the store with trailer video data
  
    const getMoviesVideos = async () => {
      const data = await fetch(
        'https://api.themoviedb.org/3/movie/'+ movieId + '/videos?language=en-US',
        API_OPTIONS
      );
      const json = await data.json();
      console.log(json);
  
      const filterTrailer = json.results.filter(
        (video) => video.type === "Trailer"
      );
      const trailer = filterTrailer.length ? filterTrailer[0] : json.results[0];
      dispatch(addtrailerVideo(trailer))
    };
  
    useEffect(() => {
      getMoviesVideos();
    }, []);
}

export default useMovieTrailer;