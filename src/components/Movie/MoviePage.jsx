import React, { useContext } from "react";
import { Container } from "../Styled";
import { Movie } from "./ContextPage";
const MoviePage = (props) => {
  const [data] = useContext(Movie);

  return (
    //bu yerda props orqali datani boshqa pagega chaqirib oldik bu
    // context API deyiladi.
    <Container>
      <h1>Name: {props.data.name}</h1>
      <h5>Price: {props.data.price}</h5>
      <hr />
    </Container>
  );
};

export default MoviePage;
