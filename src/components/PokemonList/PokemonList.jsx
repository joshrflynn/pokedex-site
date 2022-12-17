import { useContext } from "react";
import { PokemonContext } from "../../context/pokemon.context";
import "./PokemonList.css";
import SearchBar from "../SearchBar/SearchBar";
import Loading from "../Loading/Loading";
import PokemonTile from "../PokemonTile/PokemonTile";

const PokemonList = () => {
  const { pokeArr, filteredPokeArr, loadingFinished } =
    useContext(PokemonContext);

  // useEffect(() => {
  //   if (pokeArr.length === 0) {
  //     const fetchData = async () => {
  //       for (let i = 1; i <= POKEDEX_MAX_SIZE; i++) {
  //         try {
  //           const result = await axios(URL + i.toString());
  //           updatePokeArr(result.data);
  //         } catch (err) {
  //           console.log(err);
  //         }
  //       }
  //     };

  //     fetchData();
  //   }
  // }, []);

  // useEffect(() => {
  //   updateFilteredPokeArr(pokeArr);
  // }, [pokeArr]);

  if (loadingFinished) {
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
