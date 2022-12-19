import { useContext } from "react";
import { PokemonContext } from "../../context/pokemon.context";
import "./PokemonList.css";
import SearchBar from "../SearchBar/SearchBar";
import Loading from "../Loading/Loading";
import PokemonTile from "../PokemonTile/PokemonTile";

const PokemonList = () => {
  const { pokeArr, filteredPokeArr, loadingFinished } =
    useContext(PokemonContext);

  if (loadingFinished && pokeArr.length === 905) {
    return (
      <div>
        <SearchBar />
        <div className="pokemon-list">
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
