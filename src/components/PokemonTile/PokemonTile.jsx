import { useContext, useState } from "react";
import { PokemonContext } from "../../context/pokemon.context";
import PokemonModal from "../PokemonModal/PokemonModal";
import "./PokemonTile.css";
import { TYPE_COLORS } from "../../utils/typeColors";

//helper function
const capitalizeName = (str) => {
  if (!str) return;
  return str[0].toUpperCase() + str.substring(1);
};

const PokemonTile = ({ index, data }) => {
  const { menuIsSelected, updateMenuSelection } = useContext(PokemonContext);
  const [isSelected, setIsSelected] = useState(false);
  const [show, setShow] = useState(false);

  const clickHandler = () => {
    if (!menuIsSelected) {
      updateMenuSelection(true);
      setShow(true);
      setIsSelected(true);
    } else if (menuIsSelected && isSelected) {
      updateMenuSelection(false);
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
        <div className={`pokemon-tile`} style={style} onClick={clickHandler}>
          <span className="dex-num">{data.id}</span>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`}
            alt={`${data.species.name} sprite`}
            className="pokemon-image"
            draggable={false}
          />
          <div className="pokemon-name">
            {capitalizeName(data.species.name)}
          </div>
          <PokemonModal
            show={show}
            setShow={setShow}
            data={data}
            key={data.id}
          />
        </div>
      )}
    </>
  );
};

export default PokemonTile;
