import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import LoginForm from '../components/LoginForm';
import { setAuthentication } from '../redux/actions';

class Login extends React.PureComponent {
  render() {
    const { isAuthenticated, location, setAuthentication } = this.props;

    if (isAuthenticated) {
      return <Redirect to={location.state.from} />;
    }

    return (
      <div>
        <LoginForm onSubmit={setAuthentication} />
        <div className="loginTip">Login: max@test.com; Pass: 12345</div>
      </div>
    );
  }
}

Login.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  location: PropTypes.object,
  setAuthentication: PropTypes.func,
};


export const LoginPage = withRouter(connect(state => ({
  isAuthenticated: state.session.isAuthenticated,
}),
dispatch => ({
  setAuthentication: data => dispatch(setAuthentication(data)),
}))(Login));
