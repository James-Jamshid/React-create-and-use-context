import React, { useState, useContext } from "react";
import { AddContainer } from "../Styled";
import { Movie } from "./ContextPage";
const AddMovie = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [data, setData] = useContext(Movie);
  const onAdd = () => {
    if (name.length !== 0 && price.length !== 0) {
      // console.log(name, price);
      setData((prev) => [
        ...prev,
        { id: data.length + 1, name: name, price: price },
      ]);
    }

    setName("");
    setPrice("");
  };
  return (
    <AddContainer>
      <div>
        <h4>
          If you want add new movie below, just type the name movie, price and
          click the button!
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
