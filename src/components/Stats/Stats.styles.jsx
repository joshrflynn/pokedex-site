import styled from "styled-components";

export const StatLine = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  align-items: center;
`;

export const BaseStatBar = styled.div`
  width: 120px;
  display: inline;
  min-height: 100%;
  font-family: "Courier New", Courier, monospace;
  text-align: right;
  font-weight: bolder;
  border: 1px solid black;
  box-shadow: 0px 0px 3px black;
  margin: 4px 0;
  background: linear-gradient(
    to left,
    white var(--barFill),
    var(--darkColor) 0%
  );

  @media (max-width: 560px) {
    width: 150px;
  }
`;
