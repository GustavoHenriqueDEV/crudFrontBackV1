import { useState, useEffect } from "react";
import { getUsuarioById, updateUsuario } from "../service/usuarioService";
import { useParams, useNavigate } from "react-router-dom";

const EditUser = () => {
  const { id } = useParams(); // Captura o ID da URL para saber se é edição
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState({
    nome: '',
    login: '',
    senha: '',
    email: '',
    idade: ''
  });

  const [mensagem, setMensagem] = useState('');

  useEffect(() => {
    if (id) {
      // Se tiver ID, busca os dados do usuário para editar
      getUsuarioById(id)
        .then(response => setUsuario(response.data))
        .catch(error => setMensagem(`Erro ao carregar usuário: ${error.response?.data || error.message}`));
    }
  }, [id]);

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
      await updateUsuario(id, usuarioData);
      setMensagem('Usuário atualizado com sucesso!');
      setTimeout(() => navigate('/'), 2000); // Redireciona após 2s
    } catch (error) {
      setMensagem(`Erro ao salvar usuário: ${error.response?.data || error.message}`);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">
          {id ? 'Editar Usuário' : 'Criar Novo Usuário'}
        </h2>
        {mensagem && <p className="text-center text-red-500 mb-4">{mensagem}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Nome</label>
            <input
              name="nome"
              type="text"
              value={usuario.nome}
              onChange={handleChange}
              placeholder="Digite o nome"
              className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Login</label>
            <input
              name="login"
              type="text"
              value={usuario.login}
              onChange={handleChange}
              placeholder="Digite o login"
              className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">E-mail</label>
            <input
              name="email"
              type="email"
              value={usuario.email}
              onChange={handleChange}
              placeholder="Digite o e-mail"
              className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Senha</label>
            <input
              name="senha"
              type="password"
              value={usuario.senha}
              onChange={handleChange}
              placeholder="Digite a senha"
              className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Idade</label>
            <input
              name="idade"
              type="number"
              value={usuario.idade}
              onChange={handleChange}
              placeholder="Digite a idade"
              className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg transition duration-300"
          >
            {id ? 'Atualizar' : 'Criar'} Usuário
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
