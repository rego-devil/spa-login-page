import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import {setAuthentication} from '../redux/actions';

export class Login extends React.PureComponent {

  render() {
    const { isAuthenticated, location }  = this.props;

    if(isAuthenticated) {
      return  <Redirect to={location.state.from} />;
    }

    return (
      <div>
        <LoginForm  onSubmit={this.props.setAuthentication} />
        <div className="loginTip">Login: max@test.com; Pass: 12345</div>
      </div>
    );
  }
}

export const LoginPage = withRouter(connect((state) => ({
    isAuthenticated: state.session.isAuthenticated,
  }),
  (dispatch) => ({
    setAuthentication: (data) => dispatch(setAuthentication(data)),
  })
)(Login));