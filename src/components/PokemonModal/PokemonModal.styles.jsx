import styled from "styled-components";

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  transition: z-index 0.4s, opacity 0.4s, width 0.4s, height 0.4s, top 0.4s,
    left 0.4s;
  will-change: z-index, opacity, width, height, top, left;
  background: var(--bgColor);
`;

export const Modal = styled.div`
  width: 95%;
  max-width: 570px;
  height: 80%;
  margin-top: 20px;
  border: 1px solid var(--darkColor);
  overflow-y: scroll;
  background-color: #f3f3f3;
`;

export const ModalHeader = styled.div`
  background-color: var(--darkColor);
  color: white;
  height: 55px;
  display: flex;
  font-size: 48px;
  justify-content: center;
  align-items: center;
  letter-spacing: -1px;
`;

export const Type = styled.div`
  width: 80px;
  height: fit-content;
  text-align: center;
  font-weight: bold;
  letter-spacing: -1px;
  color: white;
  border: 1px solid var(--darkColor);
  margin: 10px 5px 0 5px;
`;

export const TypeContainer = styled.div`
  display: flex;
  margin-top: 4px;
`;

export const ModalContentContainer = styled.div`
  margin-top: 15px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 560px) {
    flex-direction: column;
    height: 88%;
  }
`;

export const SpriteTypeFlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SpriteContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const FrontSprite = styled.img`
  width: 160px;
  border: 1px solid black;
  box-shadow: 1px 1px 10px black;
  background-color: white;
`;
