import axios from 'axios';

export const fetchProduct = async (id) => {
  try {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product:', error);
    return null;
  }
};
