import axios from "axios";

const baseURL = "http://localhost:5000/cart";

export const fetchCartItems = () => axios.get(baseURL);

export const addItemToCartApi = (item) => axios.post(baseURL, item);

export const removeItemFromCartApi = (id) => axios.delete(`${baseURL}/${id}`);
