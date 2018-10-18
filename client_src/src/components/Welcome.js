import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => (
  <div className="center">
    <h2>Bem Vindo ao Basic Bank</h2>
    <br />
    <h5>Crie uma nova conta para começar a utilizar nossos recursos</h5>
    <br />
    <Link className="btn" to="/user/add">
      Criar nova conta
    </Link>
  </div>
);

export default Welcome;
