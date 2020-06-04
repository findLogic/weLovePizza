import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Menu from './Menu';
import MainPage from './MainPage';
import '../styles/App.scss';
import Footer from './Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Route to="/" component={Menu} />
      <Switch>
        <Route to="/" component={MainPage} />
      </Switch>
      <Route to="/" component={Footer} />
    </BrowserRouter>
  );
};

export default App;
