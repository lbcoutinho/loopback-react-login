import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../services/AuthServices';

class Navbar extends React.Component {

  render(){
    const options = [
      {path:'/home',icon:'fa-home',title:'Home'}
    ]

    let button;
    let sideBarElements;
    if (this.props.isAuthed) {
      button = <li><Link to="/" onClick={logout}>Logout</Link></li>;
      sideBarElements = options.map(opt => <li key={opt.title}><Link to={opt.path}><i className={`fa ${opt.icon}`}></i> {opt.title}</Link></li>);
    } else {
      button = <li><Link to="/login">Login</Link></li>
    }
    
    return (
      <div>
        <nav className="blue darken-3">
          <div className="nav-wrapper">
            <a href={this.props.isAuthed ? "/home" : "/"} className="brand-logo center">LoopBack & React Login</a>
            <ul className="right">
              {button}
            </ul>

            <a data-activates="main-menu" className="button-collapse show-on-large">
              <i className="fa fa-bars"></i>
            </a>
            <ul className="side-nav" id="main-menu">
              {sideBarElements}
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar;