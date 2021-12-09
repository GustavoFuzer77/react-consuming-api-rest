import React, { useEffect } from "react";
import { H1, HeaderDiv } from "./styled";
import { Link } from "react-router-dom";
import { FaUserCircle } from 'react-icons/fa';


export default function Header() {


  return (
    <HeaderDiv>
      <Link to="/login">
        <H1>Logar</H1>
      </Link>
      <Link to="/create">
        <H1>Criar conta</H1>
      </Link>
      <Link to="/perfil">
        <FaUserCircle color='#999' size='31px' style={{marginRight: '25px'}}/>
      </Link>
    </HeaderDiv>
  )
}