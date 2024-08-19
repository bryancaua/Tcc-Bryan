import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoHotDog from '../../assets/logo.svg';
import Proximo from '../../assets/prox.svg';

export default function Como() {
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
            <li><Link className="hover:opacity-75 text-marrom font-sans2 font-bold" to="/referencias">Referências</Link></li>
          </ul>
        </nav>
      </header>

      <section className="flex-grow p-8 flex flex-col justify-between">
        <div>
          <h2 className="text-4xl font-sans2 mb-8 font-bold">Como nosso projeto irá funcionar?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-bege p-4 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">1º -</h3>
              <p className="text-marrom font-sans2 text-lg px-14">
                Colocamos o aquecedor embutido no teto da casinha do animal de estimação para que o ar quente possa cair sobre o pet, e então se esquentar de maneira segura. Vale ressaltar que o aquecedor tem algo revestido, para não ter chances de seu animal de estimação encostar e acabar se machucando.
              </p>
            </div>
            <div className="bg-amarelo-escuro p-4 rounded-lg h-96">
              <h3 className="text-2xl font-bold mb-2">2º -</h3>
              <p className="text-marrom font-sans2 text-lg px-14">
                Para fazer o aquecedor funcionar, criamos um aplicativo para Android e IOS para você ligar/desligar o aquecedor e controlar a temperatura através de seu celular.
              </p>
            </div>
            <div className="bg-laranja-claro p-4 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">3º -</h3>
              <p className="text-marrom font-sans2 text-lg px-14">
                Não importa a distância que você esteja do aquecedor, você poderá controlar a temperatura através de um click em seu celular!
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
  <Link 
    to="/Porque-Comprar"
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
