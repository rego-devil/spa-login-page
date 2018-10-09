import React from 'react';
import {Route, Redirect} from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {setAuthentication} from '../redux/actions';


class Container extends React.Component {
    componentWillMount() {
        this.props.setAuthentication({isAuthenticated: false});
    }

    render() {
        const {redirect, setAuthentication, ...rest} = this.props;
        return <Redirect to={redirect} {...rest} /> 
    }
}


export const LogoutRoute = connect(null,
    (dispatch) => ({
        setAuthentication: (data) => dispatch(setAuthentication(data))
    })
)(Container)

Container.propTypes = {
    props: PropTypes.shape({
        setAuthentication: PropTypes.func.isRequired
    }),
}