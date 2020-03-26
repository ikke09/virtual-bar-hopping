import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import App from './App';
import NotFound from './Not-Found';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={App}></Route>
        <Route component={NotFound}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
