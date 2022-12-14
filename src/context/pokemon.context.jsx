import { createContext, useState } from "react";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [loadingFinished, setLoadingFinished] = useState(false);
  const [pokeArr, setPokeArr] = useState([]);
  const [filteredPokeArr, setFilteredPokeArr] = useState([]);
  const [menuIsSelected, setMenuIsSelected] = useState(false);

  const updateFilteredPokeArr = (newState) => {
    setFilteredPokeArr(newState);
  };

  const updateMenuSelection = (newState) => {
    setMenuIsSelected(newState);
  };

  const updatePokeArr = (newState) => {
    setPokeArr((currState) => [...currState, newState]);
  };

  const updateLoadingFinished = (newState) => {
    setLoadingFinished(newState);
  };

  const value = {
    menuIsSelected,
    updateMenuSelection,
    pokeArr,
    updatePokeArr,
    filteredPokeArr,
    updateFilteredPokeArr,
    loadingFinished,
    updateLoadingFinished,
  };

  return (
    <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>
  );
};
