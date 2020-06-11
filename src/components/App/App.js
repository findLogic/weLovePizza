import React, { useEffect, Suspense } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import OrderPage from '../Pages/OrderPage/OrderPage';
import Layout from '../../hoc/Layout';
import './App.scss';
import Loader from '../UI/Loader/Loader';
import RegistrationPage from '../Pages/RegistrationPage/RegistrationPage';
import LastOrders from '../Pages/LastOrders/LastOrders';
import { checkLocalStorageUser } from '../../actions';

const MainPage = React.lazy(() => import('../Pages/MainPage/MainPage'));

const App = ({ checkLocalStorageUser }) => {
  useEffect(() => {
    checkLocalStorageUser();
  }, []);

  const routes = (
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/registration" exact component={RegistrationPage} />
      <Route path="/order" exact component={OrderPage} />
      <Route path="/lastOrders" exact component={LastOrders} />
      <Redirect to="/" />
    </Switch>
  );

  return (
    <Suspense fallback={<Loader />}>
      <Layout>{routes}</Layout>
    </Suspense>
  );
};

export default connect(null, { checkLocalStorageUser })(App);
