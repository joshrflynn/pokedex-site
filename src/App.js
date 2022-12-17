import PokemonList from "./components/PokemonList/PokemonList";
import Navigation from "./components/Navigation/Navigation";
import Sidebar from "./components/Sidebar/Sidebar";
import { SidebarProvider } from "./context/sidebar.context";
import { PokemonContext } from "./context/pokemon.context";
import { useContext, useEffect } from "react";
import axios from "axios";

const URL = "https://pokeapi.co/api/v2/pokemon/";

function App() {
  const POKEDEX_MAX_SIZE = 905;
  const { pokeArr, updatePokeArr, updateFilteredPokeArr } =
    useContext(PokemonContext);

  useEffect(() => {
    if (pokeArr.length === 0) {
      const fetchData = async () => {
        for (let i = 1; i <= POKEDEX_MAX_SIZE; i++) {
          try {
            const result = await axios(URL + i.toString());
            console.log(result);
            updatePokeArr(result.data);
          } catch (err) {
            console.log(err);
          }
        }
      };

      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    updateFilteredPokeArr(pokeArr);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pokeArr]);

  const { menuIsSelected } = useContext(PokemonContext);

  //disables scrolling while modal is displaying
  useEffect(() => {
    if (menuIsSelected) {
      document.querySelector("html").style.overflowY = "hidden";
    } else {
      document.querySelector("html").style.overflowY = "auto";
    }
  }, [menuIsSelected]);

  //TODO delete styles and element once finished with development
  const tempBannerStyle = {
    textAlign: "center",
    marginTop: "5px",
  };

  return (
    <div>
      <SidebarProvider>
        <Navigation />
        <div style={tempBannerStyle}>
          This site is still under development! Follow updates{" "}
          <a
            href="https://github.com/joshrflynn/pokedex-site"
            target={"_blank"}
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
