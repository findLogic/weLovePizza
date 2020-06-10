import React, { useEffect, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import OrderPage from '../Pages/OrderPage/OrderPage';
import Layout from '../../hoc/Layout';
import './App.scss';
import RegistrationPage from '../Pages/RegistrationPage/RegistrationPage';
import Loader from '../UI/Loader/Loader';
const MainPage = React.lazy(() => import('../Pages/MainPage/MainPage'));

const App = () => {
  const routes = (
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/registration" exact component={RegistrationPage} />
      <Route path="/order" exact component={OrderPage} />
      <Redirect to="/" />
    </Switch>
  );

  return (
    <Suspense fallback={<Loader />}>
      <Layout>{routes}</Layout>
    </Suspense>
  );
};

export default App;
