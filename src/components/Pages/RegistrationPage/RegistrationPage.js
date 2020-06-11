import React from 'react';
import RegisterForm from '../../Form/RegisterForm/RegisterForm';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../../actions';

const RegistrationPage = ({ auth, user }) => {
  const onRegSubmit = (values) => {
    const { name, email, login, password } = values;
    auth({ name, email, login, password });
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <RegisterForm
        initialValues={{ title: 'Register Form' }}
        onSubmit={(values) => onRegSubmit(values)}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, { auth })(RegistrationPage);
