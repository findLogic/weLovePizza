import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Modal from '../../hoc/Modal';
import { connect } from 'react-redux';

import { onTryToLogin, logout } from '../../actions';
import './NavigationMenu.scss';
import LoginForm from '../Form/LoginForm/LoginForm';
import Loader from '../UI/Loader/Loader';

const NavigationMenu = ({ loginForm, onTryToLogin, loading, user, logout }) => {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const [loginInput, setLoginInput] = useState('');

  useEffect(() => {
    setShowLoginModal(false);
  }, [user]);

  const onLoginSubmit = () => {
    const { login, password } = loginForm.values;
    onTryToLogin(login, password);
    setLoginInput(login);
  };

  if (loading) {
    return <Loader></Loader>;
  }

  const renderLoginLogout = () => {
    return user ? (
      <div onClick={logout} className="ui item">
        Logout
      </div>
    ) : (
      <div onClick={() => setShowLoginModal(true)} className="ui item">
        Login
      </div>
    );
  };

  const renderLastOrder = () => {
    return user ? (
      <NavLink to="/lastOrders" className="item" activeClassName="active">
        Last Orders
      </NavLink>
    ) : (
      ''
    );
  };

  const renderRegistration = () => {
    return !user ? (
      <NavLink to="/registration" className="ui item">
        Registration
      </NavLink>
    ) : (
      ''
    );
  };

  return (
    <>
      <div className="navigation">
        <div className="ui secondary pointing menu">
          <NavLink to="/" exact className="item" activeClassName="active">
            <div className="logo"> WE LOVE PIZZA</div>
          </NavLink>
          {renderLastOrder()}

          <div className="right menu">
            {renderRegistration()}
            {renderLoginLogout()}
          </div>
        </div>
      </div>

      <Modal
        onDismiss={() => setShowLoginModal(false)}
        header="Please Enter Your Login And Password"
        visible={showLoginModal}>
        <LoginForm
          initialValues={{ title: 'Login Form', login: loginInput }}
          onSubmit={onLoginSubmit}
        />
      </Modal>
    </>
  );
};

const mapStateToProps = (state) => ({
  loginForm: state.form.loginForm,
  loading: state.auth.loading,
  user: state.auth.user,
});

export default connect(mapStateToProps, { onTryToLogin, logout })(
  NavigationMenu,
);
