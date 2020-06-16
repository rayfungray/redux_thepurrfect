import jwt from 'jsonwebtoken';
import axios from 'axios';

function saveToken(token) {
  localStorage.setItem('token', token);
  const { user } = jwt.decode(token);
  return {
    type: 'AUTHENTICATE',
    payload: {
      token,
      user,
    },
  };
}

export function signup(body) {
  return async function (dispatch) {
    const url = 'https://wta-cats.herokuapp.com/auth/signup';
    try {
      const { data } = await axios.post(url, body);
      const { token } = data;
      dispatch(saveToken(token));
    } catch (err) {
      console.error(err);
    }
  };
}

export function logout() {
  localStorage.removeItem('token');
  return {
    type: 'LOGOUT',
  };
}

export function login(body) {
  return async function (dispatch) {
    const url = 'https://wta-cats.herokuapp.com/auth/login';
    try {
      const { data } = await axios.post(url, body);
      const { token } = data;
      dispatch(saveToken(token));
    } catch (err) {
      console.error(err);
    }
  };
}
