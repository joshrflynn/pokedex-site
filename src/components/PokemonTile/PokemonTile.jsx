import { useContext, useState } from "react";
import { PokemonContext } from "../../context/pokemon.context";
import PokemonModal from "../PokemonModal/PokemonModal";
import { TYPE_COLORS } from "../../utils/typeColors";
import { capitalizeFirstLetter } from "../../utils/utils";
import {
  DexNumber,
  PokemonTileContainer,
  PokemonTileName,
  PokemonTileSprite,
} from "./PokemonTile.styles";

const PokemonTile = ({ index, data }) => {
  const { modalIsSelected, updateModalSelection } = useContext(PokemonContext);
  const [isSelected, setIsSelected] = useState(false);
  const [show, setShow] = useState(false);

  const clickHandler = () => {
    if (!modalIsSelected) {
      document.title = capitalizeFirstLetter(data.species.name);
      updateModalSelection(true);
      setShow(true);
      setIsSelected(true);
    } else if (modalIsSelected && isSelected) {
      document.title = "React PokeDex";
      updateModalSelection(false);
      setShow(false);
      setIsSelected(false);
    }
  };

  //sets background to match pokemon type colors
  const style =
    data.types.length > 1
      ? {
          backgroundImage: `linear-gradient(to right, ${
            TYPE_COLORS[data.types[0].type.name]
          } 50%, ${TYPE_COLORS[data.types[1].type.name]} 50%)`,
        }
      : {
          backgroundColor: `${TYPE_COLORS[data.types[0].type.name]}`,
        };

  return (
    <>
      {style && (
        <PokemonTileContainer style={style} onClick={clickHandler}>
          <DexNumber>{data.id}</DexNumber>
          <PokemonTileSprite
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`}
            alt={`${data.species.name} sprite`}
            draggable={false}
          />
          <PokemonTileName>
            {capitalizeFirstLetter(data.species.name)}
          </PokemonTileName>

          <PokemonModal show={show} setShow={setShow} data={data} />
        </PokemonTileContainer>
      )}
    </>
  );
};

export default PokemonTile;
