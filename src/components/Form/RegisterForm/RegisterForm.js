import React from 'react';
import { Field, reduxForm } from 'redux-form';

let RegisterForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;

  return (
    <div className="container ui">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
          <label>Name</label>
          <div>
            <Field
              required
              minLength="3"
              maxLength="15"
              name="name"
              component="input"
              type="text"
              placeholder="Name"
            />
          </div>
        </div>
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
          <label>Email</label>
          <div>
            <Field
              required
              name="email"
              component="input"
              type="email"
              placeholder="Email"
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
          <button
            className="ui button secondary"
            type="button"
            disabled={pristine || submitting}
            onClick={reset}>
            Clear Values
          </button>
        </div>
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'regForm',
})(RegisterForm);
