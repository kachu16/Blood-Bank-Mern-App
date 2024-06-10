import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/pages/auth/Login';
import Register from './components/pages/auth/Register';
import HomePage from './components/pages/HomePage';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </>
  )
}

export default App