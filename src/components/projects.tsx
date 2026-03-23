"use client";

import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Fullstack",
      description: "Sistema completo de e-commerce com autenticação, carrinho de compras, integração com Stripe e painel administrativo. Frontend em Next.js com TypeScript e backend em Java Spring Boot.",
      technologies: ["Next.js", "TypeScript", "Java", "Spring Boot", "Stripe", "MySQL"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      title: "API Management System",
      description: "Sistema de gerenciamento de APIs com documentação automática (Swagger), autenticação JWT, rate limiting e monitoramento. Backend robusto em Spring Boot com banco PostgreSQL.",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Swagger", "JWT", "Docker"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    },
    {
      title: "Laravel Integration Platform",
      description: "Plataforma de integração com frontend em Next.js e backend em PHP Laravel. Sistema de autenticação, CRUD completo, upload de arquivos e API RESTful.",
      technologies: ["Next.js", "PHP", "Laravel", "MySQL", "JWT", "REST API"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com"
    }
  ];

  return (
    <section id="projects" className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900">
            Projetos em Destaque
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Alguns dos projetos que desenvolvi, focando em arquitetura limpa, 
            performance e experiência do usuário.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2.5 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                      className="flex items-center gap-2"
                    >
                      <Github className="h-4 w-4" />
                      Código
                    </Button>
                    <Button
                      variant="default"
                      size="sm"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                      className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Ver Projeto
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