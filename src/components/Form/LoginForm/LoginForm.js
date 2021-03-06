import React from 'react';
import { Field, reduxForm } from 'redux-form';

const LoginForm = (props) => {
  const { handleSubmit, pristine, submitting } = props;

  return (
    <div className="container ui">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
          <label>Login</label>
          <div>
            <Field
              required
              minLength="5"
              maxLength="15"
              name="login"
              component="input"
              type="text"
              placeholder="Login"
            />
          </div>
        </div>

        <div className="field">
          <label>Password</label>
          <div>
            <Field
              required
              minLength="5"
              maxLength="15"
              name="password"
              component="input"
              type="password"
              placeholder="password"
            />
          </div>
        </div>

        <div>
          <button
            className="ui button green"
            type="submit"
            disabled={pristine || submitting}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'loginForm',
})(LoginForm);
