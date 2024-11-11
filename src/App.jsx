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
import Referencias from './components/Referencias/referencias'
import Jogo from './components/Jogo/Jogo'
import Projeto from './components/ProjetoV/Video'

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
        <Route path="/referencias" element={<Referencias />} /> 
        <Route path="/jogo" element={<Jogo />} />
        <Route path="/video-do-projeto" element={<Projeto />}/>
      </Routes>
    </Router>
  );
}
