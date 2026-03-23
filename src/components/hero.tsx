"use client";

import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 text-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Olá, eu sou <span className="text-blue-300">Jason Tralli</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mb-8 text-blue-100">
            Desenvolvedor Fullstack especializado em Java (Backend) e React/Next.js (Frontend)
          </h2>
          <p className="text-lg md:text-xl mb-12 text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Com mais de 5 anos de experiência, crio sistemas escaláveis e robustos, 
            focando em código limpo, arquitetura bem planejada e excelente experiência do usuário.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="primary" 
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
            >
              Ver Projetos
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg"
            >
              Entrar em Contato
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;