import styled from "styled-components";

export const HeaderDiv = styled.nav`
  width: 100%;
  height: 60px;
  background-color: #2b2b2b;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;


export const H1 = styled.h1`
  padding: 0;
  margin-right: 25px;
  color: #fff;
  font-size: 1.2rem;

  @media screen and (max-width: 767px){
    margin-right: 18px;

  }
`;