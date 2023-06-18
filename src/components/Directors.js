import React from "react";
import { directors, movies } from "../data";

function Directors() {
  return (
  <div>
    <h1>Directors Page</h1>
    {directors.map((director,index) =>(
      <div key={index}>
        <h2>{director.name}</h2>
        <ul>
        {director.movies.map((movie,movieIndex) =>(
          <li key ={movieIndex}>{movie} </li>
        
    ))}
        </ul>
        </div>
    ))}

    
    </div>
    );
}

export default Directors;
