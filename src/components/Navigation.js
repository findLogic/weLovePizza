import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Modal from './Modal';
import { connect } from 'react-redux';
import RegisterForm from './RegisterForm';
import { addNewUser, tryToLoginUser } from '../actions/';
import '../styles/Navigation.scss';
import LoginForm from './LoginForm';

const Menu = ({ regForm, addNewUser, tryToLoginUser, loginForm, isLogged }) => {
  const [showRegModal, setShowRegModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  // useEffect(() => {
  //   setShowLoginModal(isLogged);
  //   setShowRegModal(isLogged);
  // }, [isLogged]);

  const onRegSubmit = () => {
    const { email, login, name, password } = regForm.values;

    addNewUser({ email, login, name, password });
  };

  const onLoginSubmit = () => {
    const { login, password } = loginForm.values;
    tryToLoginUser({ login, password });
  };

  const renderLoginLogout = () => {
    return isLogged ? 'Logout' : 'Login';
  };

  const renderRegistration = () => {
    return isLogged ? (
      ''
    ) : (
      <div onClick={() => setShowRegModal(true)} className="ui item">
        Registration
      </div>
    );
  };

  const renderLastOrders = () => {
    return isLogged ? (
      <NavLink to="/lastOrders" className="item" activeClassName="active">
        Last Orders
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
          {renderLastOrders()}

          <div className="right menu">
            {renderRegistration()}
            <div onClick={() => setShowLoginModal(true)} className="ui item">
              {renderLoginLogout()}
            </div>
          </div>
        </div>
      </div>
      <Modal
        onDismiss={() => setShowRegModal(false)}
        header="Registration Form:"
        visible={showRegModal}>
        <RegisterForm
          initialValues={{ title: 'Register Form' }}
          onSubmit={onRegSubmit}
        />
      </Modal>
      <Modal
        onDismiss={() => setShowLoginModal(false)}
        header="Please Enter Your Login And Password"
        visible={showLoginModal}>
        <LoginForm
          initialValues={{ title: 'Login Form' }}
          onSubmit={onLoginSubmit}
        />
      </Modal>
    </>
  );
};

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
  regForm: state.form.regForm,
  loginForm: state.form.loginForm,
});

export default connect(mapStateToProps, { addNewUser, tryToLoginUser })(Menu);
