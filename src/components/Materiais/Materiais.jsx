import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoHotDog from '../../assets/logo.svg';

export default function ListaMateriais() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const materiais = [
    { 
      nome: 'Arduino UNO', 
      descricao: 'O Arduino Uno é uma plataforma de prototipagem eletrônica de código aberto usada para aprender eletrônica, criar protótipos, e automatizar tarefas.', 
      preco: 'R$ 39,90', 
      quantidade: 1 
    },
    { 
      nome: 'Sensor de Temperatura DS18B20', 
      descricao: 'O termômetro digital DS18B20 fornece medições de temperatura com apenas 1 fio.', 
      preco: 'R$ 15,70', 
      quantidade: 1 
    },
    { 
      nome: 'Módulo relé de 1 Canal', 
      descricao: 'É um dispositivo eletromecânico que tem como função principal alterar o estado de um circuito elétrico, permitindo ou bloqueando o fluxo de corrente elétrica.', 
      preco: 'R$ 9,41', 
      quantidade: 1 
    },
    { 
      nome: 'Kit Jumpers', 
      descricao: 'O Jumper é um pequeno condutor utilizado para conectar dois pontos de um circuito elétrico.', 
      preco: 'R$ 15,00', 
      quantidade: 65 
    },
    { 
      nome: 'Botões Push Button', 
      descricao: 'É bastante utilizado como botão para acionamento de circuito elétrico. Permite a passagem da corrente e assim o circuito é alimentado.', 
      preco: 'R$ 1,88', 
      quantidade: 3 
    },
    { 
      nome: 'Display LCD 16 x 2', 
      descricao: 'O display LCD 16x2 pode ser utilizado em diversos projetos em que o operador ou usuário necessita de uma resposta visual devido ao seu ótimo funcionamento.', 
      preco: 'R$ 16,91', 
      quantidade: 1 
    },
    { 
      nome: 'Resistores de 10kR', 
      descricao: 'Ideal para limitar a corrente elétrica; indicado para projetos eletrônicos.', 
      preco: 'R$ 1,49', 
      quantidade: 3 
    },
    { 
      nome: 'Resistor de 1kR', 
      descricao: 'Limitar a corrente elétrica em projetos eletrônicos, visando proteger os componentes e aumentar a vida útil.', 
      preco: 'R$ 1,49', 
      quantidade: 3 
    },
  ];

  return (
    <main className="bg-off-white min-h-screen">
      {/* Cabeçalho */}
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
            <li><Link className="opacity-75 text-marrom font-sans2 font-bold" to="/materiais">Materiais</Link></li>
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
            <li><Link className="hover:opacity-75 text-marrom font-sans2 font-bold" to="/sobre-o-projeto" onClick={toggleMenu}>Sobre o projeto</Link></li>
            <li><Link className="opacity-75 text-marrom font-sans2 font-bold" to="/materiais" onClick={toggleMenu}>Materiais</Link></li>
            <li><Link className="hover:opacity-75 text-marrom font-sans2 font-bold" to="/jogo">Jogo</Link></li>
            <li><Link className="hover:opacity-75 text-marrom font-sans2 font-bold" to="/referencias">Referências</Link></li>
          </ul>
        </nav>
      </header>
      
      {/* Conteúdo principal */}
      <section className="mt-8 p-4 md:p-8">
        <div className="overflow-x-auto">
          <h1 className="text-3xl md:text-6xl font-sans2 mb-8 font-bold text-center md:text-left">Lista de Materiais</h1>
          <table className="min-w-full shadow-md">
            <thead className="text-left">
              <tr>
                <th className="p-4 text-sm md:text-xl text-laranja-claro">Materiais</th>
                <th className="p-4 text-sm md:text-xl">Preço</th>
                <th className="p-4 text-sm md:text-xl">Quantidade</th>
              </tr>
            </thead>
            <tbody>
              {materiais.map((material, index) => (
                <tr key={index} className="border-t">
                  <td className="p-4 text-xs md:text-base font-medium">
                    <strong>{material.nome}:</strong> {material.descricao}
                  </td>
                  <td className="p-4 text-xs md:text-base">{material.preco}</td>
                  <td className="p-4 text-xs md:text-base">{material.quantidade.toString().padStart(2, '0')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
