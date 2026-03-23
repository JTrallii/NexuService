"use client";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "HTML5/CSS3",
        "Tailwind CSS",
        "Responsive Design"
      ]
    },
    {
      title: "Backend",
      skills: [
        "Java",
        "Spring Boot",
        "REST APIs",
        "GraphQL",
        "Node.js",
        "PostgreSQL",
        "MySQL"
      ]
    },
    {
      title: "Ferramentas & Outros",
      skills: [
        "Git & GitHub",
        "Docker",
        "CI/CD",
        "AWS",
        "Figma",
        "Agile/Scrum",
        "Testes Automatizados"
      ]
    }
  ];

  return (
    <section id="skills" className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900">
            Habilidades & Tecnologias
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-6 text-gray-900 border-b pb-3">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;