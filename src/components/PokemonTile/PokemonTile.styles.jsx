import styled from "styled-components";

export const PokemonTileContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 150px;
  width: 150px;
  margin: 10px 10px;
  font-size: 18px;
  box-shadow: 0px 0px 10px black;
  border: 1px solid black;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
  position: relative;
  @media (max-width: 450px) {
    width: 90px;
    height: 90px;
  }
`;

export const DexNumber = styled.span`
  font-size: 14px;
  position: absolute;
  right: 3px;
  top: 3px;
  background-color: white;
  border-radius: 25%;
  padding: 0px 2px;
  border: 1px solid black;

  @media (max-width: 450px) {
    font-size: 10px;
  }
`;

export const PokemonTileSprite = styled.img`
  width: 120px;
  height: 120px;
  transition: all 0.3s ease-in-out;

  @media (max-width: 450px) {
    width: 90px;
    height: 90px;
  }
`;

export const PokemonTileName = styled.div`
  color: white;
  width: 100%;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
  border-bottom-left-radius: 9px;
  border-bottom-right-radius: 9px;
  transform: translateY(3px);
  transition: all 0.3s ease-in-out;

  @media (max-width: 450px) {
    transform: translateY(-7px);
    font-size: 14px;
  }
`;
