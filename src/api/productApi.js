import axios from "axios";

const baseURL = "http://localhost:5000/products";

export const getAllProducts = () => axios.get(baseURL);

export const getProductById = (id) => axios.get(`${baseURL}/${id}`);

export const addNewProduct = (product) => axios.post(baseURL, product);

export const updateProductById = (product, id) =>
  axios.put(`${baseURL}/${id}`, product);

export const deleteProductById = (id) => axios.delete(`${baseURL}/${id}`);
