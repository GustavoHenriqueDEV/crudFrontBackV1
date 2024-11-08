import axios from 'axios';

const API_URL = 'http://localhost:8080/usuarios'; // Altere para a URL do seu backend

// Função para buscar todos os usuários
export const getUsuarios = () => axios.get(`${API_URL}`);

// Função para buscar um usuário por ID
export const getUsuarioById = (id) => axios.get(`${API_URL}/${id}`);

// Função para criar um novo usuário
export const createUsuario = (usuario) => axios.post(`${API_URL}`, usuario);

// Função para atualizar um usuário
export const updateUsuario = (id, usuario) => axios.put(`${API_URL}/${id}`, usuario);

// Função para deletar um usuário
export const deleteUsuario = (id) => axios.delete(`${API_URL}/${id}`);
