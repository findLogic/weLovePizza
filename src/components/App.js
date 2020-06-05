import React, { useEffect } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from '../history';

import Menu from './Menu';
import MainPage from './MainPage';
import Footer from './Footer';
import '../styles/App.scss';

const App = () => {
  return (
    <Router history={history}>
      <Route to="/" component={Menu} />
      <Switch>
        <Route to="/" component={MainPage} />
      </Switch>
      <Route to="/" component={Footer} />
    </Router>
  );
};

export default App;
