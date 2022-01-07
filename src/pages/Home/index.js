import React, { useEffect, useState } from "react";
import { InicioDiv, Title, Card } from './styled';
import { Container } from '../../styles/GlobalStyles';
import './stylesCss.css';
import Typist from 'react-typist';
import api from '../../services/axios';
import { get } from 'lodash/get'
import Modal from "../../components/Modal";
import Loader from "../../components/Loader";

export default function Home() {

  const [user, setUser] = useState([])

  useEffect(() => {
    async function getData() {
      const { data } = await api.get('/users')
      setUser(data)
    }

    getData()
  }, [])

  console.log(user)

  return (
    <>
      <InicioDiv>
        <Typist className="Typist">
          <Title className="title">Lorem ipsum dolor sit amet lorem</Title>
        </Typist>
      </InicioDiv>
      <br />
      <Container>
        {/* <Modal danger /> */}
        {/* <Loader/> */}
        <div className="div-card-container">
          {user.map(usuario => (
            <Card key={String(usuario.id)} >
              <div className="text-into-card">
                <p>{usuario.nome}</p>
              </div>
              <div className="image-into-card">

              </div>
            </Card>
          ))}
        </div>
      </Container>
    </>
  )
}
