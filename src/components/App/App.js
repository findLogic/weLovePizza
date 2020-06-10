import React, { useEffect } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../../history';

import MainPage from '../Pages/MainPage/MainPage';
import OrderPage from '../Pages/OrderPage/OrderPage';

import NavigationMenu from '../NavigationMenu/NavigationMenu';
import Footer from '../Footer/Footer';
import './App.scss';
import RegisterForm from '../Form/RegisterForm/RegisterForm';

const App = () => {
  return (
    <Router history={history}>
      <Route path="/" component={NavigationMenu} />
      <Switch>
        <Route path="/" exact component={MainPage} />
        <Route path="/order" exact component={OrderPage} />
        <Route path="/registration" exact component={RegisterForm} />
      </Switch>
      <Route path="/" component={Footer} />
    </Router>
  );
};

export default App;
