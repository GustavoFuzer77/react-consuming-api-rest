import styled from 'styled-components';

export const DivError = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ErrorMsg = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  font-style: oblique;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  @media screen and (max-width: 521px){
    word-wrap: break-word;
    text-align: center;
  }
`;