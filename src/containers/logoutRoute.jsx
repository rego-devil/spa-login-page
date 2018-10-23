import React from 'react';
import {Route, Redirect, withRouter} from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {logout} from '../redux/actions';


class Container extends React.Component {
    componentWillMount() {
        this.props.logout();
    }

    // componentWillReceiveProps(nextProps) {
    //     const {isAuthenticated, redirect, history} = this.props;

    //     if(!nextProps.isAuthenticated) {
    //         this.props.history.push(redirect)
    //     }
    // }

    render() {
        const {redirect, ...rest} = this.props;
        return <Redirect to={redirect} {...rest} /> 
        // return null
    }
}


export const LogoutRoute = withRouter(connect((state) => ({
        isAuthenticated: state.session.isAuthenticated
    }),
    (dispatch) => ({
        logout: (data) => dispatch(logout(data))
    })
)(Container))

Container.propTypes = {
    props: PropTypes.shape({
        logout: PropTypes.func.isRequired
    }),
}