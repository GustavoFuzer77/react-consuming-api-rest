import styled, { css } from "styled-components";

export const Button = styled.button`
  padding: 5px;
  border: none;
  background-color: rgba(255,204,80,0.8);
  max-width: 200px;
  width: 100%;
  color: black;
  object-fit: fill;

  ${({ danger }) => danger && css`
    background: rgba(255,10,8,0.8);
  `}
`;
