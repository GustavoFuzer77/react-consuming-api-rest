import styled, { createGlobalStyle } from "styled-components";
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  body{
    font-family: sans-serif;
  }

  html, body, #root{
    height: 100%;
  }

  button{
    border: none;
    cursor: pointer;
  }

  a{
    text-decoration: none;
  }

  ul{
    list-style: none;
  }

  `;

  export const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;


  @media(min-width: 768px) and (max-width:1023px){
    max-width: 90%;
  }

  @media screen and (max-width: 767px){
    max-width: 90%;
  }
  `;
