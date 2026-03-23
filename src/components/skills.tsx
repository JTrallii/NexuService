"use client";

import { Layout, Server, Settings, Database, Cloud, ShieldCheck } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Architecture",
      icon: <Layout className="text-blue-400" size={24} />,
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "State Management", "Performance Optimization"]
    },
    {
      title: "Backend Engineering",
      icon: <Server className="text-cyan-400" size={24} />,
      skills: ["Java", "Spring Boot", "Microservices", "RESTful APIs", "GraphQL", "Node.js"]
    },
    {
      title: "Data & Infrastructure",
      icon: <Database className="text-indigo-400" size={24} />,
      skills: ["PostgreSQL", "Redis", "Docker", "AWS", "CI/CD Pipelines", "Kubernetes"]
    }
  ];

  return (
    <section id="skills" className="bg-[#020617] py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Stack Tecnológica</h2>
          <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div key={index} className="group p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm">
              <div className="mb-6 p-3 rounded-xl bg-slate-800 w-fit group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-slate-800/50 text-slate-300 rounded-lg text-sm border border-slate-700/50 hover:border-blue-500/30 hover:text-blue-400 transition-colors"
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