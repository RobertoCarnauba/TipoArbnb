import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import New from './pages/New';

export default function Routes(){
    return(
        <BrowserRouter>
          <Switch>
              <Route path="/" exact component={Login} ></Route>
              <Route path="/dashboard" component={Dashboard} ></Route>
              <Route path="/new" component={New} ></Route>
          </Switch>
        </BrowserRouter>
    )
}