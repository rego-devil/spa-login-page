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
    if(login && password) {
      this.props.setAuthentication({email: login, password})
    }
    
  }

  handleInput(event) {
    const fieldName = event.target.dataset.fieldName;
    this.setState({[fieldName]: event.target.value});
  }

  render() {
    const {errorMsg, isAuthenticated, location, isFetching} = this.props;
    const {from} = location.state;

    if(isAuthenticated) {
      return  <Redirect to={from} />
    }
    
    return (
      <LoginForm {...this.state} isFetching={isFetching} errorMsg={errorMsg} onHandleInput={(e) => this.handleInput(e)} onHandleSubmit={this.handleSubmit}  />
    )
  }
}

export const LoginPage = withRouter(connect((state) => ({
    errorMsg: state.session.errorMsg,
    isAuthenticated: state.session.isAuthenticated,
    isFetching: state.session.isFetching
  }),
  (dispatch) => ({
    setAuthentication: (data) => dispatch(setAuthentication(data)),
  })
)(Login))