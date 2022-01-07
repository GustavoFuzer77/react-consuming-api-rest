import styled from "styled-components";

export const Overlay = styled.div`
  background: rgba(0,0,0, 0.5);
  backdrop-filter: blur(7px);
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  background: #fff;
  border-radius: 2.5px;
  padding: 24px;
  box-shadow: 8px 4px 18px rgba(0,0,0,0.05);
  max-width: 500px;
  width: 90%;

  h1{
    color: ${({ danger }) => danger ? "rgba(255,10,8,0.8)" : "rgba(0,55,255,0.9)"};
    font-size: 1.5rem;
    font-family: sans-serif;
  }

  p{
    margin-top: 8px;
  }
`;

export const Footer = styled.footer`
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .cancel-button{
    background: transparent;
    border: none;
    color: grey;
    margin-right: 8px;
  }

  Button{
    width: 70px;
    font-weight: bold;
  }
`;
