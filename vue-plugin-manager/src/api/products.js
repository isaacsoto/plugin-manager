import axios from 'axios';

const DEFAULT_PAGE_SIZE = 1000;

const API_BASE_URL = process.env.NODE_ENV === 'production'
  ? process.env.VUE_APP_API_URL // Production API URL
  : '/api'; // Development API URL

const PRODUCTS_URL = API_BASE_URL + '/products';

export const fetchProducts = async (pageSize = DEFAULT_PAGE_SIZE) => {
  const params = new URLSearchParams();
  params.append('pageSize', pageSize);

  const apiUrl = `${PRODUCTS_URL}?${params.toString()}`;
  const response = await axios.get(apiUrl);
  return response.data;
};