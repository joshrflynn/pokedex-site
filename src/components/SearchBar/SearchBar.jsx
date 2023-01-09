import { useContext } from "react";
import { PokemonContext } from "../../context/pokemon.context";
import { SearchBarContainer, SearchInput } from "./SearchBar.styles";

const SearchBar = () => {
  const { pokeArr, updateFilteredPokeArr, limit, offset } =
    useContext(PokemonContext);

  const searchTextChangeHandler = (e) => {
    if (e.target.value === "") {
      updateFilteredPokeArr(pokeArr.slice(offset, limit + offset));
      return;
    }

    const matchingPokemon = pokeArr.filter((element) => {
      return element.species.name.startsWith(e.target.value.toLowerCase());
    });

    updateFilteredPokeArr(matchingPokemon);
  };

  return (
    <SearchBarContainer>
      <SearchInput
        type="text"
        onChange={searchTextChangeHandler}
        placeholder={"Search Pokémon name"}
      />
    </SearchBarContainer>
  );
};

export default SearchBar;
