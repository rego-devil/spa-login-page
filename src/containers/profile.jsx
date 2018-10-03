import React from 'react';
import {LoginPage} from './';
export class ProfilePage extends React.Component {
  render() {
    return (
        window.localStorage && window.localStorage.getItem('auth')  ? (
          <div>Profile page</div>
        ) : <LoginPage /> 
    )
  }
}