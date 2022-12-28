import styled from "styled-components";

const width = "200px";

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 150px;
`;

export const LoadingText = styled.div`
  font-size: 16px;
  white-space: pre;
  text-align: center;
  width: ${width};
`;

export const PokeballGif = styled.img`
  margin-bottom: 30px;
  animation: rotation 3s infinite linear;
  width: ${width};

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;
