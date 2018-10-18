import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Welcome from './Welcome';
import Login from './Login';
import Meetups from './Meetups';
import AddUser from './AddUser';
import MeetupDetails from './MeetupDetails';
import AddMeetup from './AddMeetup';
import EditMeetup from './EditMeetup';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Welcome} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/meetups' component={Meetups} />
      <Route exact path='/user/add' component={AddUser} />
      <Route exact path='/meetups/add' component={AddMeetup} />
      <Route exact path='/meetups/edit/:id' component={EditMeetup} />
      <Route exact path='/meetups/:id' component={MeetupDetails} />
    </Switch>
  </main>
)

export default Main;