import React from 'react';
import {loginData} from '../data/login';

export class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      login: ''
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('event', event);
    if(this.state.login === loginData.username && this.state.password === loginData.password) {
      console.log('Авторизация пройдена')
    } else {
      console.log('Авторизация не пройдена')
    }
  }

  handleLogin(event) {
    this.setState({login: event.target.value})
  }

  handlePassword(event) {
    this.setState({password: event.target.value});
  }

  render() {

    return (
      <div className="loginOuter">
        <form method="post" action="" className="login" onSubmit={(e) => this.handleSubmit(e)}>
          <p>
            <label htmlFor="login">Логин:</label>
            <input type="text" name="login" id="login" value={this.state.login} onChange={(event) => this.handleLogin(event)} />
          </p>

          <p>
            <label htmlFor="password">Пароль:</label>
            <input type="password" name="password" id="password" value={this.state.password} onChange={(event) => this.handlePassword(event)} />
          </p>

          <p className="login-submit">
            <button type="submit" className="login-button">Войти</button>
          </p>

          <p className="forgot-password"><a href="index.html">Забыл пароль?</a></p>
        </form>
      </div>
    )
  }
}