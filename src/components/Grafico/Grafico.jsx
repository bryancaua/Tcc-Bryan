import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoHotDog from '../../assets/logo.svg';
import Grafico from '../../assets/grafico.svg';
import Proximo from '../../assets/prox.svg';

export default function PQ() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
  setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <main className="bg-off-white min-h-screen flex flex-col">

          {/* Header */}
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
            <li><Link className="opacity-75 text-marrom font-sans2 font-bold" to="/sobre-o-projeto">Sobre o projeto</Link></li>
            <li><Link className="hover:opacity-75 text-marrom font-sans2 font-bold" to="/materiais">Materiais</Link></li>
            <li><Link className="hover:opacity-75 text-marrom font-sans2 font-bold" to="/jogo">Jogo</Link></li>
            <li><Link className="hover:opacity-75 text-marrom font-sans2 font-bold" to="/video-do-projeto">Projeto</Link></li>
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
            <li><Link className="hover:opacity-75 text-marrom font-sans2 font-bold" to="/" onClick={toggleMenu}>Introdução</Link></li>
            <li><Link className="hover:opacity-75 text-marrom font-sans2 font-bold" to="/sobre-nos" onClick={toggleMenu}>Sobre nós</Link></li>
            <li><Link className="hover:opacity-75 text-marrom font-sans2 font-bold" to="/sobre-o-projeto" onClick={toggleMenu}>Sobre o projeto</Link></li>
            <li><Link className="hover:opacity-75 text-marrom font-sans2 font-bold" to="/materiais" onClick={toggleMenu}>Materiais</Link></li>
            <li><Link className="hover:opacity-75 text-marrom font-sans2 font-bold" to="/jogo">Jogo</Link></li>
            <li><Link className="hover:opacity-75 text-marrom font-sans2 font-bold" to="/video-do-projeto">Projeto</Link></li>
            <li><Link className="hover:opacity-75 text-marrom font-sans2 font-bold" to="/referencias">Referências</Link></li>
          </ul>
        </nav>
      </header>

      <div className="flex flex-col-reverse md:flex-row items-center mt-8 md:mt-16 px-4 md:px-8 justify-center">
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-6xl font-sans2 mb-4 md:mb-8 font-bold text-center md:text-left">
            Por que comprar uma cama <br className="hidden md:block" />
            aquecedora para seu pet?
          </h2>
          <p className="font-sans font-medium text-base md:text-lg text-black text-center md:text-left max-w-2xl mt-4 md:mt-10">
            Artigos indicam que camas aquecedoras podem ajudar em muitos benefícios da saúde de seu pet de estimação, e assim como os humanos, podem sofrer de hipotermia e congelamento durante o clima frio. Fatores como a raça do animal, idade, saúde e se eles têm acesso a um abrigo quente podem influenciar sua vulnerabilidade ao frio​​. Para mitigar o risco de doenças ou fatalidades relacionadas ao frio em animais de estimação, fornece uma cama aquecida pode ser uma medida preventiva crucial, oferecendo calor constante e proteção contra o frio. Para os donos de animais, garantir que seus pets fiquem aquecidos, especialmente durante os meses de inverno, utilizando camas aquecidas, pode reduzir significativamente o risco de problemas de saúde relacionados ao frio.
          </p>
        </div>
        <img 
          src={Grafico} 
          alt="Imagem de um cachorro" 
          className="w-full md:w-1/2 lg:max-w-md mt-8 md:mt-0 md:ml-8"
        />
      </div>
      <div className="flex justify-center lg:justify-end">
  <Link 
    to="/Materiais"
    className="bg-marrom-claro text-white font-bold py-2 px-6 rounded-full relative inline-block"
    style={{ 
      clipPath: 'polygon(0 50%, 10% 0, 90% 0, 100% 50%, 90% 100%, 10% 100%)',
      backgroundImage: 'url(/path/to/bone-shape.svg)',
      backgroundSize: 'cover',
    }}
  >
    <img 
      src={Proximo} 
      alt="" 
      className="w-24 h-auto md:w-auto md:h-auto"
    />
  </Link>
</div>
    </main>
  );
}
