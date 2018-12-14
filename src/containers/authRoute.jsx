import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


const Container = ({
  isAuthenticated, innerComponent: Component, redirect, ...rest
}) => (
  <Route {...rest}
    render={props => (
      isAuthenticated
        ? <Component {...props} />
        : <Redirect to={{ pathname: redirect, state: { from: props.location } }} />
    )}
  />
);


export const AuthRoute = connect(state => ({
  isAuthenticated: state.session.isAuthenticated,
}))(Container);

Container.propTypes = {
  props: PropTypes.shape({
    isAuthenticated: PropTypes.bool.isRequired,
  }),
};

