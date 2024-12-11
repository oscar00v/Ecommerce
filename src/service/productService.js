import axios from 'axios';

const BASE_URL = 'https://ecommerce-json-jwt.onrender.com';

const addProductService = (product) => {
  const token = localStorage.getItem('token');
  return axios.post(`${BASE_URL}/products`, product, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export { addProductService };
