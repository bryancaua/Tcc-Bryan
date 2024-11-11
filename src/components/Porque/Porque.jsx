import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoHotDog from '../../assets/logo.svg';
import Proximo from '../../assets/prox.svg'

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


      <section className="flex-grow p-4 md:p-8 flex flex-col justify-between">
        <div>
          <h2 className="text-3xl md:text-6xl font-sans2 mb-8 font-bold text-center md:text-left">
            Por que comprar uma cama <br className="hidden md:block" />
            aquecedora para seu pet?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-bege p-4 rounded-lg">
              <h3 className="text-xl md:text-2xl font-bold mb-2">Benefícios para a Saúde:</h3>
              <p className="text-marrom font-sans2 text-base md:text-lg px-4 md:px-14 mt-4 md:mt-8">
                Alívio para Animais Idosos: Pets mais velhos ou com problemas articulares podem sentir alívio nas dores e desconfortos ao usar uma cama aquecedora, pois o calor ajuda a reduzir a rigidez e a dor nas articulações​.
                <br />
                <br />
                Recuperação e Reabilitação: Animais que estão se recuperando de cirurgias ou doenças podem se beneficiar do calor, que promove a circulação sanguínea e acelera o processo de recuperação.
              </p>
            </div>
            <div className="bg-amarelo-escuro p-4 rounded-lg h-auto md:h-96">
              <h3 className="text-xl md:text-2xl font-bold mb-2">Prevenção de Problemas de Saúde:</h3>
              <p className="text-marrom font-sans2 text-base md:text-lg px-4 md:px-14 mt-4 md:mt-8">
                Evitar Doenças Respiratórias: Manter seu pet aquecido pode prevenir doenças respiratórias causadas por exposição ao frio, como resfriados e pneumonias​.
                <br />
                <br />
                Redução do Estresse: Um ambiente aquecido e confortável pode reduzir o estresse do seu pet, promovendo um melhor bem-estar geral.
              </p>
            </div>
            <div className="bg-laranja-claro p-4 rounded-lg">
              <h3 className="text-xl md:text-2xl font-bold mb-2">Conveniência e Praticidade:</h3>
              <p className="text-marrom font-sans2 text-base md:text-lg px-4 md:px-14 mt-4 md:mt-8">
                Fácil de Usar: Muitas camas aquecedoras são plug-and-play, ou seja, basta conectá-las na tomada para começar a funcionar, sem necessidade de configurações complexas.
                <br />
                <br />
                Higiene e Manutenção: Algumas camas possuem capas removíveis e laváveis, facilitando a limpeza e a manutenção do ambiente onde seu pet dorme.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
  <Link 
    to="/Porque-Comprar-uma-cama"
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
      </section>
    </main>
  );
}
