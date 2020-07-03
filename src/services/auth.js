import axios from "axios";

const API = "https://jsonplaceholder.typicode.com";

export const signUp = (body) => {
  return axios.post(`${API}/sign-up`, body);
};

export const getUsers = () => {
  return axios.get(`${API}/users`);
};
