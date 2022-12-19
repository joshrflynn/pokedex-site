import { useContext } from "react";
import { PokemonContext } from "../../context/pokemon.context";
import "./PokemonList.css";
import SearchBar from "../SearchBar/SearchBar";
import Loading from "../Loading/Loading";
import PokemonTile from "../PokemonTile/PokemonTile";
import { POKEDEX_MAX_SIZE } from "../../utils/utils";

const PokemonList = () => {
  const {
    offset,
    updateOffset,
    limit,
    pokeArr,
    filteredPokeArr,
    loadingFinished,
  } = useContext(PokemonContext);

  const increaseOffset = () => {
    updateOffset(offset + limit);
  };
  const decreaseOffset = () => {
    updateOffset(offset - limit);
  };

  if (loadingFinished) {
    return (
      <div>
        {loadingFinished ? <SearchBar /> : "Still Loading"}
        <div className="pokemon-list">
          {offset !== 0 && (
            <div className="left-button" onClick={decreaseOffset}>
              &lt;
            </div>
          )}
          {offset + limit < POKEDEX_MAX_SIZE && (
            <div className="right-button" onClick={increaseOffset}>
              &gt;
            </div>
          )}
          {filteredPokeArr.map((pokemon) => {
            return (
              <PokemonTile data={pokemon} index={pokemon.id} key={pokemon.id} />
            );
          })}
        </div>
      </div>
    );
  }

  return <Loading />;
};

export default PokemonList;
