"use client";

const About = () => {
  return (
    <div className="bg-white p-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">About Me</h2>
        <p className="text-gray-600 mb-8">
          With 5+ years of experience in fullstack development, I specialize in creating robust systems using Java for backend and React/Next.js for frontend. I'm passionate about clean code, efficient problem-solving, and continuous learning.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-medium mb-2">Technical Skills</h3>
            <ul className="space-y-2">
              <li>Java (Spring Boot)</li>
              <li>React/Next.js</li>
              <li>REST APIs</li>
              <li>Database Design</li>
              <li>Git</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">Approach</h3>
            <ul className="space-y-2">
              <li>Clean, maintainable code</li>
              <li>Responsive design</li>
              <li>Performance optimization</li>
              <li>Testing and debugging</li>
              <li>Collaboration and communication</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;