"use client";

const Projects = () => {
  return (
    <div className="bg-white p-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            title="Fullstack E-commerce"
            description="Next.js frontend with Java Spring Boot backend, payment integration, and CRUD operations."
            technologies="Next.js, Java, Spring Boot, Stripe, MySQL"
            buttons={["View Project", "See Code"]}
          />
          <ProjectCard
            title="API Management System"
            description="Next.js frontend with Java backend, REST API design, and database integration."
            technologies="Next.js, Java, Spring Boot, PostgreSQL, Swagger"
            buttons={["View Project", "See Code"]}
          />
          <ProjectCard
            title="Laravel Integration"
            description="Next.js frontend with PHP Laravel backend, authentication, and data management."
            technologies="Next.js, PHP, Laravel, MySQL, JWT"
            buttons={["View Project", "See Code"]}
          />
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ title, description, technologies, buttons }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            {technologies.split(", ").map((tech, index) => (
              <span key={index} className="inline-block bg-gray-200 rounded-full px-2.5 py-0.5 text-xs font-medium text-gray-700">
                {tech}
              </span>
            ))}
          </div>
          <div className="flex space-x-2">
            {buttons.map((button, index) => (
              <Button key={index} variant="secondary" onClick={() => console.log(button)}>
                {button}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;