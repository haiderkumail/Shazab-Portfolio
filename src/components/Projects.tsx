
import { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Server, Activity, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const projects = [
    {
      title: 'Kubernetes Auto-Scaling Platform',
      description: 'Built a comprehensive auto-scaling solution for microservices using Kubernetes HPA, VPA, and custom metrics. Achieved 40% cost reduction and 99.99% uptime.',
      technologies: ['Kubernetes', 'Prometheus', 'Grafana', 'AWS EKS', 'Terraform'],
      icon: Server,
      color: 'text-electric-blue',
      status: 'Production',
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      title: 'Multi-Cloud CI/CD Pipeline',
      description: 'Designed and implemented a robust CI/CD pipeline supporting deployment across AWS, Azure, and GCP with automated testing, security scanning, and rollback capabilities.',
      technologies: ['Jenkins', 'Docker', 'Terraform', 'SonarQube', 'GitLab'],
      icon: Activity,
      color: 'text-emerald',
      status: 'Live',
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
    {
      title: 'Infrastructure Monitoring Dashboard',
      description: 'Created a real-time monitoring solution with custom alerting, log aggregation, and performance analytics for 100+ microservices across multiple environments.',
      technologies: ['Prometheus', 'Grafana', 'ELK Stack', 'AlertManager', 'Node.js'],
      icon: Zap,
      color: 'text-orange',
      status: 'Active',
      github: 'https://github.com',
      demo: 'https://demo.com'
    },
  ];

  return (
    <section id="projects" ref={ref} className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'slide-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            Featured Projects
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="card-hover group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <project.icon className={`h-8 w-8 ${project.color}`} />
                    <Badge variant="secondary" className="text-xs">
                      {project.status}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-electric-blue transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-6 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
