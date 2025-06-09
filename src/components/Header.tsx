
import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold gradient-text">
            DevOps Pro
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('hero')} className="hover:text-electric-blue transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="hover:text-electric-blue transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('skills')} className="hover:text-electric-blue transition-colors">
              Skills
            </button>
            <button onClick={() => scrollToSection('projects')} className="hover:text-electric-blue transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('experience')} className="hover:text-electric-blue transition-colors">
              Experience
            </button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-electric-blue transition-colors">
              Contact
            </button>
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="hover:text-electric-blue transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="hover:text-electric-blue transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:contact@example.com" className="hover:text-electric-blue transition-colors">
              <Mail size={20} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="outline"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('hero')} className="text-left hover:text-electric-blue transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-left hover:text-electric-blue transition-colors">
                About
              </button>
              <button onClick={() => scrollToSection('skills')} className="text-left hover:text-electric-blue transition-colors">
                Skills
              </button>
              <button onClick={() => scrollToSection('projects')} className="text-left hover:text-electric-blue transition-colors">
                Projects
              </button>
              <button onClick={() => scrollToSection('experience')} className="text-left hover:text-electric-blue transition-colors">
                Experience
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left hover:text-electric-blue transition-colors">
                Contact
              </button>
              <div className="flex space-x-4 pt-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={20} />
                </a>
                <a href="mailto:contact@example.com">
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
