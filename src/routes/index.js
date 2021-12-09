import React from "react";
import { Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Page404 from "../pages/404";
import Login from "../pages/Login";
import PrivateRoute from "./PrivateRoute";

export default function Routes() {
  return(
    <Switch>
      <PrivateRoute exact path="/" component={Home}/>
      <PrivateRoute exact path="/login" component={Login}/>
      <PrivateRoute isClosed exact path="/perfil" component={Page404}/>
      <PrivateRoute exact path="*" component={Page404}/>
    </Switch>
  )
}

