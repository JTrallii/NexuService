"use client";

const Skills = () => {
  return (
    <div className="bg-gray-50 p-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-medium mb-2">Frontend</h3>
            <ul className="space-y-2">
              <li>React</li>
              <li>Next.js</li>
              <li>JavaScript/TypeScript</li>
              <li>HTML/CSS</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">Backend</h3>
            <ul className="space-y-2">
              <li>Java (Spring Boot)</li>
              <li>REST APIs</li>
              <li>Database Design</li>
              <li>ORM (Hibernate)</li>
              <li>Authentication</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;