import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {loginData} from '../data/login';
import {LoginForm} from '../components';
import {setAuthentication, isValidAuth} from '../redux/actions';

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      password: '',
      login: '',
      error: false
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.props);
    // this.props.isValidAuth({login: this.state.login, password: this.state.password})
    if(this.state.login === loginData.username && this.state.password === loginData.password) {
      this.setState({error: false});
      this.props.setAuthentication({isAuthenticated: true});
      this.props.history.push('/profile');
    } else {
      this.setState({error: true})
    }
  }

  handleLogin() {
    return (event) => {
      this.setState({login: event.target.value})
    }
  }

  handlePassword(event) {
    this.setState({password: event.target.value});
  }

  render() {
    return (
      <LoginForm {...this.state}
          onHandleLogin={this.handleLogin()} onHandlePassword={(e) => this.handlePassword(e)} onHandleSubmit={this.handleSubmit}  />
    )
  }
}

export const LoginPage = withRouter(connect(null,
  (dispatch) => ({
    setAuthentication: (data) => dispatch(setAuthentication(data)),
    isValidAuth: (data) => dispatch(isValidAuth(data)),
  })
)(Login))