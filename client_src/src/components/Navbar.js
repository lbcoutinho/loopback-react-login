import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../services/LoginServices';

class Navbar extends Component{
  constructor() {
    super();
    this.state = {
      token: localStorage.getItem('access_token')
    }
  }

  render(){
    let button; 
    if (this.state.token) {
      button = <li><Link to="/" onClick={logout}>Logout</Link></li>
    } else {
      button = <li><Link to="/login">Login</Link></li>
    }
    
    return (
      <div>
        <nav className="blue darken-3">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo center">Basic Bank</a>
            <a data-activates="main-menu" className="button-collapse show-on-large">
              <i className="fa fa-bars"></i>
            </a>
            <ul className="right">
              {button}
            </ul>
            <ul className="side-nav" id="main-menu">
              <li><Link to="/"><i className="fa fa-users"></i> Meetups</Link></li>  
              <li><Link to="/meetups/add"><i className="fa fa-plus"></i> Add Meetup</Link></li>  
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar;