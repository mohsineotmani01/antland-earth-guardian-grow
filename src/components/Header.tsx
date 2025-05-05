
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <span className="text-2xl font-bold text-primary tracking-tight">
            ANT<span className="text-black dark:text-white">LAND</span>
          </span>
        </a>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#features" className="text-foreground/80 hover:text-primary transition-colors font-medium">Features</a>
          <a href="#how-it-works" className="text-foreground/80 hover:text-primary transition-colors font-medium">How It Works</a>
          <a href="#testimonials" className="text-foreground/80 hover:text-primary transition-colors font-medium">Testimonials</a>
          <a href="#faq" className="text-foreground/80 hover:text-primary transition-colors font-medium">FAQ</a>
        </nav>
        
        <div className="hidden md:block">
          <Button>Shop Now</Button>
        </div>
        
        <button 
          className="md:hidden text-foreground" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background shadow-lg border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-foreground/80 hover:text-primary transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#how-it-works" 
              className="text-foreground/80 hover:text-primary transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#testimonials" 
              className="text-foreground/80 hover:text-primary transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
            <a 
              href="#faq" 
              className="text-foreground/80 hover:text-primary transition-colors font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </a>
            <Button className="w-full">Shop Now</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
