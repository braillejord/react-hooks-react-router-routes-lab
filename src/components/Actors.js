import React from "react";
import { actors } from "../data";

function Actors() {
  const actorDetails = actors.map((actor) => (
    <div>
      <h2>Name: {actor.name}</h2>
      <p>Movies: </p>
      <ul>
        {actor.movies.map((movie) => (
          <li>{movie}</li>
        ))}
      </ul>
    </div>
  ))

  return (
    <div>
      <h1>Actors Page</h1>
      {actorDetails}
    </div>
  )
}

export default Actors;
