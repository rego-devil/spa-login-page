import React from 'react';
import {Route, Redirect} from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


const Container = ({isAuthenticated, component: Component, redirect, ...rest }) => {
    return (
        <Route {...rest} render={(props) => (
                isAuthenticated  ? <Component {...props} /> : <Redirect to={redirect} />
            )}
        />
    )
}


export const AuthRoute = connect( (state) => ({
    isAuthenticated: state.login.isAuthenticated
  })
)(Container)

Container.propTypes = {
    props: PropTypes.shape({
        isAuthenticated: PropTypes.bool.isRequired
    }),
}