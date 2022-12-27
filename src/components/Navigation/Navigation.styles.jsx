import styled from "styled-components";

export const Navbar = styled.div`
  height: 35px;
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: rgb(164, 1, 1);
  width: auto;
  justify-content: space-between;
  position: sticky;
  top: 0;
  left: 0;
  box-shadow: 0px 2px 5px;
  z-index: 1;
`;

export const NavTitle = styled.span`
  font-size: 36px;
  margin-right: 45px;
  color: white;

  @media (max-width: 539px) {
    font-size: 28px;
    margin-right: 5px;
  }
`;

export const NavMenuIcon = styled.div`
  margin-left: 5px;
  padding: 10px;
  border-radius: 50%;
  z-index: 100;
  transition: background-color 1s;

  &:hover {
    background-color: white;
    cursor: pointer;
  }
`;
