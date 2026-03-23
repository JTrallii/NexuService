"use client";

import { ExternalLink, Github, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "ENTERPRISE_ECOMMERCE",
      description: "Plataforma escalável com arquitetura de microserviços, processamento de pagamentos em tempo real e dashboard analítico.",
      technologies: ["Spring Boot", "Next.js", "Redis", "Docker"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "API_GATEWAY_CORE",
      description: "Sistema centralizado de gerenciamento de tráfego com autenticação mútua TLS, rate limiting e observabilidade.",
      technologies: ["Java", "PostgreSQL", "Prometheus", "Grafana"],
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "CLOUD_SYNC_PLATFORM",
      description: "Solução de sincronização de dados multi-cloud com criptografia ponta a ponta e suporte a grandes volumes.",
      technologies: ["Node.js", "AWS S3", "TypeScript", "Terraform"],
      githubUrl: "#",
      liveUrl: "#"
    }
  ];

  return (
    <section id="projects" className="bg-[#0D0D0D] py-24 border-t border-[#00FF41]/10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-[#00FF41]">
              03. REPOSITORIOS_ATIVOS
            </h2>
            <div className="h-[1px] flex-grow bg-[#00FF41]/20"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-[#00FF41]/5 border border-[#00FF41]/10 p-8 hover:border-[#00FF41]/50 transition-all duration-500 glow-border"
              >
                <div className="mb-6 flex justify-between items-start">
                  <div className="p-2 border border-[#00FF41]/20 text-[#00FF41]">
                    <Layers size={20} />
                  </div>
                  <span className="text-[10px] font-mono text-[#00FF41]/40">ID: 00{index + 1}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-white group-hover:text-[#00FF41] transition-colors tracking-tighter">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 mb-8 leading-relaxed text-xs font-mono">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-[9px] font-mono text-[#00FF41]/60 uppercase"
                    >
                      #{tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-6 border-t border-[#00FF41]/10">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-[#00FF41]/60 hover:text-[#00FF41] hover:bg-transparent p-0 h-auto font-mono text-[10px]"
                  >
                    <Github size={14} className="mr-1" /> SOURCE_CODE
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-[#00FF41] hover:text-[#00FF41] hover:bg-transparent p-0 h-auto font-mono text-[10px] ml-auto"
                  >
                    LIVE_DEMO <ExternalLink size={14} className="ml-1" />
                  </Button>
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