import "./PokemonModal.css";
import { TYPE_COLORS } from "../../utils/typeColors";
import { DARKENED_COLORS } from "../../utils/darkenedColors";
import { capitalizeName } from "../../utils/utils";

const PokemonModal = ({ show, setShow, data }) => {
  const modalCloseHandler = () => {
    setShow(false);
  };

  let background =
    data.types.length > 1
      ? `linear-gradient(to right, ${
          TYPE_COLORS[data.types[0].type.name]
        } 50%, ${TYPE_COLORS[data.types[1].type.name]} 50%)`
      : `${TYPE_COLORS[data.types[0].type.name]}`;

  let style;
  if (!show) {
    style = {
      "--bg": background,
      "--dark": DARKENED_COLORS[data.types[0].type.name],
      opacity: 0,
      zIndex: -1,
    };
  } else {
    style = {
      "--bg": background,
      "--dark": DARKENED_COLORS[data.types[0].type.name],
      opacity: 1,
      zIndex: 1,
    };
  }

  return (
    <div className="modal-container" style={style} onClick={modalCloseHandler}>
      <div className="modal">
        <div className="modal-header">{capitalizeName(data.name)}</div>
        <div className="modal-content-1">
          <div className="sprite-container">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`}
              alt={`${data.name} front sprite`}
              id="front-sprite"
            />
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${data.id}.png`}
              alt={`${data.name} back sprite`}
              id="back-sprite"
            />
          </div>

          <div className="type-container">
            {data.types.map((type, index) => {
              const typeStyle = {
                background: `${TYPE_COLORS[data.types[index].type.name]}`,
              };
              return (
                <div style={typeStyle} className={"type"}>
                  {type.type.name.toUpperCase()}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonModal;
