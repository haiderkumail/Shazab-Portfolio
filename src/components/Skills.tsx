
import { useState, useEffect, useRef } from 'react';
import { Cloud, Server, Settings, Shield, Database, GitBranch } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [progressValues, setProgressValues] = useState<Record<string, number>>({});
  const ref = useRef(null);

  const skillCategories = [
    {
      icon: Cloud,
      title: 'Cloud Platforms',
      color: 'text-electric-blue',
      skills: [
        { name: 'AWS', level: 90 },
        { name: 'Azure', level: 85 },
        { name: 'Google Cloud', level: 75 },
        { name: 'DigitalOcean', level: 80 },
      ]
    },
    {
      icon: Server,
      title: 'Containerization',
      color: 'text-emerald',
      skills: [
        { name: 'Docker', level: 95 },
        { name: 'Kubernetes', level: 88 },
        { name: 'OpenShift', level: 70 },
        { name: 'Helm', level: 82 },
      ]
    },
    {
      icon: Settings,
      title: 'Automation & CI/CD',
      color: 'text-orange',
      skills: [
        { name: 'Jenkins', level: 92 },
        { name: 'GitLab CI', level: 88 },
        { name: 'GitHub Actions', level: 85 },
        { name: 'ArgoCD', level: 78 },
      ]
    },
    {
      icon: Database,
      title: 'Infrastructure as Code',
      color: 'text-purple',
      skills: [
        { name: 'Terraform', level: 90 },
        { name: 'Ansible', level: 85 },
        { name: 'CloudFormation', level: 80 },
        { name: 'Pulumi', level: 75 },
      ]
    },
    {
      icon: Shield,
      title: 'Monitoring & Security',
      color: 'text-electric-blue',
      skills: [
        { name: 'Prometheus', level: 88 },
        { name: 'Grafana', level: 90 },
        { name: 'ELK Stack', level: 82 },
        { name: 'SonarQube', level: 76 },
      ]
    },
    {
      icon: GitBranch,
      title: 'Version Control & Collaboration',
      color: 'text-emerald',
      skills: [
        { name: 'Git', level: 95 },
        { name: 'GitHub', level: 92 },
        { name: 'GitLab', level: 88 },
        { name: 'Bitbucket', level: 85 },
      ]
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate progress bars
          setTimeout(() => {
            const newProgressValues: Record<string, number> = {};
            skillCategories.forEach(category => {
              category.skills.forEach(skill => {
                newProgressValues[skill.name] = skill.level;
              });
            });
            setProgressValues(newProgressValues);
          }, 500);
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

  return (
    <section id="skills" ref={ref} className="py-20">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'slide-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            Technical Skills
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="card-hover">
                <CardHeader className="text-center">
                  <category.icon className={`h-12 w-12 mx-auto mb-4 ${category.color}`} />
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between mb-2">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress 
                          value={progressValues[skill.name] || 0} 
                          className="h-2"
                        />
                      </div>
                    ))}
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

export default Skills;
