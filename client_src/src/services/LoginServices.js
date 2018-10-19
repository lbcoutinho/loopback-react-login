import axios from 'axios';

export async function login(credentials, history) {
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
    // Send use back to homepage
    history.push('/home');
  } catch (err) {
    console.error(err);
    alert('Credenciais inválidas.');
  }
}

export function logout() {
  // TODO complete calling logout
  // localStorage.removeItem('access_token');
  console.log('logout');
}
