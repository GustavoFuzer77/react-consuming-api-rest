import styled from "styled-components";

export const InicioDiv = styled.div`
  width: 100%;
  height: 250px;
  background-color: #1a1a1a;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 2.4rem;

  @media screen and (max-width: 767px){
    font-size: 1.9rem;
    text-align: center
  }

`;

export const SubTitle = styled.h1`
  margin-left: 9%;
  margin-top: 75px;

  @media screen and (max-width: 767px){
    margin-left: 8%;
  }

`;

export const SubTitle2 = styled.h1`
  margin-right: 9%;
  margin-top: 75px;
  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: 767px){
    margin-right: 8%;
  }

`;

export const Card = styled.div`
  background-color: #bfbfbf;
  max-width: 230px;
  height: 250px;
  padding: 5px
  margin-top: 15px;
  margin-bottom: 15px;

  &:hover{
    cursor: pointer;
    box-shadow: 5px 5px 5px rgba(1, 1, 1, 0.6);
    transition: box-shadow .7ms ease-in-out;
  }
`;