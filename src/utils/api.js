import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000', // Adjust the base URL as necessary
});

export const saveTree = (username, treeData) => {
  return api.post('/trees', { username, treeData });
};

export const getTree = (username) => {
  return api.get(`/trees/${username}`);
};
