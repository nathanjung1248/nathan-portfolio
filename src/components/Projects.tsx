import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Process Automation Project",
      description: "End-to-end automation project developed as RPA Student Developer, showcasing skills in process optimization and technical implementation.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop&crop=center",
      tags: ["RPA", "Automation", "Process Optimization","BluePrism"],
      showLiveDemo: false,
      showCode: false,
    },
    {
      title: "Data Modelling Project",
      description: "Data-driven solution project demonstrating expertise in data analysis, modeling, and creating meaningful insights from complex datasets.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop&crop=center",
      tags: ["Data Analysis", "Data Modelling", "Python"],
      liveUrl: "#",
      githubUrl: "#",
      showLiveDemo: true,
      showCode: true,
    },
    {
      title: "Frontend Development",
      description: "Modern web application showcasing React development skills, UI/UX design principles, and responsive design implementation.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop&crop=center",
      tags: ["React", "HTML & CSS", "UI/UX"],
      liveUrl: "#",
      githubUrl: "#",
      showLiveDemo: true,
      showCode: true,
    },
    {
      title: "Academic Research Project",
      description: "Research project combining computational systems and algorithm design, reflecting academic excellence and technical problem-solving.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop&crop=center",
      tags: ["Algorithms", "Research", "Computer Science"],
      liveUrl: "#",
      githubUrl: "#",
      showLiveDemo: false,
      showCode: true,
    },
  ];

  return (
    <section className="py-20 bg-secondary/5" id="projects">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for creating data-driven solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-xl transition-all duration-500 hover:scale-[1.02] group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {(project.showLiveDemo || project.showCode) && (
                  <div className="flex space-x-4">
                    {project.showLiveDemo && (
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors duration-300"
                      >
                        <ExternalLink size={16} />
                        <span>Live Demo</span>
                      </a>
                    )}
                    {project.showCode && (
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 border border-border px-4 py-2 rounded-lg hover:bg-secondary transition-colors duration-300"
                      >
                        <Github size={16} />
                        <span>Code</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
