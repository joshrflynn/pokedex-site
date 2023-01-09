import { useContext } from "react";
import { PokemonContext } from "../../context/pokemon.context";
import SearchBar from "../SearchBar/SearchBar";
import Loading from "../Loading/Loading";
import PokemonTile from "../PokemonTile/PokemonTile";
import { POKEDEX_MAX_SIZE } from "../../utils/utils";
import {
  NextPageButton,
  PokemonListContainer,
  PrevPageButton,
} from "./PokemonList.styles";
import { PageNavigation } from "./PokemonList.styles";

const PokemonList = () => {
  const { offset, updateOffset, limit, filteredPokeArr, loadingFinished } =
    useContext(PokemonContext);

  const increaseOffset = () => {
    updateOffset(offset + limit, "increase");
  };
  const decreaseOffset = () => {
    updateOffset(offset - limit, "decrease");
  };

  if (!loadingFinished) {
    return <Loading />;
  }

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <SearchBar />
      <PageNavigation>
        <PrevPageButton onClick={decreaseOffset} id="prevPage">
          <div>&lt;&nbsp;</div>
          <div>Prev</div>
        </PrevPageButton>

        <div>
          {offset + 1} -{" "}
          {limit + offset >= POKEDEX_MAX_SIZE
            ? POKEDEX_MAX_SIZE
            : limit + offset}
        </div>

        <NextPageButton onClick={increaseOffset} id="nextPage">
          <div>Next</div>
          <div>&nbsp;&gt;</div>
        </NextPageButton>
      </PageNavigation>

      <PokemonListContainer>
        {filteredPokeArr.map((pokemon) => {
          return (
            <PokemonTile data={pokemon} index={pokemon.id} key={pokemon.id} />
          );
        })}
      </PokemonListContainer>
    </div>
  );
};

export default PokemonList;
