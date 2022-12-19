import { createContext, useEffect, useState } from "react";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [loadingFinished, setLoadingFinished] = useState(false);
  const [pokeArr, setPokeArr] = useState([]);
  const [filteredPokeArr, setFilteredPokeArr] = useState([]);
  const [menuIsSelected, setMenuIsSelected] = useState(false);
  const [limit, setLimit] = useState(50);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 50);
  }, [offset]);

  const updateLimit = (newState) => {
    setLimit(newState);
  };
  const updateOffset = (newState) => {
    setOffset(newState);
  };

  const updateFilteredPokeArr = (newState) => {
    setFilteredPokeArr(newState);
  };

  const updateMenuSelection = (newState) => {
    setMenuIsSelected(newState);
  };

  const addToPokeArr = (newState) => {
    setPokeArr((currState) => [...currState, newState]);
  };

  const updateLoadingFinished = (newState) => {
    setLoadingFinished(newState);
  };

  const value = {
    menuIsSelected,
    updateMenuSelection,
    pokeArr,
    addToPokeArr,
    filteredPokeArr,
    updateFilteredPokeArr,
    loadingFinished,
    updateLoadingFinished,
    limit,
    offset,
    updateOffset,
    updateLimit,
  };

  return (
    <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>
  );
};
