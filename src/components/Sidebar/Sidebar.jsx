import { useContext } from "react";
import { SidebarContext } from "../../context/sidebar.context";

import "./Sidebar.css";

const Sidebar = () => {
  const { isSidebarOpen } = useContext(SidebarContext);

  return (
    <div
      className={isSidebarOpen ? `expanded` : `minimized`}
      id="sidebar-container"
    >
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
    </div>
  );
};

export default Sidebar;
