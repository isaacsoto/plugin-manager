import axios from 'axios';

const DEFAULT_PAGE_SIZE = 1000;

// development
const BASE_URL = '/api';

// production
//const BASE_URL = process.env.VUE_APP_API_URL;

const PRODUCTS_URL = BASE_URL + '/products';

export const fetchProducts = async (pageSize = DEFAULT_PAGE_SIZE) => {
  const params = new URLSearchParams();
  params.append('pageSize', pageSize);

  const apiUrl = `${PRODUCTS_URL}?${params.toString()}`;
  const response = await axios.get(apiUrl);
  return response.data;
};