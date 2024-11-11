import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import LogoHotDog from '../../assets/logo.svg';
import PC from '../../assets/pc.svg';
import MAO from '../../assets/mao.svg';
import Bandeira from '../../assets/bandeira.svg';
import Proximo from '../../assets/prox.svg';

export default function Sobre() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <body className='overflow-hidden max-h-screen'>
    <main className="bg-off-white">
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
            <li><Link className="opacity-75 text-marrom font-sans2 font-bold" to="/sobre-o-projeto" onClick={toggleMenu}>Sobre o projeto</Link></li>
            <li><Link className="hover:opacity-75 text-marrom font-sans2 font-bold" to="/materiais" onClick={toggleMenu}>Materiais</Link></li>
            <li><Link className="hover:opacity-75 text-marrom font-sans2 font-bold" to="/jogo">Jogo</Link></li>
            <li><Link className="hover:opacity-75 text-marrom font-sans2 font-bold" to="/referencias">Referências</Link></li>
          </ul>
        </nav>
      </header>

      <section className="p-8">
        <h2 className="text-3xl md:text-6xl font-sans2 mb-3 font-bold">Apresentação do projeto</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-marrom text-base">
          {/* Diferencial do projeto */}
          <div className="w-full md:w-3/4">
            <img 
              src={PC} 
              alt="" 
            />
            <h3 className="text-2xl font-bold mb-4">Diferencial do projeto</h3>
            <p>Por que não comprar uma caminha normal ou roupas para o seu pet?</p>
            <p><strong className='text-laranja'>Praticidade:</strong> Uma caminha é mais fácil de limpar e manter do que várias peças de roupa. As roupas podem precisar ser lavadas frequentemente, especialmente se o seu cachorro se sujar ou sair para passear.</p>
            <p><strong className='text-laranja'>Durabilidade:</strong> Camas aquecedoras tendem a ser mais duráveis do que roupas, que podem rasgar ou desgastar-se rapidamente.</p>
          </div>
          {/* Objetivo do projeto */}
          <div className="w-full md:w-3/4">
            <img 
              src={MAO} 
              alt="" 
            />
            <h3 className="text-2xl font-bold mb-4">Objetivo do projeto</h3>
            <p>Nosso projeto é pensado à base de animais de estimação que passam por algum tipo de necessidade, como por exemplo, para animais idosos ou com problemas articulares como artrite, pois o calor pode aliviar a dor e a rigidez nas articulações. Desde o alívio da dor e estresse até a facilidade de uso e segurança, as camas aquecedoras são uma excelente adição que assim, acabaremos proporcionando a melhor sensação para seu animal.</p>
            <p>Conta com uma casinha de cachorro com um aquecedor embutido, conseguindo controlar a temperatura do ambiente da casinha pelo celular, independente do lugar onde estiver.</p>
          </div>
          {/* Público alvo */}
          <div className="w-full md:w-3/4">
            <img 
              src={Bandeira} 
              alt="" 
            />
            <h3 className="text-2xl font-bold mb-4">Público alvo</h3>
            <ul className="list-disc pl-5">
              <li>Casas de adoções, para que o nosso projeto possa oferecer um maior conforto aos animais, famílias em regiões mais geladas, como o Sul no Brasil ou outras regiões com baixas temperaturas.</li>
              <li>Veterinários locais, clínicas de reabilitação e hospitais veterinários.</li>
              <li>Instituições especializadas em fisioterapia e reabilitação animal.</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
  <Link 
    to="/Como"
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
  </body>
  );
}
