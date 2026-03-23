"use client";

const About = () => {
  return (
    <section id="about" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">
            Sobre Mim
          </h2>
          
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-gray-600 leading-relaxed mb-6">
              Sou um desenvolvedor fullstack apaixonado por criar soluções digitais inovadoras e eficientes. 
              Minha jornada na programação começou há mais de 5 anos, e desde então venho me dedicando a 
              construir sistemas robustos e escaláveis.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Especializo-me em desenvolvimento backend com Java (Spring Boot) e frontend com React/Next.js. 
              Acredito no poder do código limpo, das boas práticas de desenvolvimento e do trabalho em equipe 
              para entregar produtos de alta qualidade.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Estou sempre em busca de novos conhecimentos e tecnologias, mantendo-me atualizado com as 
              tendências do mercado e dedicando-me ao aprendizado contínuo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Formação & Experiência</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">▹</span>
                  <span className="text-gray-700">5+ anos de experiência em desenvolvimento fullstack</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">▹</span>
                  <span className="text-gray-700">Especialista em Java (Spring Boot) e React/Next.js</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">▹</span>
                  <span className="text-gray-700">Experiência com arquitetura de sistemas escaláveis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">▹</span>
                  <span className="text-gray-700">Foco em código limpo e manutenível</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Abordagem</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">▹</span>
                  <span className="text-gray-700">Desenvolvimento orientado a testes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">▹</span>
                  <span className="text-gray-700">Design responsivo e acessível</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">▹</span>
                  <span className="text-gray-700">Otimização de performance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">▹</span>
                  <span className="text-gray-700">Colaboração efetiva em equipe</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;