import React from 'react';
import './App.css';
import Main from './Main';
import Navbar from './Navbar';

class App extends React.Component {
  constructor() {
    super();
    this.state = { isAuthed: localStorage.getItem('access_token') };
  }

  setAuth = auth => {
    console.log('setAuth', auth);
    this.setState({ isAuthed: auth });
  };

  render() {
    return (
      <div>
        <Navbar isAuthed={this.state.isAuthed} />
        <div className="container">
          <Main setAuth={this.setAuth} isAuthed={this.state.isAuthed} />
        </div>
      </div>
    );
  }
}

export default App;
