import React from 'react';
import { Button, Panel } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import MyInput from './Input';
import { glossary } from '../data/glossary';
import { required, email, shortPassword } from '../helpers/validate';

const LoginForm = (props) => {
  console.log('props', props);
  const { error, handleSubmit, pristine, valid, submitting, asyncValidating } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="email"
        component={MyInput}
        type="text"
        placeholder="email"
        label="Email"
        validate={[required, email]}
      />
      <Field
        name="password"
        component={MyInput}
        type="password"
        placeholder="password"
        label="Password"
        validate={[required, shortPassword]}
      />
      <Button type="submit" bsStyle="info" disabled={pristine || !valid || submitting}>
        {glossary.submit}
      </Button>
      {
				error && <Panel bsStyle="danger">
						<Panel.Heading>{error}</Panel.Heading>
					</Panel>
			}
    </form>
  );
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.string
};

export default reduxForm({
  form: 'login',
})(LoginForm);
