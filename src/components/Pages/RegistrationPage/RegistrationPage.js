import React from 'react';
import RegisterForm from '../../Form/RegisterForm/RegisterForm';

const RegistrationPage = () => {
  const onRegSubmit = () => {
    console.log('submit');
  };

  return (
    <div>
      <RegisterForm
        initialValues={{ title: 'Register Form' }}
        onSubmit={onRegSubmit}
      />
    </div>
  );
};

export default RegistrationPage;
