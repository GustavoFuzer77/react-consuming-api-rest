/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { DivLoginContainer, FormLogin, Input, SocialLogin, SubLogin, Linkin } from './styled';
import { Container } from "../../styles/GlobalStyles";
import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';

import api from "../../services/axios";

export default function Login() {

  useEffect(() => {
    async function getData() {
      const { data } = await api.get('/users');
      console.log(data)
    }

    getData()
  }, [])

  return (
    <Container>
      <DivLoginContainer>
        <FormLogin>
          <div>
            <h2>Email</h2>
            <Input type='text' placeholder='Digite seu E-mail aqui'></Input>
          </div>
          <div>
            <h2>Senha</h2>
            <Input type='password' placeholder='Digite sua senha aqui'></Input>
          </div>
          <div>
            <button type='submit'>Logar</button>
          </div>
        </FormLogin>
        <SubLogin>Você tambem pode entrar usando:</SubLogin>
        <SocialLogin>
          <a href="#"><FaFacebook color='#3b5998' size='31px' /></a>
          <a href="#"><FaGoogle color='#DB4437' size='31px' style={{ marginLeft: '10px', marginRight: '10px' }} /></a>
          <a href="#"><FaTwitter color='#1DA1F2' size='31px' /></a>
        </SocialLogin>
        <SubLogin>Não tem uma conta ? <Linkin to='/create'>Clique aqui!</Linkin></SubLogin>
      </DivLoginContainer>
    </Container>
  )
}