import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import LogoHotDog from '../../assets/logo.svg';

export default function Pagprincipal() {
  const navigate = useNavigate(); 

  
  const goToIntroducao = () => navigate('/introducao');
  const goToSobreNos = () => navigate('/sobre-nos'); 

  return (
    <main className="bg-bege h-screen p-8">
      <div className="container mx-auto h-full flex flex-col md:flex-row items-center justify-center"> 
        <div className="flex-shrink-0 mb-8 md:mb-0 -mt-20">
          <img 
            src={LogoHotDog} 
            alt="um cachorrinho dentro de uma casinha" 
            className="w-full h-auto max-w-xs md:max-w-sm" 
          />
        </div>

        <div className="flex flex-col justify-center items-center md:items-start md:ml-[100px]">
          <div className="mb-14 text-center md:text-left">
            <h1 className="font-sans font-bold text-black mb-8" style={{ fontSize: '45px' }}>
              HOT DOG
            </h1>
            <h2 className="font-sans font-semibold text-black" style={{ fontSize: '25px' }}>
              O sonho de todo animal
            </h2>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mt-16">
            <button
              onClick={goToIntroducao} // Adicionando o evento de clique para navegação
              className="bg-black text-white rounded-full px-10 py-4 text-lg transition transform hover:bg-gray-800 hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            >
              Introdução
            </button>
            <button
              onClick={goToSobreNos} // Adicionando o evento de clique para navegação
              className="bg-black text-white rounded-full px-10 py-4 text-lg transition transform hover:bg-gray-800 hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            >
              Sobre nós
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
