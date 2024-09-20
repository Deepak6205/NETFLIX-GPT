import React from 'react'
import { useSelector } from 'react-redux'
import { VideoTitle } from './VideoTitle'
import { VideoBackground } from './VideoBackground'

export const MainContainer = () => {
    const movies = useSelector((store)=>store.movies?.nowPlayingNovies)
  return (
    <div>
        <VideoTitle/>
        <VideoBackground/>
    </div>
  )
}
