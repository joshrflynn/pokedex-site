import "./PokemonModal.css";
import { TYPE_COLORS } from "../../utils/typeColors";
import { DARKENED_COLORS } from "../../utils/darkenedColors";
import { capitalizeFirstLetter } from "../../utils/utils";
import Stats from "../Stats/Stats";
import Ability from "../Ability/Ability";
import FlavorText from "../FlavorText/FlavorText";

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
      "--bgColor": background,
      "--darkColor": DARKENED_COLORS[data.types[0].type.name],
      opacity: 0,
      zIndex: -1,
      width: "0px",
      height: "0px",
      top: "50%",
      left: "50%",
    };
  } else {
    style = {
      "--bgColor": background,
      "--darkColor": DARKENED_COLORS[data.types[0].type.name],
      opacity: 1,
      zIndex: 3,
      height: "100vh",
      width: "100vw",
      top: "0%",
      left: "0%",
    };
  }

  return (
    <div className="modal-container" style={style} onClick={modalCloseHandler}>
      <div className="modal">
        <div className="modal-header">
          {capitalizeFirstLetter(data.species.name)}
        </div>
        <div className="modal-content-1">
          <div className="modal-subcontent-1">
            <div className="sprite-container">
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`}
                alt={`${data.name} front sprite`}
                id="front-sprite"
              />
            </div>
            <div className="type-container">
              {data.types.map((type, index) => {
                const typeStyle = {
                  background: `${TYPE_COLORS[data.types[index].type.name]}`,
                };
                return (
                  <div
                    style={typeStyle}
                    className={"type"}
                    key={`${data.name} type ${index}`}
                  >
                    {type.type.name.toUpperCase()}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="ability-container">
            <p className="ability-header">Abilities</p>
            {data.abilities.map((ability) => {
              return (
                <Ability
                  data={ability}
                  key={`${data.name}-${ability.ability.name}`}
                />
              );
            })}
          </div>
          <div className="stat-container">
            <Stats stats={data.stats} name={data.name} />
          </div>
        </div>

        <FlavorText url={data.species.url} />
        {/* <div className="move-container">
          {data.moves.map((move) => {
            return <div>{move.move.name}</div>;
          })}
        </div> */}
      </div>
    </div>
  );
};

export default PokemonModal;
