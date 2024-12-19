# crudFrontBackV1

Bem-vindo ao **crudFrontBackV1**, uma aplicação web que implementa operações CRUD (Criar, Ler, Atualizar e Deletar) com um backend desenvolvido em Java utilizando Spring Boot e um frontend em React.js.

## 🚀 Funcionalidades

- **Operações CRUD**: Permite criar, visualizar, editar e excluir registros.
- **Integração Frontend e Backend**: Comunicação eficiente entre o frontend em React.js e o backend em Spring Boot.
- **Interface Intuitiva**: Design simples e fácil de usar, proporcionando uma ótima experiência ao usuário.

## 📂 Estrutura do Projeto

crudFrontBackV1/ ├── BackApi/ │ ├── src/ │ │ ├── main/ │ │ │ ├── java/ │ │ │ │ └── com/ │ │ │ │ └── example/ │ │ │ │ └── crud/ │ │ │ └── resources/ │ │ │ └── application.properties │ └── pom.xml ├── frontApi/ │ ├── public/ │ ├── src/ │ │ ├── components/ │ │ ├── App.js │ │ └── index.js │ ├── package.json │ └── package-lock.json └── README.md


- **BackApi/**: Diretório do backend desenvolvido em Java com Spring Boot.
  - **src/**: Código-fonte do backend.
    - **main/**: Contém o código principal da aplicação.
      - **java/**: Código Java organizado por pacotes.
      - **resources/**: Arquivos de configuração, incluindo `application.properties`.
  - **pom.xml**: Arquivo de configuração do Maven com as dependências do projeto.
- **frontApi/**: Diretório do frontend desenvolvido em React.js.
  - **public/**: Arquivos estáticos acessíveis publicamente.
  - **src/**: Código-fonte do frontend.
    - **components/**: Componentes React reutilizáveis.
    - **App.js**: Componente raiz da aplicação React.
    - **index.js**: Ponto de entrada da aplicação React.
  - **package.json**: Contém as dependências e scripts do projeto frontend.

## 🛠️ Configuração do Projeto

Siga os passos abaixo para configurar e executar o projeto localmente:

### 1. Pré-requisitos

- **Java 11+**: Certifique-se de ter o [Java Development Kit (JDK) 11 ou superior](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html) instalado.
- **Maven 3.6+**: [Apache Maven](https://maven.apache.org/download.cgi) para gerenciamento de dependências e construção do backend.
- **Node.js 14+**: Certifique-se de ter o [Node.js](https://nodejs.org/) instalado para o frontend.

### 2. Clone o Repositório

```bash
git clone https://github.com/GustavoHenriqueDEV/crudFrontBackV1.git
cd crudFrontBackV1
3. Configuração do Backend
Navegue até o diretório do backend:

bash
Copiar código
cd BackApi
Configure as credenciais e detalhes de conexão no arquivo src/main/resources/application.properties.

Compile e execute o backend:

bash
Copiar código
# Compile o projeto
mvn clean install

# Execute a aplicação
mvn spring-boot:run
O backend estará disponível em http://localhost:8080.

4. Configuração do Frontend
Navegue até o diretório do frontend:

bash
Copiar código
cd ../frontApi
Instale as dependências do projeto:

bash
Copiar código
npm install
Inicie o servidor de desenvolvimento:

bash
Copiar código
npm start
O frontend estará disponível em http://localhost:3000.

✏️ Personalização
Para personalizar as configurações do backend, edite o arquivo application.properties conforme necessário. Para o frontend, ajuste as configurações nos arquivos App.js e index.js. Consulte a Documentação do Spring Boot e a Documentação do React para mais detalhes.

🤝 Contribuição
Contribuições são bem-vindas! Siga as etapas abaixo para contribuir:

bash
Copiar código
# 1. Faça um fork do projeto.
git fork

# 2. Crie um branch para sua feature.
git checkout -b minha-feature

# 3. Faça commit das alterações.
git commit -m 'Adicionei minha feature'

# 4. Envie para o branch.
git push origin minha-feature

# 5. Abra um Pull Request.
# Após a revisão, sua contribuição poderá ser incluída no projeto.
📄 Licença
Este projeto está licenciado sob a licença MIT. Sinta-se à vontade para usá-lo e modificá-lo conforme necessário.

📞 Contato
Para mais informações ou suporte, visite o repositório do projeto no GitHub: crudFrontBackV1.
