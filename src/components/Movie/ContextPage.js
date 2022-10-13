import React, { useState, createContext } from "react";
export const Movie = createContext();
export const MovieProvider = ({ children }) => {
  const [data, setData] = useState([
    { id: 1, name: "The Power Of Ring", price: "100$" },
    { id: 2, name: "Avatar", price: "50$" },
    { id: 3, name: "Sherlock", price: "60$" },
    { id: 4, name: "Galactic football", price: "80$" },
  ]);
  return <Movie.Provider value={[data, setData]}>{children}</Movie.Provider>;
};
