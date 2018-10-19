import React, { Component } from 'react';
import axios from 'axios';
import { login } from '../../services/LoginServices';

class AddUser extends Component {
  async addUser(newUser) {
    try {
      // Send POST request to create user
      await axios.request({
        method: 'post',
        url: 'http://localhost:3000/api/Users',
        data: newUser
      });

      login({ email: newUser.email, password: newUser.password }, this.props.history);
    } catch (err) {
      console.error(err);
    }
  }

  onSubmit(e) {
    const newUser = {
      name: this.refs.name.value,
      address: this.refs.address.value,
      phone: this.refs.phone.value,
      email: this.refs.email.value,
      password: this.refs.password.value
    };
    this.addUser(newUser);
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <br />
        <h3 className="center">Criar conta</h3>
        <form onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <input type="text" name="name" ref="name" />
            <label htmlFor="name">Nome</label>
          </div>
          <div className="input-field">
            <input type="text" name="address" ref="address" />
            <label htmlFor="address">Endereço</label>
          </div>
          <div className="input-field">
            <input type="text" name="phone" ref="phone" />
            <label htmlFor="phone">Celular</label>
          </div>
          <div className="input-field">
            <input type="text" name="email" ref="email" />
            <label htmlFor="email">E-mail</label>
          </div>
          <div className="input-field">
            <input type="password" name="password" ref="password" />
            <label htmlFor="password">Senha</label>
          </div>
          <div className="center">
            <input type="submit" value="Criar" className="btn" />
          </div>
        </form>
      </div>
    );
  }
}

export default AddUser;
