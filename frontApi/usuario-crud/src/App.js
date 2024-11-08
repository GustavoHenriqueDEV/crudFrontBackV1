import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UsuarioList from './components/UsuarioList';
import CreateUserForm from './components/CreateUserForm'
import EditUser from './components/EditUser';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UsuarioList />} />
        <Route path="/create" element={<CreateUserForm />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </Router>
  );
}

export default App;
