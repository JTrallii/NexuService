"use client";

import { ExternalLink, Github, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Enterprise E-commerce",
      description: "Plataforma escalável com arquitetura de microserviços, processamento de pagamentos em tempo real e dashboard analítico avançado.",
      technologies: ["Spring Boot", "Next.js", "Redis", "Docker"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "API Gateway Core",
      description: "Sistema centralizado de gerenciamento de tráfego com autenticação mútua TLS, rate limiting dinâmico e observabilidade completa.",
      technologies: ["Java", "PostgreSQL", "Prometheus", "Grafana"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Cloud Sync Platform",
      description: "Solução de sincronização de dados multi-cloud com criptografia ponta a ponta e suporte a grandes volumes de arquivos.",
      technologies: ["Node.js", "AWS S3", "TypeScript", "Terraform"],
      githubUrl: "#",
      liveUrl: "#"
    }
  ];

  return (
    <section id="projects" className="bg-[#020617] py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Projetos em Destaque</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Soluções de engenharia focadas em performance, segurança e escalabilidade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-slate-900/40 rounded-3xl border border-slate-800 overflow-hidden hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-600/10"
              >
                <div className="p-8">
                  <div className="mb-6 p-3 rounded-2xl bg-blue-600/10 w-fit text-blue-400 group-hover:scale-110 transition-transform duration-300">
                    <Layers size={24} />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-400 mb-8 leading-relaxed text-sm md:text-base">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2.5 py-1 bg-slate-800/50 text-slate-300 rounded-lg text-xs font-medium border border-slate-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4 border-t border-slate-800/50">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                      className="flex items-center gap-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl"
                    >
                      <Github size={18} />
                      Código
                    </Button>
                    <Button
                      variant="default"
                      size="sm"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                      className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl shadow-lg shadow-blue-600/20"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;