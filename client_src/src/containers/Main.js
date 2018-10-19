import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Welcome from '../components/Welcome';
import Login from '../components/user/Login';
import Home from '../components/Home';
import AddUser from '../components/user/AddUser';

class Main extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/login" render={(props) => <Login {...props} setAuth={this.props.setAuth} />} />
          <Route exact path="/user/add" render={(props) => <AddUser {...props} setAuth={this.props.setAuth} />} />

          <Route exact path="/home" component={Home} />
        </Switch>
      </main>
    );
  }
}

export default Main;
