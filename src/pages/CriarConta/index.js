import React, { useState } from "react";

import { Container } from "../../styles/GlobalStyles";
import { FaFacebook, FaTwitter, FaGoogle } from 'react-icons/fa';
import './style.css'
import { isEmail } from 'validator';
import { toast } from "react-toastify";
import api from '../../services/axios';


export default function Criar() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState();

  const handleCreate = async (e) => {
    e.preventDefault()
    let error = false

    if (!isEmail(email)) {
      toast.error('Email inválido.')
      error = true;
    }

    if (password < 5) {
      toast.error('Senha muito curta.')
      error = true;
    }

    if (password > 50) {
      toast.error('Senha muito longa.')
      error = true;
    }

    if(nome === ''){
      toast.error('O nome não pode estar em branco')
    }

    if(idade < 18 ){
      toast.error('Idade permitida acima de 18 anos.')
    }

    if (error) return

    const payload = {
      email: email,
      password: password,
      nome: nome,
      idade: idade
    }

    try {
      const teste = await api.post('/user', payload)
      console.log(teste)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Container>
      <div className="container-form">
        <div>
          <form onSubmit={handleCreate}>
            <div className="container-main-create">

              <div className="input inputField">
                <p>Email:</p>
                <input type='email' placeholder="digite seu email" value={email} onChange={e => setEmail(e.target.value)} />
              </div>
              <div className="input inputField">
                <p>Senha:</p>
                <input type='password' placeholder="digite sua senha" value={password} onChange={e => setPassword(e.target.value)} />
              </div>

              <div className="flex">
                <div className="input inputField-name">
                  <p>Nome:</p>
                  <input placeholder="digite seu nome" value={nome} onChange={e => setNome(e.target.value)} />
                </div>

                <div className="input-age inputField-age">
                  <p>Idade:</p>
                  <input maxLength='2' placeholder="idade" value={idade} onChange={e => setIdade(e.target.value)} />
                </div>
              </div>

              <div className="button container">
                <button type="submit">Criar conta</button>
              </div>
              <p className="texto">Ou você pode criar pelo: </p>
              <div className="social">
                <FaFacebook color='#3b5998' size='31px' />
                <FaGoogle color='#DB4437' size='31px' style={{ marginLeft: '10px', marginRight: '10px' }} />
                <FaTwitter color='#1DA1F2' size='31px' />
              </div>
            </div>
          </form>
        </div>
      </div>
    </Container>
  )
}