import React from 'react'
import { CDN_IMG_URL } from '../utils/Constants'

export const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 pr-4'>
        <img alt='movie card' src={CDN_IMG_URL + posterPath}/>
    </div>
  )
}
