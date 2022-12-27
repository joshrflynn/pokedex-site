import { createContext, useEffect, useState } from "react";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [loadingFinished, setLoadingFinished] = useState(false);
  const [pokeArr, setPokeArr] = useState([]);
  const [filteredPokeArr, setFilteredPokeArr] = useState([]);
  const [modalIsSelected, setmodalIsSelected] = useState(false);
  const [limit, setLimit] = useState(80);
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

  const updateModalSelection = (newState) => {
    setmodalIsSelected(newState);
  };

  const addToPokeArr = (newState) => {
    setPokeArr((currState) => [...currState, newState]);
  };

  const updateLoadingFinished = (newState) => {
    setLoadingFinished(newState);
  };

  const value = {
    modalIsSelected,
    updateModalSelection,
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
