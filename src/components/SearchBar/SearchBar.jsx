import { useContext } from "react";
import { PokemonContext } from "../../context/pokemon.context";
import "./SearchBar.css";

const SearchBar = () => {
  //create filtered array context
  //default to whole pokemon list

  const { pokeArr, updateFilteredPokeArr } = useContext(PokemonContext);

  const searchTextChangeHandler = (e) => {
    if (!e.target.value) {
      console.log('break')
      updateFilteredPokeArr(pokeArr);
      return;
    }
    console.log('search')
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
        placeholder={"Search for pokemon..."}
      />
    </div>
  );
};

export default SearchBar;
