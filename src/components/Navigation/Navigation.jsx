import { useContext } from "react";
import { SidebarContext } from "../../context/sidebar.context";
import "./Navigation.css";

const Navigation = () => {
  const { isSidebarOpen, updateSidebar } = useContext(SidebarContext);

  const updateSidebarHandler = () => {
    updateSidebar(!isSidebarOpen);
  };

  return (
    <div className="navbar">
      <div
        id={
          isSidebarOpen
            ? "nav-icon-container-open"
            : "nav-icon-container-closed"
        }
        onClick={updateSidebarHandler}
      >
        <svg viewBox="0 0 100 80" width="30" height="30" id="nav-icon">
          <rect width="100" height="20"></rect>
          <rect y="30" width="100" height="20"></rect>
          <rect y="60" width="100" height="20"></rect>
        </svg>
      </div>
      <span id="nav-title">Pokedex Project</span>
    </div>
  );
};

export default Navigation;
