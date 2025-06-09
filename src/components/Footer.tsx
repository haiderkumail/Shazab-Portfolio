
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <div className="text-2xl font-bold gradient-text mb-2">DevOps Pro</div>
            <p className="text-muted-foreground text-sm">
              Building reliable infrastructure for the future
            </p>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© {currentYear} Made with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>by Alex Johnson</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
