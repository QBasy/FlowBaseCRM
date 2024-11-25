import axios from 'axios';

const API_URL = 'http://localhost:3001/api'; // Адрес вашего Fastify сервера

export const fetchCustomers = async () => {
    const response = await axios.get(`${API_URL}/customers`);
    return response.data;
};

export const fetchOrders = async () => {
    const response = await axios.get(`${API_URL}/orders`);
    return response.data;
};
