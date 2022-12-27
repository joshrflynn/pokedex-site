import { useContext } from "react";
import { SidebarContext } from "../../context/sidebar.context";
import { SidebarContainer } from "./Sidebar.styles";

const Sidebar = () => {
  const { isSidebarOpen } = useContext(SidebarContext);

  return (
    <SidebarContainer style={isSidebarOpen ? { left: 0 } : { left: "-180px" }}>
      <div>
        <span>
          <u>About</u>
          <br /> <br />
          React project designed to consume PokeAPI
          <br />
          <br />
          Developed by joob
          <br />
          <br />
          Design inspired by Pokedex.org
        </span>
      </div>
    </SidebarContainer>
  );
};

export default Sidebar;
