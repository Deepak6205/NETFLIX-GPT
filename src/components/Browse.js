
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import { Header } from './Header'
import { MainContainer } from './MainContainer';
import { SecondaryContainer } from './SecondaryContainer';
export const Browse = () => {

  // Fetch the data from the TMDB API and update the store so for that i have done custom hook
  useNowPlayingMovies();

  return (
    <div>
      <Header/>

      {/*
      Planing the UI
        MainContainer
            -VideoBackground
            -VideoTitle

        SecondaryContainer
          - MoviesList * n
            - cards * n
      */}
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}
