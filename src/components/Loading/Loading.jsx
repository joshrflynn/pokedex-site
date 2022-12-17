import React, { useEffect, useState, useContext } from "react";
import "./Loading.css";
import { PokemonContext } from "../../context/pokemon.context";

const Loading = () => {
  const [displayText, setDisplayText] = useState("");
  const { updateLoadingFinished } = useContext(PokemonContext);

  useEffect(() => {
    const msgs = [
      "Throwing Pokéballs: 100%",
      "Beating Elite Four: 100%",
      "Completing Pokedex: 100%",
      "Loading...",
    ];

    let msgIndex = 0;
    let i = 0;
    const intervalID = setInterval(() => {
      if (i < msgs[msgIndex].length) {
        setDisplayText((prevState) => prevState + msgs[msgIndex][i++]);
      } else {
        if (msgIndex < msgs.length - 1) {
          msgIndex++;
          i = 0;
          setDisplayText((prevState) => prevState + "\n");
        } else {
          clearInterval(intervalID);
          updateLoadingFinished(true);
        }
      }
    }, 50);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="loading">
      <img src="pokeball.gif" alt="" className="gif" />
      <div className="loading-text">{displayText.toString()}</div>
    </div>
  );
};

export default Loading;
