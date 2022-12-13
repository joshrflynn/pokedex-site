import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { PokemonProvider } from "./context/pokemon.context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <PokemonProvider>
    <App />
  </PokemonProvider>
);
