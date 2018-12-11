/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock  } from 'react-bootstrap';
import PropTypes from 'prop-types';


const MyInput = (props) => {
  console.log('input---', props);
  const { input: { value, onChange, name }, type, label, meta: { touched, error, warning, submitFailed, invalid } } = props;
  const className = `form-group ${touched && (error ? 'has-error' : 'has-success')}`;
  return (
    <FormGroup bsClass={className}>
      <ControlLabel>{`${label}:`}</ControlLabel>
      <FormControl
        {...props.input}
        // value={submitFailed && !invalid ? '' : value}
        type={type}
        data-field-name={name}
      />
      <HelpBlock>
        {
          touched && (error || warning)
        }
      </HelpBlock>
    </FormGroup>
  );
};

MyInput.propTypes = {
  type: PropTypes.string,
};

export default MyInput;
