import React from "react";
import Header from "../../components/Header";
import { InicioDiv, Title, SubTitle, SubTitle2 } from './styled';
import { Container } from '../../styles/GlobalStyles';
import './stylesCss.css';
import Typist from 'react-typist';

export default function Home() {

  return (
    <>
      <Header />
      <InicioDiv>
        <Typist className="Typist">
          <Title className="title">Lorem ipsum dolor sit amet lorem</Title>
        </Typist>
      </InicioDiv>
      <Container>
        <div>
          <SubTitle>Just SubTitle</SubTitle>
          <div className="div-subtitle">
            <p>Lorem ipsum dolor sit amet lorem Lorem ipsum dolor sit amet lorem Lorem ipsum dolor sit amet lorem Lorem ipsum dolor sit amet lorem Lorem ipsum dolor sit amet lorem Lorem ipsum dolor sit amet loremLorem ipsum dolor sit amet lorem Lorem ipsum dolor sit amet lorem Lorem ipsum dolor sit amet lorem</p>
          </div>
        </div>
        <SubTitle2>Just SubTitle2</SubTitle2>
        <div className="div-subtitle2">
          <p>Lorem ipsum dolor sit amet lorem Lorem ipsum dolor sit amet lorem Lorem ipsum dolor sit amet lorem Lorem ipsum dolor sit amet lorem Lorem ipsum dolor sit amet lorem Lorem ipsum dolor sit amet loremLorem ipsum dolor sit amet lorem Lorem ipsum dolor sit amet lorem Lorem ipsum dolor sit amet lorem</p>
        </div>

      </Container>
    </>
  )
}