import { createContext, useEffect, useState } from "react";
import { POKEDEX_MAX_SIZE } from "../utils/utils";

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [loadingFinished, setLoadingFinished] = useState(false);
  const [pokeArr, setPokeArr] = useState([]);
  const [filteredPokeArr, setFilteredPokeArr] = useState([]);
  const [modalIsSelected, setmodalIsSelected] = useState(false);
  const [offset, setOffset] = useState(0);
  const limit = 80;

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0, "smooth");
    }, 10);
  }, [offset]);

  const updateOffset = (newState, method) => {
    switch (method) {
      case "increase":
        if (offset + limit <= POKEDEX_MAX_SIZE) {
          setOffset(newState);
        }
        break;
      case "decrease":
        if (newState >= 0) {
          setOffset(newState);
        }
        break;
      default:
        break;
    }
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
  };

  return (
    <PokemonContext.Provider value={value}>{children}</PokemonContext.Provider>
  );
};
