import axios from 'axios';

const apiUrl = '/api/products?pageSize=1000';

export const fetchProducts = async () => {
  const response = await axios.get(apiUrl);
  return response.data;
};