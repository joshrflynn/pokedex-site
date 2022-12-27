import PokemonList from "./components/PokemonList/PokemonList";
import Navigation from "./components/Navigation/Navigation";
import Sidebar from "./components/Sidebar/Sidebar";
import { SidebarProvider } from "./context/sidebar.context";
import { PokemonContext } from "./context/pokemon.context";
import { useContext, useEffect } from "react";
import { POKEDEX_MAX_SIZE } from "./utils/utils";
import axios from "axios";

function App() {
  const URL = "https://pokeapi.co/api/v2/pokemon/";
  const {
    limit,
    offset,
    pokeArr,
    addToPokeArr,
    updateFilteredPokeArr,
    modalIsSelected,
  } = useContext(PokemonContext);

  //on first page load, requests data for each pokemon by dex number
  useEffect(() => {
    const fetchData = async () => {
      for (let i = 1; i <= POKEDEX_MAX_SIZE; i++) {
        try {
          const result = await axios(URL + i.toString());
          addToPokeArr(result.data);
        } catch (err) {
          //TODO catch error and send to error page - create error page
          console.log(err);
        }
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // updates which pokemon are displayed when the user changes page
  useEffect(() => {
    updateFilteredPokeArr(pokeArr.slice(offset, offset + limit));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [limit, offset, pokeArr]);

  //disables scrolling while modal is displaying
  useEffect(() => {
    if (modalIsSelected) {
      document.querySelector("html").style.overflowY = "hidden";
    } else {
      document.querySelector("html").style.overflowY = "auto";
    }
  }, [modalIsSelected]);

  return (
    <div>
      <SidebarProvider>
        <Navigation />
        <div
          style={{
            textAlign: "center",
            marginTop: "5px",
          }}
        >
          This site is still under development! Follow updates
          <a
            href="https://github.com/joshrflynn/pokedex-site"
            target="_blank"
            rel="noreferrer"
          >
            Here!
          </a>
        </div>
        <>
          <Sidebar />
          <PokemonList />
        </>
      </SidebarProvider>
    </div>
  );
}

export default App;
