import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {LoginForm} from '../components';
import {setAuthentication} from '../redux/actions';

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
    const {login, password} = this.state;
    // console.log(this.props);
    // if(this.state.login === loginData.username && this.state.password === loginData.password) {
    //   this.setState({error: false});
    //   this.props.setAuthentication({isAuthenticated: true});
    //   this.props.history.push('/profile');
    // } else {
    //   this.setState({error: true})
    // }

    this.props.setAuthentication({login, password})
  }

  // handleLogin() {
  //   return (event) => {
  //     this.setState({login: event.target.value})
  //   }
  // }

  handleInput(event) {
    const fieldName = event.target.dataset.fieldName;
    this.setState({[fieldName]: event.target.value});
  }

  render() {
    return (
      <LoginForm {...this.state} onHandleInput={(e) => this.handleInput(e)} onHandleSubmit={this.handleSubmit}  />
    )
  }
}

export const LoginPage = withRouter(connect((state) => ({
    errorMsg: state.session.errorMsg
  }),
  (dispatch) => ({
    setAuthentication: (data) => dispatch(setAuthentication(data)),
  })
)(Login))