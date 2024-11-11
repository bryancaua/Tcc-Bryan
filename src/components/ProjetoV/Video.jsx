import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoHotDog from '../../assets/logo.svg';

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
              <li><Link className="hover:opacity-75 text-marrom font-sans2 font-bold" to="/">Introdução</Link></li>
              <li><Link className="hover:opacity-75 text-marrom font-sans2 font-bold" to="/sobre-nos">Sobre nós</Link></li>
              <li><Link className="hover:opacity-75 text-marrom font-sans2 font-bold" to="/sobre-o-projeto">Sobre o projeto</Link></li>
              <li><Link className="hover:opacity-75 text-marrom font-sans2 font-bold" to="/materiais">Materiais</Link></li>
              <li><Link className="hover:opacity-75 text-marrom font-sans2 font-bold" to="/jogo">Jogo</Link></li>
              <li><Link className="opacity-75 text-marrom font-sans2 font-bold" to="/video-do-projeto">Projeto</Link></li>
              <li><Link className="hover:opacity-75 text-marrom font-sans2 font-bold" to="/referencias">Referências</Link></li>
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
              <li><Link className="hover:opacity-75 text-marrom font-sans2 font-bold" to="/">Introdução</Link></li>
              <li><Link className="hover:opacity-75 text-marrom font-sans2 font-bold" to="/sobre-nos">Sobre nós</Link></li>
              <li><Link className="hover:opacity-75 text-marrom font-sans2 font-bold" to="/sobre-o-projeto">Sobre o projeto</Link></li>
              <li><Link className="hover:opacity-75 text-marrom font-sans2 font-bold" to="/materiais">Materiais</Link></li>
              <li><Link className="hover:opacity-75 text-marrom font-sans2 font-bold" to="/jogo">Jogo</Link></li>
              <li><Link className="opacity-75 text-marrom font-sans2 font-bold" to="/video-do-projeto">Projeto</Link></li>
              <li><Link className="hover:opacity-75 text-marrom font-sans2 font-bold" to="/referencias">Referências</Link></li>
            </ul>
          </nav>
        </header>
      </div>

      <div className="flex flex-col items-center mt-16 px-4 md:px-8">
  <h1 className="font-sans font-bold text-marrom-claro text-4xl md:text-5xl text-center md:text-left mb-8">
    Sobre o Projeto
  </h1>

  <div className="flex flex-col md:flex-row items-start w-full max-w-6xl gap-12 mt-10">
    {/* Texto */}
    <div className="md:w-1/2">
      <h2 className="font-sans font-medium text-lg md:text-xl text-black text-justify leading-relaxed">
      Texto sobre o Projeto
      </h2>
    </div>

    {/* Video Responsivo */}
    <div className="w-full md:w-1/2 h-auto">
      <iframe
        src="youtube.com/"
        title="YouTube Video"
        className="w-full aspect-video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </div>
</div>

    
    </main>

    
  
  );
}
