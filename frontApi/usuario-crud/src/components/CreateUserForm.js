import React, { useState } from 'react';
import { createUsuario } from '../service/usuarioService';
import { useNavigate } from 'react-router-dom';

const CreateUserForm = () => {
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState({
    nome: '',
    login: '',
    senha: '',
    email: '',
    idade: ''
  });

  const [mensagem, setMensagem] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsuario((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const usuarioData = { ...usuario, idade: parseInt(usuario.idade, 10) };
      await createUsuario(usuarioData);
      setMensagem('Usuário criado com sucesso!');
      setUsuario({
        nome: '',
        login: '',
        senha: '',
        email: '',
        idade: ''
      });
      navigate('/');
    } catch (error) {
      setMensagem(`Erro ao criar usuário: ${error.response?.data || error.message}`);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="bg-white rounded-xl shadow-lg p-8 w-96">
        <h2 className="text-3xl font-semibold mb-6 text-center">Create an User</h2>
        {mensagem && <p className="mb-4 text-center text-green-500">{mensagem}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Nome</label>
            <input
              name="nome"
              type="text"
              value={usuario.nome}
              onChange={handleChange}
              placeholder="Type here"
              className="w-full border rounded px-4 py-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Login</label>
            <input
              name="login"
              type="text"
              value={usuario.login}
              onChange={handleChange}
              placeholder="Type here"
              className="w-full border rounded px-4 py-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">E-mail</label>
            <input
              name="email"
              type="email"
              value={usuario.email}
              onChange={handleChange}
              placeholder="Type here"
              className="w-full border rounded px-4 py-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              name="senha"
              type="password"
              value={usuario.senha}
              onChange={handleChange}
              placeholder="********"
              className="w-full border rounded px-4 py-2"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Idade</label>
            <input
              name="idade"
              type="number"
              value={usuario.idade}
              onChange={handleChange}
              placeholder="Enter your age"
              className="w-full border rounded px-4 py-2"
            />
          </div>
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg w-full"
          >
            Create →
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateUserForm;
