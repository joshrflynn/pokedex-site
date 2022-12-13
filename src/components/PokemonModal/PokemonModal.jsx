import React from "react";
import "./PokemonModal.css";
import { TYPE_COLORS } from "../../utils/typeColors";

const PokemonModal = ({ show, setShow, data }) => {
  const modalClickHandler = () => {
    setShow(false);
  };

  const modalStyles =
    data.types.length > 1
      ? {
          backgroundImage: `linear-gradient(to right, ${
            TYPE_COLORS[data.types[0].type.name]
          } 50%, ${TYPE_COLORS[data.types[1].type.name]} 50%)`,
        }
      : {
          backgroundColor: `${TYPE_COLORS[data.types[0].type.name]}`,
        };

  let style;
  if (!show) {
    style = { opacity: 0, zIndex: -1 };
  } else {
    style = { opacity: 1, zIndex: 1 };
  }

  return (
    <div className="modal-container" style={style} onClick={modalClickHandler}>
      <div className="modal" style={modalStyles}>
        <div>#{data.id}</div>
        <div>{data.name}</div>
        {data.types.map((type) => {
          return <div>{type.type.name}</div>;
        })}
        {data.stats.map((stat) => {
          return (
            <div>
              {stat.stat.name} {stat.base_stat}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PokemonModal;
