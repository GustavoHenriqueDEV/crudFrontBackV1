import { useState } from "react";
import { getUsuarioById, createUsuario, updateUsuario } from "../service/usuarioService";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect
    
 } from "react";


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
            getUsuarioById(id).then(response => {
                setUsuario(response.data);
            }).catch(error => {
                setMensagem(`Erro ao carregar usuário: ${error.response?.data || error.message}`);

            });
        }
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUsuario(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const usuarioData = { ...usuario, idade: parseInt(usuario.idade, 10) };
            if (id) {
                // Atualiza usuário existente
                await updateUsuario(id, usuarioData);
                setMensagem('Usuário atualizado com sucesso!');
            } else {
                // Cria novo usuário
                await createUsuario(usuarioData);
                setMensagem('Usuário criado com sucesso!');
            }
            navigate('/'); // Redireciona para a lista de usuários
        } catch (error) {
        setMensagem(`Erro ao salvar usuário: ${error.response?.data || error.message}`);
    }
    };
    return (
        <div>
            <h2>{id ? 'Editar Usuário' : 'Criar Novo Usuário'}</h2>
            {mensagem && <p>{mensagem}</p>}
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
    );
};

export default EditUser;