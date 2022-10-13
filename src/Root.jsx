import React from "react";
import MovieList from "./components/Movie/MovieList";
import Navbar from "./components/Movie/Navbar";
const Root = () => {
  return (
    <div>
      <Navbar />
      <MovieList />
    </div>
  );
};

export default Root;
