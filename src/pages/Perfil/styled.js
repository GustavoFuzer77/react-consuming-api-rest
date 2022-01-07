import styled from "styled-components";

export const Form = styled.form`
 display: flex;
 align-items: flex-start;
flex-wrap: wrap;
`;

export const FotoSection = styled.div`


  label{
    border-radius: 50%;
    border: 2px #2b2b2b solid;
    width: 200px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #d9d9d9;
    margin-top: 50px;
    cursor: pointer;
    font-size: 1.2rem;
    overflow: hidden;
    object-fit: fill;

    &:hover{
      opacity: 0.8;
    }

    @media screen and (max-width: 767px){
      margin-left: 25%;
    }
  }

  input{
    display: none;
  }

  img{
    width: 200px;
    height: 200px;
  }
`;


export const AboutSection = styled.div`
  max-width: 550px;
  width: 100%;
  margin-top: 60px;

  p{
    display: flex;
    justify-content: center;
    font-size: 1.2rem;
    margin-bottom: 10px;
  }

  .descricao{
  }

  .div-about{
    display: flex;
    flex-direction: column;
    margin-left: 50px;
  }

  input{
    max-width: 425px;
    width: 98%;
    padding: 5px;
  }

  textarea{
    max-width: 425px;
    width: 98%;
    padding: 5px;
    height: 60px;
    font-family: sans-serif;
    resize: none;
  }

  div + div {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }

  @media screen and (max-width: 767px){
    margin-right: 8%;
  }

`;

