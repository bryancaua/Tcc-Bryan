import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pagprincipal from './components/Pagina principal/Pagprincipal';
import Introducao from "./components/Introducao/Introducao";
import SobreNos from './components/Sobre nós/sobre-nos';
import Sobre from './components/Sobre o Projeto/projeto';
import Como from './components/Como/Como'
import PQ from './components/Porque/Porque'
import Grafic from './components/Grafico/Grafico'
import Materiais from './components/Materiais/Materiais'
<<<<<<< HEAD
import Referencias from './components/Referencias/referencias'
=======
>>>>>>> cc50e638e11a0099fba0a9bde5101997fb972c6a

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Pagprincipal />} />
        <Route path="/introducao" element={<Introducao />} />
        <Route path="/sobre-nos" element={<SobreNos />} />
        <Route path="/sobre-o-projeto" element={<Sobre />} />
        <Route path="/Como" element={<Como />} />
        <Route path="/Porque-Comprar" element={<PQ />} />
        <Route path="/Porque-Comprar-uma-cama" element={<Grafic />} />
        <Route path="/materiais" element={<Materiais />} /> 
<<<<<<< HEAD
        <Route path="/referencias" element={<Referencias />} /> 
=======
>>>>>>> cc50e638e11a0099fba0a9bde5101997fb972c6a
      </Routes>
    </Router>
  );
}
