import styled from "styled-components";

export const PokemonListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
  max-width: 95vw;
`;

const BaseButton = styled.div`
  /* position: fixed; */
  font-size: 18px;
  top: 0;
  width: 55px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  text-align: center;

  @media (max-width: 355px) {
    width: 40px;
  }
`;

export const PrevPageButton = styled(BaseButton)``;

export const NextPageButton = styled(BaseButton)``;

export const PageNavigation = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 20px auto;
  transition: width 0.5s;

  @media (max-width: 1000px) {
    width: 65%;
  }
  @media (max-width: 800px) {
    width: 70%;
  }

  @media (max-width: 600px) {
    width: 75%;
  }
  @media (max-width: 330px) {
    width: 90%;
  }
`;
