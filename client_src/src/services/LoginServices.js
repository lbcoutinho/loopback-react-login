import axios from 'axios';

export function login(credentials) {
  // Send POST request to get access token
  axios
    .request({
      method: 'post',
      url: 'http://localhost:3000/api/Users/login',
      data: credentials
    })
    .then(response => {
      localStorage.setItem('access_token', response.data.id);
    })
    .catch(err => {
      console.error(err);
      alert('Credenciais inválidas.');
    });
}
