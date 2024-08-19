import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LogoHotDog from '../../assets/logo.svg';
import Arthur from '../../assets/arthur.svg';
import Bryan from '../../assets/bryan.svg';
import Melissa from '../../assets/melissa.svg';
import LinkedIn from '../../assets/LinkedIn.svg'
import Insta from '../../assets/insta.svg'
import Git from '../../assets/git.svg'

export default function Introducao() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <main className="bg-bege min-h-screen pb-16">
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
<<<<<<< HEAD
              <li><Link className="opacity-75 text-marrom font-sans2 font-bold" to="/sobre-nos">Sobre nós</Link></li>
              <li><Link className="hover:opacity-75 text-marrom font-sans2 font-bold" to="/sobre-o-projeto">Sobre o projeto</Link></li>
              <li><Link className="hover:opacity-75 text-marrom font-sans2 font-bold" to="/materiais">Materiais</Link></li>
              <li><Link className="hover:opacity-75 text-marrom font-sans2 font-bold" to="/referencias">Referências</Link></li>
=======
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
              <li><Link className="hover:opacity-75 text-marrom font-sans2 font-bold" to="/" onClick={toggleMenu}>Introdução</Link></li>
<<<<<<< HEAD
              <li><Link className="opacity-75 text-marrom font-sans2 font-bold" to="/sobre-nos" onClick={toggleMenu}>Sobre nós</Link></li>
              <li><Link className="hover:opacity-75 text-marrom font-sans2 font-bold" to="/sobre-o-projeto" onClick={toggleMenu}>Sobre o projeto</Link></li>
              <li><Link className="hover:opacity-75 text-marrom font-sans2 font-bold" to="/materiais" onClick={toggleMenu}>Materiais</Link></li>
              <li><Link className="hover:opacity-75 text-marrom font-sans2 font-bold" to="/referencias">Referências</Link></li>
=======
              <li><Link className="hover:opacity-75 text-marrom font-sans2 font-bold" to="/sobre-nos" onClick={toggleMenu}>Sobre nós</Link></li>
              <li><Link className="hover:opacity-75 text-marrom font-sans2 font-bold" to="/sobre-o-projeto" onClick={toggleMenu}>Sobre o projeto</Link></li>
              <li><Link className="hover:opacity-75 text-marrom font-sans2 font-bold" to="/materiais" onClick={toggleMenu}>Materiais</Link></li>
>>>>>>> cc50e638e11a0099fba0a9bde5101997fb972c6a
            </ul>
          </nav>
        </header>
      </div>

      <div className="flex flex-col items-center mt-16 px-4">
        <h1 className="font-sans font-bold text-4xl md:text-6xl text-marrom-claro mb-4 text-center">
          Sobre nós
        </h1>

        <h2 className="font-sans font-medium text-lg text-black max-w-2xl text-center mt-4 md:mt-10">
          Somos três alunos do Ensino Médio, estamos no 3º ano do colegial, e no momento estamos cursando T.I integrado ao Ensino Médio básico.
        </h2>
      </div>

      <div className="flex flex-wrap justify-center mt-8 gap-16">
        <div className="flex flex-col items-center mx-4">
          <img src={Arthur} alt='Foto do Arthur' className="w-32 md:w-48 object-cover"/>
          <h3 className="font-sans font-bold text-xl mt-10 text-center">Arthur Pereira</h3>
          <p className="font-sans text-center text-lg mt-2 max-w-[360px]">
            Sou o Arthur, tenho 17 anos, gosto de sair com amigos, praticar esportes, participar de eventos sociais, explorar hobbies e estudar sobre investimentos!
          </p>
          <div className="flex space-x-4 mt-4">
<<<<<<< HEAD
            <a href="https://www.linkedin.com/in/arthur-pereira-bab2a42ba/" target="_blank" rel="noopener noreferrer" className="text-marrom hover:opacity-75">
              <img src={LinkedIn} alt="" />
            </a>
            <a href="https://www.instagram.com/arthurliima_33?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==/" target="_blank" rel="noopener noreferrer" className="text-marrom hover:opacity-75">
=======
            <a href="https://www.linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="text-marrom hover:opacity-75">
              <img src={LinkedIn} alt="" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-marrom hover:opacity-75">
>>>>>>> cc50e638e11a0099fba0a9bde5101997fb972c6a
              <img src={Insta} alt="" />
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-marrom hover:opacity-75">
              <img src={Git} alt="" />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center mx-4">
          <img src={Bryan} alt='Foto do Bryan' className="w-32 md:w-48 object-cover"/>
          <h3 className="font-sans font-bold text-xl mt-8 text-center">Bryan</h3>
          <p className="font-sans text-center text-lg mt-2 max-w-[360px]">
            Sou o Bryan, tenho 17 anos, gosto de sair com os amigos, jogar futebol, jogar jogos de internet, conhecer pessoas, estudar programação e fazer academia!
          </p>
          <div className="flex space-x-4 mt-4">
<<<<<<< HEAD
            <a href="https://www.linkedin.com/in/bryan-cauã-arruda-santos-3aa5772ba/" target="_blank" rel="noopener noreferrer" className="text-marrom hover:opacity-75">
              <img src={LinkedIn} alt="" />
            </a>
            <a href="https://www.instagram.com/bryan_caua_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-marrom hover:opacity-75">
=======
            <a href="https://www.linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="text-marrom hover:opacity-75">
              <img src={LinkedIn} alt="" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-marrom hover:opacity-75">
>>>>>>> cc50e638e11a0099fba0a9bde5101997fb972c6a
              <img src={Insta} alt="" />
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-marrom hover:opacity-75">
              <img src={Git} alt="" />
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center mx-4">
          <img src={Melissa} alt='Foto da Melissa' className="w-36 md:w-52 object-cover"/>
          <h3 className="font-sans font-bold text-xl mt-8 text-center">Melissa</h3>
          <p className="font-sans text-center text-lg mt-2 max-w-[370px]">
            Sou a Melissa, tenho 17 anos, adoro praticar esportes, adoro sair com meus amigos, sou uma pessoa extremamente extrovertida, gosto muito de ir à shows, e adoro conhecer pessoas novas!
          </p>
          <div className="flex space-x-4 mt-4">
<<<<<<< HEAD
            <a href="https://www.linkedin.com/in/melissa-domingos-82aa542ba/" target="_blank" rel="noopener noreferrer" className="text-marrom hover:opacity-75">
              <img src={LinkedIn} alt="" />
            </a>
            <a href="https://www.instagram.com/mel.domingoss?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-marrom hover:opacity-75">
=======
            <a href="https://www.linkedin.com/in/" target="_blank" rel="noopener noreferrer" className="text-marrom hover:opacity-75">
              <img src={LinkedIn} alt="" />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-marrom hover:opacity-75">
>>>>>>> cc50e638e11a0099fba0a9bde5101997fb972c6a
              <img src={Insta} alt="" />
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-marrom hover:opacity-75">
              <img src={Git} alt="" />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
