import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Welcome from '../components/Welcome';
import Login from '../components/user/Login';
import Home from '../components/Home';
import Meetups from '../components/Meetups';
import AddUser from '../components/user/AddUser';
import MeetupDetails from '../components/MeetupDetails';
import AddMeetup from '../components/AddMeetup';
import EditMeetup from '../components/EditMeetup';

class Main extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/login" render={(props) => <Login {...props} setAuth={this.props.setAuth} />} />
          <Route exact path="/user/add" render={(props) => <AddUser {...props} setAuth={this.props.setAuth} />} />

          <Route exact path="/home" component={Home} />

          <Route exact path="/meetups" component={Meetups} />
          <Route exact path="/meetups/add" component={AddMeetup} />
          <Route exact path="/meetups/edit/:id" component={EditMeetup} />
          <Route exact path="/meetups/:id" component={MeetupDetails} />
        </Switch>
      </main>
    );
  }
}

export default Main;
