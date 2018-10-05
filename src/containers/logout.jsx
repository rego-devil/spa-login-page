import React from 'react';
export class LogoutPage extends React.Component {

  componentWillMount() {
    window.localStorage ? window.localStorage.removeItem('auth') : null;
    this.props.history.push('/')
  }

  render() {
    return null
  }
}