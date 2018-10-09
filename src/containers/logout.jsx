import React from 'react';
import { connect } from 'react-redux';
import {setAuthentication} from '../redux/actions';
class Container extends React.Component {

  componentWillMount() {
    if(this.props.isAuthenticated) {
      this.props.setAuthentication({isAuthenticated: false});
      this.props.history.push('/')
    }
    
  }

  render() {
    return null
  }
}

export const LogoutPage = connect(
  (state) => ({
    isAuthenticated: state.login.isAuthenticated
  }),
  (dispatch) => ({
    setAuthentication: (data) => dispatch(setAuthentication(data))
  })
)(Container)