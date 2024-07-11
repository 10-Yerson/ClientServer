// src/services/taskService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Cambia esto si tu backend está en otro puerto o dominio

export const getAllUser = async () => {
    try {
        const response = await axios.get(`${API_URL}/user`);
        return response.data;
    } catch (error) {
        console.error('Error fetching User:', error);
        throw error;
    }
};

export const getUserById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/tasks/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching User:', error);
        throw error;
    }
};

export const createUser = async (user) => {
    try {
        const response = await axios.post(`${API_URL}/user`, user);
        return response.data;
    } catch (error) {
        console.error('Error creating User:', error);
        throw error;
    }
};

export const updateUser = async (id, user) => {
    try {
        const response = await axios.put(`${API_URL}/user/${id}`, user);
        return response.data;
    } catch (error) {
        console.error('Error updating User:', error);
        throw error;
    }
};

// export const deleteTask = async (id) => {
//     try {
//         const response = await axios.delete(`${API_URL}/tasks/${id}`);
//         return response.data;
//     } catch (error) {
//         console.error('Error deleting task:', error);
//         throw error;
//     }
// };
