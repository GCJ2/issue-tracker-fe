import axios from 'axios'
import './axiosWithAuth';
import {axiosWithAuth} from "./axiosWithAuth";
import {baseURL} from "./config";

const auth = {
  register(user) {
    return axios
      .post(`${baseURL}/auth/register`, user)
      .then(res => {
        console.log(res);
        localStorage.setItem('token', res.data.token)
      }).catch(error => {
        console.log(error)
      })
  }
};

export default auth