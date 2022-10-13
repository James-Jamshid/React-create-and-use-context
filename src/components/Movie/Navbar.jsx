import React, { useContext } from "react";
import { NavbarContainer } from "../Styled";
import { Movie } from "./ContextPage";

const Navbar = () => {
  const [data, setData] = useContext(Movie);
  return (
    <NavbarContainer>
      {/* usecontext va data.length qilsa, context pagedahi kinolar nechtaligini
      chiqrib beradi. */}
      <h1>New 2022 movies: {data.length} new movies are found</h1>
    </NavbarContainer>
  );
};

export default Navbar;
