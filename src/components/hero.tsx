"use client";

import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-blue-900 to-gray-800 text-white p-8">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">John Doe</h1>
          <h2 className="text-xl font-medium mb-6">Fullstack Developer</h2>
          <p className="text-lg mb-8">
            Passionate about building scalable systems with Java backend and React/Next.js frontend.
          </p>
          <div className="flex gap-4">
            <Button variant="primary" onClick={() => console.log('View Projects')}>
              View Projects
            </Button>
            <Button variant="secondary" onClick={() => console.log('Contact')}>
              Contact
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;