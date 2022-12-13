import PokemonList from "./components/PokemonList/PokemonList";
import Navigation from "./components/Navigation/Navigation";
import Sidebar from "./components/Sidebar/Sidebar";
import { SidebarProvider } from "./context/sidebar.context";
import { PokemonContext } from "./context/pokemon.context";
import { useContext, useEffect, useState } from "react";

function App() {
  const { menuIsSelected } = useContext(PokemonContext);
  const [scrollPosition, setScrollPosition] = useState(0);

  //disables scrolling while modal is displaying
  useEffect(() => {
    if (menuIsSelected) {
      setScrollPosition(document.querySelector("html").scrollTop);
      document.querySelector("html").style.overflowY = "scroll";
      document.querySelector("html").style.position = "fixed";
    } else {
      document.querySelector("html").style.position = "static";
      document.querySelector("html").style.overflow = "auto";
      document.querySelector("html").scrollTo(0, scrollPosition);
    }
  }, [menuIsSelected]);

  return (
    <div>
      <SidebarProvider>
        <Navigation />
        <>
          <Sidebar />
          <PokemonList />;
        </>
      </SidebarProvider>
    </div>
  );
}

export default App;
