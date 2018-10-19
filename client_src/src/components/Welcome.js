import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => (
  <div className="center">
    <h2>Welcome</h2>
    <br />
    <Link className="btn" to="/user/add">
      Create new account
    </Link>
  </div>
);

export default Welcome;
