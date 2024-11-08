import React, { useEffect, useState } from 'react';
import { getUsuarios, deleteUsuario } from '../service/usuarioService';
import { useNavigate } from 'react-router-dom';


const UsuariosList = () => {
  const [usuarios, setUsuarios] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadUsuarios();
  }, []);

  const loadUsuarios = async () => {
    try {
      const response = await getUsuarios();
      setUsuarios(response.data);
    } catch (error) {
      console.error('Erro ao carregar usuários:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteUsuario(id);
      alert('Usuário deletado com sucesso');
      loadUsuarios();
    } catch (error) {
      console.error('Erro ao deletar usuário:', error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="bg-white rounded-xl shadow-lg p-8 w-3/4 max-w-3xl">
        <h2 className="text-2xl font-semibold text-center mb-6">Lista de Usuários</h2>
        <div className="flex justify-end mb-4">
          <button
            onClick={() => navigate('/create')}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg shadow hover:opacity-90"
          >
            Adicionar Usuário
          </button>
        </div>
        <ul className="space-y-4">
          {usuarios.map((usuario) => (
            <li
              key={usuario.idusuario}
              className="border border-gray-300 rounded-lg p-4 flex justify-between items-center"
            >
              <div>
                <p className="font-medium text-gray-800">{usuario.nome}</p>
                <p className="text-sm text-gray-600">{usuario.email}</p>
                <p className="text-sm text-gray-600">{usuario.login}</p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => navigate(`/edit/${usuario.idusuario}`)}
                  className="text-white bg-blue-500 px-3 py-1 rounded-lg hover:bg-blue-600"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDelete(usuario.idusuario)}
                  className="text-white bg-red-500 px-3 py-1 rounded-lg hover:bg-red-600"
                >
                  Deletar
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UsuariosList;
