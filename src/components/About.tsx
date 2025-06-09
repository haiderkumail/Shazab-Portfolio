
import { useState, useEffect, useRef } from 'react';
import { Award, Users, Coffee, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
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

  const stats = [
    { icon: Award, label: 'Years Experience', value: '5+', color: 'text-electric-blue' },
    { icon: Users, label: 'Projects Completed', value: '50+', color: 'text-emerald' },
    { icon: Coffee, label: 'Deployments', value: '200+', color: 'text-orange' },
    { icon: Clock, label: 'Uptime Achieved', value: '99.9%', color: 'text-purple' },
  ];

  return (
    <section id="about" ref={ref} className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'slide-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Building the Future of Infrastructure</h3>
              <p className="text-lg text-muted-foreground mb-6">
                I'm a passionate DevOps Engineer with over 5 years of experience in designing, implementing, 
                and maintaining scalable cloud infrastructure. My expertise spans across AWS, Azure, Kubernetes, 
                Docker, and various automation tools.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                I believe in the power of automation to transform how teams work. From CI/CD pipelines to 
                infrastructure as code, I help organizations achieve faster deployments, improved reliability, 
                and reduced operational overhead.
              </p>
              <p className="text-lg text-muted-foreground">
                When I'm not optimizing pipelines or debugging infrastructure, you'll find me contributing 
                to open-source projects, writing technical blogs, or exploring the latest DevOps tools and practices.
              </p>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-electric-blue/20 to-purple/20 rounded-2xl flex items-center justify-center">
                <div className="text-6xl">👨‍💻</div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="card-hover text-center">
                <CardContent className="p-6">
                  <stat.icon className={`h-12 w-12 mx-auto mb-4 ${stat.color}`} />
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
