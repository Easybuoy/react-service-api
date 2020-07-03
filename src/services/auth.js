import axios from "axios";

export const signUp = (body) => {
  const API = "https://jsonplaceholder.typicode.com/";
  return fetch({
    method: "POST",
    url: `${API}/sign-up`,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
};

export const getUsers = () => {
  const API = "https://jsonplaceholder.typicode.com";
  return axios.get(`${API}/users`);
};
