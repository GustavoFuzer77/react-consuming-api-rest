import React, { useEffect, useState } from "react";

import { Container } from "../../styles/GlobalStyles";
import { useSelector, useDispatch } from "react-redux";
import { Form, FotoSection, AboutSection } from './styled';
import { isEmail } from 'validator';
import { toast } from "react-toastify";
import { Button } from '../../components/Button';
import { FaUserCircle } from 'react-icons/fa';

import api from "../../services/axios";

export default function Perfil() {

  const authPayload = useSelector((state) => state.authReducer.user)

  const dispatch = useDispatch();

  const [email, setEmail] = useState(authPayload.email);
  const [nome, setNome] = useState(authPayload.nome);
  const [idade, setIdade] = useState(authPayload.idade);
  const [foto, setFoto] = useState('')
  const [descricao, setDescricao] = useState(authPayload.descricao);

  async function getData() {
    try {
      const { data } = await api.get('/user')
      setFoto(data.FotoUsers[0].url)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    let error = false;

    if (!isEmail(email)) {
      toast.error('Email inválido.')
      error = true;
    }

    if (nome === '') {
      toast.error('O nome não pode estar em branco')
    }

    if (idade < 18) {
      toast.error('Idade permitida acima de 18 anos.')
    }
    
    if (error) return


    // dispatch(actions.loginRequest({ email, password, prevPath }))

  }
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FotoSection>
          <label htmlFor="foto">
            {foto ? <img src={foto} alt="foto_usuario" /> : <FaUserCircle size="200px" opacity={0.3} />}
            <input type='file' id="foto" />
          </label>
        </FotoSection>
        <AboutSection>
          <p>digite os novos dados</p>
          <div className="div-about">
            <label>Email</label>
            <input type='email' placeholder={email} value={email} onChange={(e) => setEmail(e.target.value)}/>
            <label>nome</label>
            <input type='text' placeholder={nome} value={nome} onChange={(e) => setNome(e.target.value)}/>
            <label>idade</label>
            <input type='number' maxLength={2} placeholder={idade} value={idade} onChange={(e) => setIdade(e.target.value)}/>
            <label>descricão</label> 
            <input type='text' placeholder={descricao} value={descricao} onChange={(e) => setDescricao(e.target.value)}/>
          </div>
          <div>
            <Button>Editar</Button>
          </div>
        </AboutSection>
        
      </Form>
    </Container>
  )
}