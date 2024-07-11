// src/services/taskService.js
import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Cambia esto si tu backend está en otro puerto o dominio

export const getAllTasks = async () => {
    try {
        const response = await axios.get(`${API_URL}/tasks`);
        return response.data;
    } catch (error) {
        console.error('Error fetching tasks:', error);
        throw error;
    }
};

export const getTask = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/tasks/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching task:', error);
        throw error;
    }
};

export const createTask = async (task) => {
    try {
        const response = await axios.post(`${API_URL}/tasks`, task);
        return response.data;
    } catch (error) {
        console.error('Error creating task:', error);
        throw error;
    }
};

export const updateTask = async (id, task) => {
    try {
        const response = await axios.put(`${API_URL}/tasks/${id}`, task);
        return response.data;
    } catch (error) {
        console.error('Error updating task:', error);
        throw error;
    }
};

export const deleteTask = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/tasks/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting task:', error);
        throw error;
    }
};
