
import { useState, useEffect, useRef } from 'react';
import { Building, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Experience = () => {
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

  const experiences = [
    {
      title: 'Senior DevOps Engineer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Led infrastructure automation initiatives, reducing deployment time by 75% and improving system reliability to 99.99% uptime.',
      achievements: [
        'Architected multi-cloud infrastructure serving 10M+ users',
        'Implemented GitOps workflows reducing manual deployments by 90%',
        'Mentored junior engineers and established DevOps best practices'
      ],
      color: 'border-l-electric-blue'
    },
    {
      title: 'DevOps Engineer',
      company: 'CloudScale Inc.',
      location: 'Austin, TX',
      period: '2020 - 2022',
      description: 'Designed and maintained scalable infrastructure for microservices architecture, focusing on automation and monitoring.',
      achievements: [
        'Built CI/CD pipelines reducing time-to-market by 60%',
        'Implemented container orchestration with Kubernetes',
        'Established monitoring and alerting systems across all environments'
      ],
      color: 'border-l-emerald'
    },
    {
      title: 'Site Reliability Engineer',
      company: 'DataFlow Systems',
      location: 'Seattle, WA',
      period: '2019 - 2020',
      description: 'Focused on system reliability, performance optimization, and incident response for high-traffic applications.',
      achievements: [
        'Reduced system downtime by 80% through proactive monitoring',
        'Implemented automated failover and disaster recovery procedures',
        'Optimized application performance resulting in 50% faster response times'
      ],
      color: 'border-l-orange'
    },
    {
      title: 'Junior DevOps Engineer',
      company: 'StartupTech',
      location: 'Portland, OR',
      period: '2018 - 2019',
      description: 'Started my DevOps journey by automating manual processes and learning cloud infrastructure fundamentals.',
      achievements: [
        'Automated deployment processes reducing manual effort by 70%',
        'Migrated legacy applications to containerized environments',
        'Contributed to infrastructure-as-code initiatives'
      ],
      color: 'border-l-purple'
    },
  ];

  return (
    <section id="experience" ref={ref} className="py-20">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'slide-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            Professional Experience
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-electric-blue to-purple"></div>
              
              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative">
                    {/* Timeline dot */}
                    <div className="absolute left-6 w-4 h-4 bg-electric-blue rounded-full shadow-lg z-10"></div>
                    
                    <Card className={`ml-20 card-hover border-l-4 ${exp.color}`}>
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-semibold text-electric-blue">{exp.title}</h3>
                            <div className="flex items-center gap-4 text-muted-foreground mt-2">
                              <div className="flex items-center gap-1">
                                <Building className="h-4 w-4" />
                                <span>{exp.company}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                <span>{exp.location}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-1 text-muted-foreground mt-2 md:mt-0">
                            <Calendar className="h-4 w-4" />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground mb-4">{exp.description}</p>
                        
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achieveIndex) => (
                            <li key={achieveIndex} className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-electric-blue rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
