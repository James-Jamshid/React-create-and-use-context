import React, { useState, useContext } from "react";
import { AddContainer } from "../Styled";
import { Movie } from "./ContextPage";
const AddMovie = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [data, setData] = useContext(Movie);
  const onAdd = () => {
    // console.log(name, price);
    setData((prev) => [...prev, { id: 5, name: name, price: price }]);
  };
  return (
    <AddContainer>
      <div>
        <h4>
          If you want add new movie below, just type the name movie, price and
          click Add
        </h4>
      </div>
      <div className="input">
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Add new movie name"
        />
        <input
          onChange={(e) => setPrice(e.target.value)}
          value={price}
          placeholder="Add price"
        />
        <button onClick={onAdd}>Add</button>
      </div>
    </AddContainer>
  );
};

export default AddMovie;
