import React from 'react';
import { Field, reduxForm } from 'redux-form';

const AddressForm = (props) => {
  const { handleSubmit, pristine, submitting } = props;

  return (
    <div className="container ui">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="field">
          <label>Address to deliver</label>
          <div>
            <Field
              required
              minLength="5"
              maxLength="150"
              name="address"
              component="input"
              type="text"
              placeholder="Enter your address"
            />
          </div>
        </div>
        <div className="field">
          <label>Comment</label>
          <div>
            <Field
              maxLength="150"
              name="comment"
              component="input"
              type="text"
              placeholder="Enter here comment for order"
            />
          </div>
        </div>
        <p>There is no payment at all.</p>
        <div>
          <button
            className="ui button green big fluid"
            type="submit"
            disabled={pristine || submitting}>
            FEED ME!
          </button>
        </div>
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'addressForm',
})(AddressForm);
