import React from 'react';
import axios from 'axios';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      user: ''
    };
  }

  async componentWillMount() {
    try {
      // Get logged user
      const user = await axios.request({
        method: 'get',
        url: `http://localhost:3000/api/Users/${localStorage.getItem(
          'user_id'
        )}?access_token=${localStorage.getItem('access_token')}`
      });
      this.setState({ user: user.data });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    return (
      <div className="center">
        <h2>Hello, {this.state.user.name}</h2>
      </div>
    );
  }
}

export default Home;
