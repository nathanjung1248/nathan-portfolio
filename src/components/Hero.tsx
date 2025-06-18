import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-secondary/20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">
            Nathan Jung
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Computer Science Student & Developer
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            I am a Computer Science student from Calgary, Canada with experience in Process Automation, 
            Frontend Development, UI/UX, and Data Modelling. Passionate about creating data-driven solutions.
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:nathan.jung1248@gmail.com"
              className="p-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>
          
          <div className="animate-bounce">
            <ArrowDown className="mx-auto text-muted-foreground" size={32} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
