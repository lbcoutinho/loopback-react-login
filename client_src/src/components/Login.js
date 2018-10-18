import React, { Component } from 'react';
import { login } from '../services/LoginServices';

class Login extends Component {
  onSubmit(e) {
    const credentials = {
      email: this.refs.email.value,
      password: this.refs.password.value
    };
    login(credentials);
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <br />
        <h3 className="center">Login</h3>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <input type="text" name="email" ref="email" required />
            <label htmlFor="email">E-mail</label>
          </div>
          <div className="input-field">
            <input type="password" name="password" ref="password" required />
            <label htmlFor="password">Senha</label>
          </div>
          <div className="center">
            <input type="submit" value="Entrar" className="btn" />
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
