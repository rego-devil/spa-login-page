import React from 'react';
import {loginData} from '../data/login';
import {LoginForm} from '../components';
import {glossary} from '../data/glossary';
import { withRouter } from 'react-router'

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      password: '',
      login: '',
      error: false
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    if(this.state.login === loginData.username && this.state.password === loginData.password) {
      // this.setState({error: false});
      window.localStorage.setItem('auth', true);
      this.props.history.push('/profile');
    } else {
      this.setState({error: true})
    }
  }

  handleLogin(event) {
    this.setState({login: event.target.value})
  }

  handlePassword(event) {
    this.setState({password: event.target.value});
  }

  render() {
    console.log(this.props)
    return (
      <LoginForm {...this.state}
          onHandleLogin={this.handleLogin} onHandlePassword={this.handlePassword} onHandleSubmit={this.handleSubmit}  />
    )
  }
}

export const LoginPage = withRouter(Login)