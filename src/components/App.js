import React, { useEffect } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';

import MainPage from './MainPage';
import OrderPage from './OrderPage';

import Navigation from './Navigation';
import Footer from './Footer';
import '../styles/App.scss';
import RegisterForm from './RegisterForm';

const App = () => {
  return (
    <Router history={history}>
      <Route path="/" component={Navigation} />
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
