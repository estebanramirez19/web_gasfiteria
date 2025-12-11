import React from 'react';

import { Route, Routes, BrowserRouter } from 'react-router-dom';

import './css/App.css';
import Layout from './layout.tsx';
import HomePage from './pages/homePage.tsx';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />}/>/* Ruta por defecto pero aqui agregaremos todo */


          </Route>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
