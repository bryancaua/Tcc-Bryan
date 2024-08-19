import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoHotDog from '../../assets/logo.svg';
import Cachorro from '../../assets/cachorro.svg';

export default function Introducao() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <main className="bg-bege min-h-screen">
      <div>
        <header className="bg-bege-madeira flex flex-col md:flex-row items-center justify-between p-4 relative">
          {/* Logo e Título à esquerda */}
          <div className="flex items-center justify-start w-full md:w-auto">
            <img 
              src={LogoHotDog} 
              alt="um cachorrinho dentro de uma casinha" 
              className="w-16 mt-[-16px]"
            />
            <span className="text-4xl text-marrom mx-2">|</span>
            <h1 className="text-3xl text-marrom-claro font-sans font-bold">HotDog</h1>
          </div>

          {/* Botão de Menu Hambúrguer à direita */}
          <button 
            className="md:hidden text-marrom-claro absolute right-4 top-4" 
            onClick={toggleMenu}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>

          {/* Menu normal para telas maiores */}
          <nav className="hidden md:flex ml-4 md:ml-0 md:mr-32">
            <ul className="flex space-x-6 md:space-x-12 text-marrom-claro">
<<<<<<< HEAD
              <li><Link className="opacity-75 text-marrom font-sans2 font-bold" to="/">Introdução</Link></li>
              <li><Link className="hover:opacity-75 text-marrom font-sans2 font-bold" to="/sobre-nos">Sobre nós</Link></li>
              <li><Link className="hover:opacity-75 text-marrom font-sans2 font-bold" to="/sobre-o-projeto">Sobre o projeto</Link></li>
              <li><Link className="hover:opacity-75 text-marrom font-sans2 font-bold" to="/materiais">Materiais</Link></li>
              <li><Link className="hover:opacity-75 text-marrom font-sans2 font-bold" to="/referencias">Referências</Link></li>
=======
              <li><Link className="hover:opacity-75 text-marrom font-sans2 font-bold" to="/">Introdução</Link></li>
              <li><Link className="hover:opacity-75 text-marrom font-sans2 font-bold" to="/sobre-nos">Sobre nós</Link></li>
              <li><Link className="hover:opacity-75 text-marrom font-sans2 font-bold" to="/sobre-o-projeto">Sobre o projeto</Link></li>
              <li><Link className="opacity-75 text-marrom font-sans2 font-bold" to="/materiais">Materiais</Link></li>
>>>>>>> cc50e638e11a0099fba0a9bde5101997fb972c6a
            </ul>
          </nav>

          {/* Menu lateral */}
          <nav className={`fixed inset-0 z-40 bg-bege-madeira transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
            <div className="p-4 flex justify-between items-center">
              <h2 className="text-2xl text-marrom-claro font-bold">Menu</h2>
              <button 
                className="text-marrom-claro" 
                onClick={toggleMenu}
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <ul className="flex flex-col space-y-6 text-marrom-claro p-4">
<<<<<<< HEAD
              <li><Link className="opacity-75 text-marrom font-sans2 font-bold" to="/" onClick={toggleMenu}>Introdução</Link></li>
              <li><Link className="hover:opacity-75 text-marrom font-sans2 font-bold" to="/sobre-nos" onClick={toggleMenu}>Sobre nós</Link></li>
              <li><Link className="hover:opacity-75 text-marrom font-sans2 font-bold" to="/sobre-o-projeto" onClick={toggleMenu}>Sobre o projeto</Link></li>
              <li><Link className="hover:opacity-75 text-marrom font-sans2 font-bold" to="/materiais" onClick={toggleMenu}>Materiais</Link></li>
              <li><Link className="hover:opacity-75 text-marrom font-sans2 font-bold" to="/referencias">Referências</Link></li>
=======
              <li><Link className="hover:opacity-75 text-marrom font-sans2 font-bold" to="/" onClick={toggleMenu}>Introdução</Link></li>
              <li><Link className="hover:opacity-75 text-marrom font-sans2 font-bold" to="/sobre-nos" onClick={toggleMenu}>Sobre nós</Link></li>
              <li><Link className="hover:opacity-75 text-marrom font-sans2 font-bold" to="/sobre-o-projeto" onClick={toggleMenu}>Sobre o projeto</Link></li>
              <li><Link className="hover:opacity-75 text-marrom font-sans2 font-bold" to="/materiais" onClick={toggleMenu}>Materiais</Link></li>
>>>>>>> cc50e638e11a0099fba0a9bde5101997fb972c6a
            </ul>
          </nav>
        </header>
      </div>

      <div className="flex flex-col items-center mt-16 px-4 md:px-8">
        <h1 className="font-sans font-bold text-6xl text-marrom-claro mb-4 md:mb-0 md:text-6xl text-4xl md:mr-[60%]">
          Introdução
        </h1>

        <h2 className="font-sans font-medium text-base md:text-lg text-black max-w-2xl text-center md:text-left mt-4 md:mt-10 md:mr-[42%]">
          A utilização de tecnologias como o Arduíno possibilita a criação de soluções inovadoras e personalizadas para atender às necessidades específicas dos animais de estimação. Neste projeto, o Arduíno será empregado para monitorar a temperatura interna da casinha e acionar um sistema de aquecimento quando necessário, garantindo um ambiente térmico adequado em diferentes condições climáticas.
          <br /><br />
          Além disso, a casinha de cachorro com aquecedor baseada em Arduíno não apenas visa fornecer conforto térmico aos animais, mas também busca promover a eficiência energética e a sustentabilidade. A automação do sistema de aquecimento permite um controle preciso da energia consumida, reduzindo desperdícios e impactos ambientais.
          <br /><br />
          Ao longo deste trabalho, serão abordados os fundamentos teóricos relacionados ao bem-estar animal, sistemas de aquecimento e controle por Arduíno, bem como o processo de concepção, desenvolvimento e teste da casinha de cachorro. Espera-se que este projeto contribua não apenas para o avanço da tecnologia aplicada ao cuidado com animais de estimação, mas também para a conscientização sobre a importância do conforto térmico na vida dos nossos amigos peludos.
        </h2>
      </div>

      <img 
        src={Cachorro} 
        alt="Imagem de um cachorro" 
        className="relative mt-8 md:mt-0 md:absolute md:right-16 md:bottom-16 lg:right-32 lg:bottom-32 lg:max-w-md"
      />
    </main>
  );
}
