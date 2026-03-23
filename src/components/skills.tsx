"use client";

import { Layout, Server, Database } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "FRONTEND_MODULE",
      icon: <Layout className="text-[#00FF41]" size={24} />,
      skills: ["React", "Next.js", "TypeScript", "Tailwind", "Redux", "Web-Vitals"]
    },
    {
      title: "BACKEND_ENGINE",
      icon: <Server className="text-[#00FF41]" size={24} />,
      skills: ["Java", "Spring Boot", "Microservices", "REST", "GraphQL", "Node.js"]
    },
    {
      title: "INFRA_DATA_CORE",
      icon: <Database className="text-[#00FF41]" size={24} />,
      skills: ["PostgreSQL", "Redis", "Docker", "AWS", "Kubernetes", "Terraform"]
    }
  ];

  return (
    <section id="skills" className="bg-[#0D0D0D] py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-[#00FF41] mb-4">02. STACK_TECNOLOGICA</h2>
          <div className="h-px w-32 bg-[#00FF41]/30 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div key={index} className="group p-8 border border-[#00FF41]/10 bg-[#00FF41]/5 hover:border-[#00FF41]/50 transition-all duration-300 glow-border">
              <div className="mb-6 p-3 border border-[#00FF41]/20 w-fit group-hover:bg-[#00FF41]/10 transition-all">
                {category.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-6 tracking-widest">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-2 py-1 border border-[#00FF41]/20 text-[#00FF41]/70 text-[10px] font-mono hover:border-[#00FF41] hover:text-[#00FF41] transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;