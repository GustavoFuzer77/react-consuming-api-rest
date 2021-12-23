/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { isEmail } from 'validator';
import { toast } from "react-toastify";
import { DivLoginContainer, FormLogin, Input, SocialLogin, SubLogin, Linkin } from './styled';
import { Container } from "../../styles/GlobalStyles";
import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';

import { useDispatch } from "react-redux";
import * as actions from '../../store/modules/auth/action';
import { get } from 'lodash';

export default function Login(props) {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    let error = false;

    const prevPath = get(props, 'location.state.prevPath', '/')

    if (!isEmail(email)) {
      error = true;
      toast.error('E-mail inválido.')
    }

    if (password.length < 5 || password.length > 50) {
      error = true;
      toast.error('Senha inválida.')
    }

    if (error) return;

    dispatch(actions.loginRequest({ email, password, prevPath }))

  }

  return (
    <Container>
      <DivLoginContainer>
        <FormLogin onSubmit={handleSubmit}>
          <div>
            <h2>Email</h2>
            <Input type='text' placeholder='Digite seu E-mail aqui' value={email} onChange={e => setEmail(e.target.value)}></Input>
          </div>
          <div>
            <h2>Senha</h2>
            <Input type='password' placeholder='Digite sua senha aqui' value={password} onChange={e => setPassword(e.target.value)}></Input>
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