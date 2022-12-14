import axios from "axios";
import { useEffect, useContext, useState } from "react";
import { PokemonContext } from "../../context/pokemon.context";
import "./PokemonList.css";
import SearchBar from "../SearchBar/SearchBar";
import Loading from "../Loading/Loading";
import PokemonTile from "../PokemonTile/PokemonTile";
import { SidebarContext } from "../../context/sidebar.context";

const URL = "https://pokeapi.co/api/v2/pokemon/";

const PokemonList = () => {
  const POKEDEX_MAX_SIZE = 905;
  const {
    pokeArr,
    updatePokeArr,
    filteredPokeArr,
    updateFilteredPokeArr,
    loadingFinished,
  } = useContext(PokemonContext);

  const { isSidebarOpen } = useContext(SidebarContext);

  const [style, setStyle] = useState(null);

  useEffect(() => {
    if (!isSidebarOpen) {
      setStyle({ width: "90%" });
      return;
    }
    setStyle({ width: "80%", marginRight: "20px" });
  }, [isSidebarOpen]);

  useEffect(() => {
    if (pokeArr.length === 0) {
      const fetchData = async () => {
        for (let i = 1; i <= POKEDEX_MAX_SIZE; i++) {
          try {
            const result = await axios(URL + i.toString());
            updatePokeArr(result.data);
          } catch (err) {
            console.log(err);
          }
        }
      };

      fetchData();
    }
  }, []);

  useEffect(() => {
    updateFilteredPokeArr(pokeArr);
  }, [pokeArr]);

  if (pokeArr.length === 905 && loadingFinished) {
    return (
      <div>
        <SearchBar />
        <div className="pokemon-list" style={style}>
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
