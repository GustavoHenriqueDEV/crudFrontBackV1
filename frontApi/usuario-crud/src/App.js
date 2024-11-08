import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UsuarioList from './components/UsuarioList';
import CreateUserForm from './components/CreateUserForm'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UsuarioList />} />
        <Route path="/create" element={<CreateUserForm />} />
      </Routes>
    </Router>
  );
}

export default App;
