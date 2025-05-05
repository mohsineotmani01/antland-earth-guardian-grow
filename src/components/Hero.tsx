
import { ArrowRight, Shield, Sprout } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useRef } from 'react';

const Hero = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  
  useEffect(() => {
    // Staggered animation for text elements
    const title = titleRef.current;
    const desc = descRef.current;
    const image = imageRef.current;
    
    if (title && desc && image) {
      title.style.opacity = '0';
      desc.style.opacity = '0';
      image.style.opacity = '0';
      
      setTimeout(() => {
        title.style.opacity = '1';
        title.classList.add('animate-slide-in');
      }, 300);
      
      setTimeout(() => {
        desc.style.opacity = '1';
        desc.classList.add('animate-fade-in');
      }, 500);
      
      setTimeout(() => {
        image.style.opacity = '1';
        image.classList.add('animate-scale-in');
      }, 700);
    }
  }, []);

  return (
    <div className="relative pt-24 pb-16 md:py-32 overflow-hidden bg-gradient-to-b from-accent to-background">
      <div className="absolute inset-0 bg-[url('/leaf-pattern.svg')] opacity-5 animate-subtle-rotate"></div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary font-medium text-sm animate-pulse">
              Eco-Friendly • Safe • Effective
            </div>
            <h1 
              ref={titleRef}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground font-display transition-all duration-700"
            >
              Protect & Nourish <br />
              <span className="text-primary">Your Garden</span> Naturally
            </h1>
            <p 
              ref={descRef}
              className="text-lg text-muted-foreground max-w-xl transition-all duration-700"
            >
              ANTLAND is the innovative 2-in-1 solution combining a powerful termite trap and revitalizing organic fertilizer. Say goodbye to naml abyad invasions!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group hover:scale-105 transition-transform duration-300">
                Shop Now
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
              </Button>
              <Button size="lg" variant="outline" className="hover:scale-105 transition-transform duration-300">
                Learn More
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 pt-6">
              <div className="flex items-center hover:text-primary transition-colors duration-300">
                <Shield className="h-5 w-5 mr-2 text-primary animate-pulse" />
                <span className="text-sm font-medium">Eco-Friendly Technology</span>
              </div>
              <div className="flex items-center hover:text-primary transition-colors duration-300">
                <Sprout className="h-5 w-5 mr-2 text-primary animate-pulse" />
                <span className="text-sm font-medium">Organic Fertilizer</span>
              </div>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-md animate-float">
              <div className="aspect-square rounded-full bg-primary/10 absolute -inset-4 -z-10 animate-pulse"></div>
              <img 
                ref={imageRef}
                src="/lovable-uploads/47d64a6b-3eae-4bef-ba36-b95de0ec1b0b.png" 
                alt="ANTLAND product logo showing an ant on soil" 
                className="w-full h-auto rounded-2xl object-contain shadow-lg transition-all duration-700 transform hover:scale-105"
              />
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-card rounded-full shadow-lg p-3 animate-bounce-slow">
                <div className="bg-primary rounded-full text-white h-16 w-16 flex items-center justify-center text-xs font-bold">2-in-1<br />Solution</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
