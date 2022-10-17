import React from "react";
import AddMovie from "./components/Movie/AddMovie";
import MovieList from "./components/Movie/MovieList";
import Navbar from "./components/Movie/Navbar";
const Root = () => {
  return (
    <div>
      <Navbar />
      <AddMovie />
      <MovieList />
    </div>
  );
};

export default Root;
