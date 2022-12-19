import React, { useEffect, useState, useContext } from "react";
import "./Loading.css";
import { PokemonContext } from "../../context/pokemon.context";
import { POKEDEX_MAX_SIZE } from "../../utils/utils";

const Loading = () => {
  // const [displayText, setDisplayText] = useState("");
  const { updateLoadingFinished, pokeArr } = useContext(PokemonContext);
  const [loading, setLoading] = useState(pokeArr.length);

  useEffect(() => {
    if (pokeArr.length === POKEDEX_MAX_SIZE) {
      updateLoadingFinished(true);
    }
    setLoading(pokeArr.length);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokeArr]);

  return (
    <div className="loading">
      <img src="pokeball.gif" alt="" className="gif" />
      <div className="loading-text">{loading} / 905 Pokémon Loaded</div>
    </div>
  );
};

export default Loading;
