import React, { useState, useContext } from "react";
import MoviePage from "./MoviePage";
import { Movie } from "./ContextPage";

const MovieList = () => {
  const [data, setData] = useContext(Movie);
  return (
    <div>
      {data.map((value, index) => {
        return <MoviePage key={value.id} data={value} />;
      })}
    </div>
  );
};

export default MovieList;
