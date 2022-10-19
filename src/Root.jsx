import React from "react";
import AddMovie from "./components/Movie/AddMovie";
import MovieList from "./components/Movie/MovieList";
import Navbar from "./components/Movie/Navbar";
import { RootContainer, RootWrapper } from "./components/Styled";
const Root = () => {
  return (
    <RootContainer>
      <RootWrapper>
        <Navbar />
        <AddMovie />
        <MovieList />
      </RootWrapper>
    </RootContainer>
  );
};

export default Root;
