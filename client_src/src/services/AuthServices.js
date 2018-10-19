import axios from 'axios';

export async function login(credentials, setAuth, redirectTo) {
  try {
    // Send POST request to get access token
    const response = await axios.request({
      method: 'post',
      url: 'http://localhost:3000/api/Users/login',
      data: credentials
    });

    // Add auth token to local storage
    localStorage.setItem('access_token', response.data.id);
    localStorage.setItem('user_id', response.data.userId);
    setAuth(true);
    // Send use back to homepage
    redirectTo('/home');
  } catch (err) {
    console.error(err);
    alert('Credenciais inválidas.');
  }
}

export function logout(setAuth, redirectTo) {
  axios.request({
    method: 'post',
    url: 'http://localhost:3000/api/Users/logout?access_token=' + localStorage.getItem('access_token'),
  });

  localStorage.removeItem('access_token');
  localStorage.removeItem('user_id');
  setAuth(false);
  redirectTo('/');
}