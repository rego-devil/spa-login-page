import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
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
    this.props.setAuthentication({login, password})
  }

  handleInput(event) {
    const fieldName = event.target.dataset.fieldName;
    this.setState({[fieldName]: event.target.value});
  }

  render() {
    const {errorMsg, isAuthenticated, location} = this.props;
    const {from} = location.state;

    if(isAuthenticated) {
      return  <Redirect to={from} />
    }
    
    return (
      <LoginForm {...this.state} errorMsg={errorMsg} onHandleInput={(e) => this.handleInput(e)} onHandleSubmit={this.handleSubmit}  />
    )
  }
}

export const LoginPage = withRouter(connect((state) => ({
    errorMsg: state.session.errorMsg,
    isAuthenticated: state.session.isAuthenticated
  }),
  (dispatch) => ({
    setAuthentication: (data) => dispatch(setAuthentication(data)),
  })
)(Login))