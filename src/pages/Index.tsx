"use client";

import { useLocation } from "react-router-dom";
import { useEffect } from "react";

import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import MadeWithDyad from "@/components/made-with-dyad";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <MadeWithDyad />
      </div>
    </div>
  );
};

export default Index;