import { useContext } from "react";
import { SidebarContext } from "../../context/sidebar.context";
import { Navbar, NavTitle, NavMenuIcon } from "./Navigation.styles";

const Navigation = () => {
  const { isSidebarOpen, updateSidebar } = useContext(SidebarContext);

  const updateSidebarHandler = () => {
    updateSidebar(!isSidebarOpen);
  };

  document.addEventListener("scroll", () => {
    updateSidebar(false);
  });

  return (
    <Navbar>
      <NavMenuIcon onClick={updateSidebarHandler}>
        <svg viewBox="0 0 100 80" width="30" height="30" id="nav-icon">
          <rect width="100" height="20"></rect>
          <rect y="30" width="100" height="20"></rect>
          <rect y="60" width="100" height="20"></rect>
        </svg>
      </NavMenuIcon>
      <NavTitle>ReactDex</NavTitle>
    </Navbar>
  );
};

export default Navigation;
