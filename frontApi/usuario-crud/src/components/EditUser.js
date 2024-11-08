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
                <div>
                    <label>Nome:</label>
                    <input
                        type="text"
                        name="nome"
                        value={usuario.nome}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Login:</label>
                    <input
                        type="text"
                        name="login"
                        value={usuario.login}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Senha:</label>
                    <input
                        type="password"
                        name="senha"
                        value={usuario.senha}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={usuario.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Idade:</label>
                    <input
                        type="number"
                        name="idade"
                        value={usuario.idade}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">{id ? 'Atualizar Usuário' : 'Criar Usuário'}</button>
            </form>
        </div>
    );
};

export default EditUser;