import React from 'react';
import {Route, Redirect} from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {logout} from '../redux/actions';


class Container extends React.Component {
    componentWillMount() {
        this.props.logout();
    }

    render() {
        const {redirect, ...rest} = this.props;
        return <Redirect to={redirect} {...rest} /> 
    }
}


export const LogoutRoute = connect(null,
    (dispatch) => ({
        logout: (data) => dispatch(logout(data))
    })
)(Container)

Container.propTypes = {
    props: PropTypes.shape({
        logout: PropTypes.func.isRequired
    }),
}