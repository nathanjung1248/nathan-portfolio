import React from 'react';
import { Code, Palette, Database, Zap } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "React, HTML & CSS, UI/UX Design",
    },
    {
      icon: Database,
      title: "Data Modelling",
      description: "Data analysis, modeling, and visualization",
    },
    {
      icon: Zap,
      title: "Process Automation",
      description: "RPA development and automation solutions",
    },
  ];

  return (
    <section className="py-20 bg-background" id="about">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            I am a Computer Science student at the University of Calgary, passionate about blending technical expertise with real-world problem-solving. My academic journey has been enriched by diverse coursework in computational systems, algorithm design, and even biology, reflecting my curiosity and adaptability. I've had the opportunity to apply my skills in meaningful ways, from developing data models to completing personal projects that challenge and excite me.
          </p>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed mt-6">
            Beyond academics, my professional experiences span roles such as RPA Student Developer, where I spearheaded end-to-end automation projects, and Pavement Maintenance Technician, where I honed my precision, time management, and adaptability. My volunteer work—ranging from coaching youth basketball to mentoring at summer camps—underscores my commitment to community, teamwork, and leadership.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={skill.title}
              className="bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <skill.icon className="text-primary" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {skill.title}
              </h3>
              <p className="text-muted-foreground">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
