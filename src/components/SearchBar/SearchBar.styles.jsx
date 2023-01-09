import styled from "styled-components";

export const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0 30px 0;
`;

export const SearchInput = styled.input`
  text-align: center;
  width: 250px;
  font-size: 20px;
  border: none;
  border-bottom: 1px solid black;
  background-color: lightgray;
  padding: 4px;

  &:focus {
    outline-width: 0;
  }
`;
