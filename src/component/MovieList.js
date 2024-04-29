import React from 'react'
import MovieCard from './MovieCard'

const MovieList = (props) => {
  console.log("movies:",props.movies)
  return (
    <div>
{props.movies.map(movies=><MovieCard movies= {movies}/>)}

    </div>
  )
}

export default MovieList