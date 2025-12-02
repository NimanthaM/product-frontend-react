import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

/**
 * Fetch all products from the API
 * @returns {Promise<Array>} Array of product objects
 */
export const getAllProducts = async () => {
    try {
        const response = await api.get('/products');
        // Transform image URLs to use full backend URL
        const products = response.data.map(product => ({
            ...product,
            image_url: product.image_url.startsWith('http') 
                ? product.image_url 
                : `http://localhost:8000${product.image_url}`
        }));
        return products;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

/**
 * Fetch a single product by ID
 * @param {number} id - Product ID
 * @returns {Promise<Object>} Product object
 */
export const getProductById = async (id) => {
    try {
        const response = await api.get(`/products/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching product ${id}:`, error);
        throw error;
    }
};

export default api;
