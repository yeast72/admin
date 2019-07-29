import axios from "axios";
// const PRODUCT_API = '/api/products'
const PRODUCT_API = "http://localhost:3000/api/products";
const USER_API = "http://localhost:3000/api/users";

const getAccessToken = () => {
  return localStorage.getItem("access_token");
};

export const getCurrentUser = async () => {
  const token = getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return await axios.get(`${USER_API}/me`);
};

export const login = async (username, password) => {
  return await axios.post(`${USER_API}/login`, { username, password });
};

export const signup = async user => {
  return await axios.post(`${USER_API}/signup`, { ...user });
};

export const createProduct = async product => {
  return await axios.post(`${PRODUCT_API}`, { ...product });
};

export const getAllProducts = async () => {
  return await axios.get(`${PRODUCT_API}`);
};

export const updateProduct = async (id, product) => {
  const token = getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return await axios.put(`${PRODUCT_API}/${id}`, product);
};

export const deleteProduct = async id => {
  const token = getAccessToken();
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return await axios.delete(`${PRODUCT_API}/${id}`);
};
