import React from "react";
import { movies } from "../data";


console.log(movies)

function Movies() {
  const movieDetails = movies.map((movie) => (
    <div>
      <h2>Name: {movie.title}</h2>
      <p>Time: {movie.time}</p>
      <p>Genres: </p>
      <ul>
        {movie.genres.map((genre) => (
          <li>
            {genre}
          </li>
        ))}
      </ul>
    </div>
  ))

  return (
    <div>
      <h1>Movies Page</h1>
      {movieDetails}
    </div >
  )
}

export default Movies;
