import styled from "styled-components";

export const SidebarContainer = styled.div`
  will-change: left;
  transition: left 1s ease;
  height: 100%;
  border-right: 1px solid black;
  width: 180px;
  top: 75px;
  padding-top: 50px;
  background-color: white;
  text-align: center;
  position: fixed;
  z-index: 1;
`;
