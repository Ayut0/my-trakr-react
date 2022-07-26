import styled from "styled-components";

export const StyledApp = styled.div`
  text-align: center;
  height: 100vh;
  h1 {
    color: #001858;
    padding: 1rem;
    &:hover {
      color: red;
      font-weight: bold;
    }
  }
  h2 {
    color: #001858;
  }
  input, button{
    padding: .1rem;
    border-radius: 10px;
  }
  button{
    cursor: pointer;
  }
  background-color: #fef6e4;
`;
