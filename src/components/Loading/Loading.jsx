import React, { useEffect, useState, useContext } from "react";
import { PokemonContext } from "../../context/pokemon.context";
import { POKEDEX_MAX_SIZE } from "../../utils/utils";
import { LoadingContainer, LoadingText, PokeballGif } from "./Loading.styles";

const Loading = () => {
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
    <LoadingContainer>
      <PokeballGif src="pokeball.gif" alt="" />
      <LoadingText>{loading} / 905 Pokémon Loaded</LoadingText>
    </LoadingContainer>
  );
};

export default Loading;
