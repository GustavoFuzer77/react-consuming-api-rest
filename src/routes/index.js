import React from "react";
import { Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Page404 from "../pages/404";
import Login from "../pages/Login";
import Criar from "../pages/CriarConta";
import PrivateRoute from "./PrivateRoute";
import Perfil from "../pages/Perfil";

export default function Routes() {
  return(
    <Switch>
      <PrivateRoute exact path="/" component={Home}/>
      <PrivateRoute exact path="/login" component={Login}/>
      <PrivateRoute isClosed exact path="/perfil" component={Perfil}/>
      <PrivateRoute exact path="/create" component={Criar} />
      <PrivateRoute exact path="*" component={Page404}/>
    </Switch>
  )
}

