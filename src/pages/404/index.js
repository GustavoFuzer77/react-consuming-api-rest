import React from "react";
import { Container } from "../../styles/GlobalStyles";
import { FaExclamationCircle } from 'react-icons/fa';
import { DivError, ErrorMsg  } from './styled';

export default function Page404() {
  return (
    <Container>
      <DivError>
        <FaExclamationCircle color='#f32' size='150px'/>
        <ErrorMsg>Ops!! Página não encontrada ;(</ErrorMsg>
      </DivError>
    </Container>
  )
}