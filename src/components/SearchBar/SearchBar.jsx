import { useContext } from "react";
import { PokemonContext } from "../../context/pokemon.context";
import "./SearchBar.css";

const SearchBar = () => {
  const { pokeArr, updateFilteredPokeArr, limit, offset } =
    useContext(PokemonContext);

  const searchTextChangeHandler = (e) => {
    if (!e.target.value) {
      updateFilteredPokeArr(pokeArr.slice(offset, limit + offset));
      return;
    }

    const matchingPokemon = pokeArr.filter((element) => {
      return element.species.name.startsWith(e.target.value.toLowerCase());
    });

    updateFilteredPokeArr(matchingPokemon);
  };

  return (
    <div className={"search-bar"}>
      <input
        type="text"
        onChange={searchTextChangeHandler}
        placeholder={"Search Pokémon name"}
      />
    </div>
  );
};

export default SearchBar;
