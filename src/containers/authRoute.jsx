import React from 'react';
import {Route, Redirect} from "react-router-dom";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';


const Container = ({isAuthenticated, component, redirect, innerComponent, ...rest }) => {
    let DinamicComponent = component;
    if(innerComponent) {
        DinamicComponent = innerComponent
    } 
    return (
        <Route {...rest} render={ (props) => {
                return isAuthenticated  ? <DinamicComponent {...props} /> : <Redirect to={{ pathname: redirect, state: {from: props.location}}} />
            }}
        />
    )
}


export const AuthRoute = connect( (state) => ({
    isAuthenticated: state.session.isAuthenticated
  })
)(Container)

Container.propTypes = {
    props: PropTypes.shape({
        isAuthenticated: PropTypes.bool.isRequired
    }),
}