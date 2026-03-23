"use client";

const About = () => {
  return (
    <section id="about" className="bg-[#0D0D0D] py-24 border-y border-[#00FF41]/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-[#00FF41]">
              01. SOBRE_O_SISTEMA
            </h2>
            <div className="h-[1px] flex-grow bg-[#00FF41]/20"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-7 space-y-6 font-mono text-slate-400 leading-relaxed">
              <p>
                <span className="text-[#00FF41]">></span> Sou um desenvolvedor fullstack apaixonado por criar soluções digitais inovadoras e eficientes. Minha jornada começou há mais de 5 anos, focada em construir sistemas robustos e escaláveis.
              </p>
              <p>
                <span className="text-[#00FF41]">></span> Especializo-me em desenvolvimento backend com <span className="text-white">Java (Spring Boot)</span> e frontend com <span className="text-white">React/Next.js</span>. Acredito no poder do código limpo e arquitetura sólida.
              </p>
              <p>
                <span className="text-[#00FF41]">></span> Atualmente focado em microserviços, segurança de dados e otimização de performance em larga escala.
              </p>
            </div>

            <div className="md:col-span-5">
              <div className="relative group">
                <div className="absolute -inset-2 border border-[#00FF41]/30 group-hover:border-[#00FF41] transition-all duration-500"></div>
                <div className="bg-[#00FF41]/5 p-6 border border-[#00FF41]/20">
                  <h3 className="text-sm font-bold text-[#00FF41] mb-4 uppercase tracking-widest">Core_Directives</h3>
                  <ul className="space-y-3 text-xs font-mono text-slate-400">
                    <li className="flex items-center gap-2">
                      <span className="text-[#00FF41]">[OK]</span> TEST_DRIVEN_DEVELOPMENT
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#00FF41]">[OK]</span> CLEAN_ARCHITECTURE
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#00FF41]">[OK]</span> CI_CD_AUTOMATION
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-[#00FF41]">[OK]</span> SCALABLE_SYSTEMS
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;