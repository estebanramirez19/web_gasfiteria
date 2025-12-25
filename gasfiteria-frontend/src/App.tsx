import React from 'react';

import { Route, Routes, BrowserRouter } from 'react-router-dom';

import './css/App.css';
import Layout from './layout.tsx';
import HomePage from './pages/homePage.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import Agenda from './pages/Agenda.tsx';
import Contacto from './pages/Contacto.tsx';
import PoliticaPrivacidad from './pages/PoliticaPrivacidad.tsx';
import Productos from './pages/Productos.tsx';
import Servicios from './pages/Servicios.tsx';
import Registro from './pages/Registro.tsx';
import SobreNosotros from './pages/SobreNosotros.tsx';


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />}/>
            <Route path='Agenda' element={<Agenda />}/>
            <Route path='Contacto' element={<Contacto />}/>
            <Route path='PoliticaPrivacidad' element={<PoliticaPrivacidad />}/>
            <Route path='Productos' element={<Productos />}/>
            <Route path='Servicios' element={<Servicios />}/>
            <Route path='Registro' element={<Registro />}/>
            <Route path='SobreNosotros' element={<SobreNosotros />}/>
          </Route>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
