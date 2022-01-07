import React, { useState } from "react";
import { H1, HeaderDiv } from "./styled";
import { Link } from "react-router-dom";
import { FaUserCircle } from 'react-icons/fa';
import { useSelector } from "react-redux";
import api from "../../services/axios";
import { get } from "lodash/get";

export default function Header() {

  async function getData()  {
    const { data } = await api.get('/user')
    setFoto(data.FotoUsers[0]?.url)
  }

  React.useEffect(() => {
    getData()
  }, [])

  const [foto, setFoto] = useState('')

  return (
    <HeaderDiv>
      <Link to="/">
        <H1>HOME</H1>
      </Link>
      {!(useSelector((state) => state.authReducer.isLoggedIn)) ? <Link to="/login">
        <H1>Logar</H1>
      </Link> : ''}
      {!(useSelector((state) => state.authReducer.isLoggedIn)) ? <Link to="/create">
        <H1>Criar conta</H1>
      </Link> : ''}
      <Link className="teste" to="/perfil">
        <span>{foto ? (<img src={foto} alt="foto_perfil" />) : (<FaUserCircle color='#999' size='31px' style={{ marginRight: '25px' }} />)}</span>
      </Link>
    </HeaderDiv>
  )
}
